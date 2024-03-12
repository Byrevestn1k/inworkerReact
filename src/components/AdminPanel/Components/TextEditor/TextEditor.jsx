
import { useEffect, useState } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './textEditor.css'
import TextArea from '../TextArea/TextArea';
import Input from '../Input';
import { addDocumentToDB_Firebase, setDocForID } from '../../helpers';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { PUSH_USEEFFECT_UPDATE } from '../../../../constants/actions';
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';
import ChipBox from '../ChipBox/ChipBox';

const TextEditor = ({ addORedit, setIsShowEditor, collectionfromPage }) => {

    let data = useSelector(state => state.transmitPageData.transmitPageData);
    let collection = useSelector(state => state.collection.collection);
    const categoriesList = useSelector(state => state.uploadCategories.uploadCategories);
    let [addPAge, setAddPAge] = useState(addORedit || false)
    let [title, setTitle] = useState(data?.title || undefined);
    let [description, setDescription] = useState(data?.description || undefined);
    let [keywords, setKeywords] = useState(data?.keywords || undefined);
    let [textvalue, setTextvalue] = useState(data?.textvalue || undefined);
    let [picture, setPicture] = useState(data?.picture || undefined);
    let date = new Date().toUTCString()
    let [path, setPath] = useState(data?.path || undefined);
    let [dateOfCreate, setDateOfCreate] = useState(data?.dateOfCreate || undefined);
    let [dateOfUpdate, setDateOfUpdate] = useState(data?.dateOfUpdate || undefined);
    let [priority, setPriority] = useState(data?.priority || undefined);
    let [published, setPublished] = useState(false);
    let [imageList, setImageList] = useState([]);
	const [titleChildCategories, setTitleChildCategories] = useState(data?.childCategories || []);

    let dispatch = useDispatch();
    let navigator = useNavigate()
    const html = textvalue || '';
    const contentBlock = htmlToDraft(html);
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    const editorState = EditorState.createWithContent(contentState);
    const [editorStates, setEditorStates] = useState(editorState);
    const storage = getStorage();
    const listRef = ref(storage, 'images/');
    useEffect(() => {
        listAll(listRef).then((resp) => {
            setImageList([])
            resp.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev) => [...prev, url])
                })
            })
        })

    }, [])
    function onAddDataList() {

        const dataList = {// об'єкт для додавання в БД
            parentCategories:titleChildCategories,  title, description, keywords, path, priority, textvalue, picture, dateOfUpdate: new Date().toUTCString(), dateOfCreate: dateOfCreate ? dateOfCreate : new Date().toUTCString(), published
        };
        addDocumentToDB_Firebase(collectionfromPage, dataList)
        dispatch({ type: PUSH_USEEFFECT_UPDATE })
        setIsShowEditor(false)
    }

    function onSetDataList() {
        let arrTitleCategories=[];
		titleChildCategories.map((el) => {
			for (let index = 0; index < categoriesList.length; index++) {
				
			   if (categoriesList[index].title == el) {
				arrTitleCategories.push(categoriesList[index].id)
			   }
			}
		 })
        const dataList = {// об'єкт для додавання в БД
            parentCategories:arrTitleCategories, title, description, keywords, path, priority, textvalue, picture, dateOfUpdate: new Date().toUTCString(), dateOfCreate: dateOfCreate ? dateOfCreate : new Date().toUTCString(), published
        };
        dispatch({ type: PUSH_USEEFFECT_UPDATE });
        setDocForID(collection, data.id, dataList);
        setTimeout(() => {
            navigator(`/admin/pages`);
        }, 200);
    }
    function onEditorStateChange(contentState) {
        if (contentBlock) {
            setEditorStates(contentState)
        }
    }
    function onChangeTitle(e) {
        setTitle(e)
    }
    function onChangeDescription(e) {
        setDescription(e)
    }
    function onChangeKeywords(e) {
        setKeywords(e)
    }
    function onChangePicture(e) {
        setPicture(e)
    }
    function onChangePath(e) {
        setPath(e)
    }
    function onChangePriority(e) {
        setPriority(e)
    }

    const onGetPublish = () => {
        let checkbox1 = document.querySelector(".is-publish");
        !checkbox1.checked ? setPublished(false) : setPublished(true);
    }
    function isChecked(data) {
        return data ? `checked` : null;
    }
    function onClickCloseHandler() {

        if (setIsShowEditor) {
            setIsShowEditor(false)
        }
        else {
            navigator(`/admin/pages`);
        }
    }

    let selector = <select name="images" id="">
        {imageList.map((el) => {
            return <option value=""><img src={el} alt="" /> </option>

        })}
    </select>
    // imageSelector.insertAdjacentElement(`afterbegin`, selector)
    return (
        <div className='text-editor'>
            <Input label={`Назва сторінки  (title)`} value={title} onChangeFunction={onChangeTitle} />
            <Input label={`Опис поста (description)`} value={description} onChangeFunction={onChangeDescription} />
            <Input label={`Ключові слова (keywords)`} value={keywords} onChangeFunction={onChangeKeywords} />
            <Input label={`Шлях до картинки`} value={picture} onChangeFunction={onChangePicture} />
            <Input label={`Закінчення посилання (path)`} value={path} onChangeFunction={onChangePath} />
            <Input disabled={`disabled`} label={`Дата створення`} value={dateOfCreate} />
            <Input type={`number`} label={`Пріоритет відображення`} value={priority} onChangeFunction={onChangePriority} />
            <Input type={'checkbox'} className={'is-publish'} label={`Опублікувати `} onChangeFunction={onGetPublish} name={`publish`} checked={isChecked(published)} />
            <ChipBox titleChildCategories={titleChildCategories} setTitleChildCategories={setTitleChildCategories}/>


            <Editor
                editorState={editorStates}
                onEditorStateChange={(e) => {
                    onEditorStateChange(e);
                    setTextvalue(draftToHtml(convertToRaw(editorStates.getCurrentContent())))
                }}
            />

            {/* <TextArea className={`text-editor-textarea`} value={draftToHtml(convertToRaw(editorStates.getCurrentContent()))} disabled={`disable`} onChange={(e) => {

            }} /> */}
            {
                addPAge ?
                    <button onClick={onAddDataList}>Add</button> :
                    <button onClick={onSetDataList}>Save</button>
            }
            <button onClick={onClickCloseHandler}>Close</button>

        </div >
    );
}
export default TextEditor;
let imageSelector = document.querySelector(`.rdw-image-modal-url-section`);

