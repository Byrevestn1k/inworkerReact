
import { useState } from 'react';
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

const TextEditor = ({ addORedit, setIsShowEditor, collectionfromPage }) => {

    let selector = useSelector(state => state);
    let data = selector.transmitPageData.transmitPageData;
    let collection = selector.collection.collection;

    let [addPAge, setAddPAge] = useState(addORedit || false)
    let [title, setTitle] = useState(data?.title || undefined);
    let [description, setDescription] = useState(data?.description || undefined);
    let [keywords, setKeywords] = useState(data?.keywords || undefined);
    let [textvalue, setTextvalue] = useState(data?.textvalue || undefined);
    let [picture, setPicture] = useState(data?.picture || undefined);
    let date = new Date().toUTCString(data?.date)
    let [path, setPath] = useState(data?.path || undefined);
    let [dateOfCreate, setDateOfCreate] = useState(date.toString() || undefined);
    let [dateOfUpdate, setDateOfUpdate] = useState(date.toString() || undefined);
    let [priority, setPriority] = useState(data?.priority || undefined);
    let [published, setPublished] = useState(false);

    let dispatch = useDispatch();
    let navigator = useNavigate()
    const html = textvalue || '';
    const contentBlock = htmlToDraft(html);
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    const editorState = EditorState.createWithContent(contentState);
    const [editorStates, setEditorStates] = useState(editorState);

    function onAddDataList() {
        const dataList = {// об'єкт для додавання в БД
            title, description, keywords, path, priority, textvalue, picture, dateOfCreate, dateOfUpdate, published
        };
        addDocumentToDB_Firebase(collectionfromPage, dataList)
        dispatch({ type: PUSH_USEEFFECT_UPDATE })
        setIsShowEditor(false)
        console.log(collectionfromPage);
    }

    function onSetDataList() {
        const dataList = {// об'єкт для додавання в БД
            title, description, keywords, path, priority, textvalue, picture, dateOfCreate, dateOfUpdate, published
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

    return (
        <div>
            <Input label={`Назва сторінки  (title)`} value={title} onChangeFunction={onChangeTitle} />
            <Input label={`Опис поста (description)`} value={description} onChangeFunction={onChangeDescription} />
            <Input label={`Ключові слова (keywords)`} value={keywords} onChangeFunction={onChangeKeywords} />

            <Input label={`Шлях до картинки`} value={picture} onChangeFunction={onChangePicture} />
            <Input label={`Закінчення посилання (path)`} value={path} onChangeFunction={onChangePath} />
            {/* <Input disabled={`disabled`} label={`Дата створення`} value={dateOfCreate} /> */}

            <Input type={`number`} label={`Пріоритет відображення`} value={priority} onChangeFunction={onChangePriority} />
            <Input type={'checkbox'} className={'is-publish'} label={`Опублікувати `} onChangeFunction={onGetPublish} name={`publish`} checked={isChecked(published)} />
            <Editor
                editorState={editorStates}
                onEditorStateChange={(e) => {
                    onEditorStateChange(e);
                    setTextvalue(draftToHtml(convertToRaw(editorStates.getCurrentContent())))
                }}
            />

            <TextArea className={`text-editor-textarea`} value={draftToHtml(convertToRaw(editorStates.getCurrentContent()))} disabled={`disable`} onChange={(e) => {

            }} />
            {
                addPAge ? <button onClick={onAddDataList}>Add</button> :
                    <button onClick={onSetDataList}>Save</button>

            }

        </div >
    );
}
export default TextEditor;



