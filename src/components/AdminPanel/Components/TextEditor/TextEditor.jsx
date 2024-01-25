
import { useState } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './textEditor.css'
import TextArea from '../TextArea/TextArea';
import Input from '../Input';
import { addDocumentToDB_Firebase } from '../../helpers';
import { useNavigate } from 'react-router';

const TextEditor = ({ collection, data }) => {

    const html = '';
    const contentBlock = htmlToDraft(html);
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    const editorState = EditorState.createWithContent(contentState);
    const [editorStates, setEditorStates] = useState(editorState);

    let [title, setTitle] = useState(data?.title);
    let [description, setDescription] = useState(data?.description);
    let [keywords, setKeywords] = useState(data?.keywords);

    let [textvalue, setTextvalue] = useState(data?.textvalue);
    // let [id, setId] = useState(data?.);
    let [picture, setPicture] = useState(data?.picture);
    let date = new Date().toUTCString(data?.date)
    let [path, setPath] = useState(data?.path);
    let [dateOfCreate, setDateOfCreate] = useState(date.toString());
    let [dateOfUpdate, setDateOfUpdate] = useState(date.toString());
    let [priority, setPriority] = useState(data?.priority);
    let [published, setPublished] = useState(false);
    console.log(dateOfUpdate);
    let navigator = useNavigate()
    function onAddDataList() {
        const dataList = {// об'єкт для додавання в БД
            title, description, keywords, path, priority, textvalue, picture, dateOfCreate, dateOfUpdate, published
        };
        addDocumentToDB_Firebase(collection, dataList)

        navigator(`/admin/pages`)

    }
    // function onSetDataList() {
    //     const dataList = {// об'єкт для оновлення в БД
    //         text, isFooter, isHeader, path, priority, isUppercasetext,
    //     };

    //     setDocForID(collection, data.id, dataList)
    //     setText('');
    //     setIsFooter('');
    //     setPriority('');
    //     setPath('');
    //     dispatch({ type: PUSH_USEEFFECT_UPDATE });
    //     setShowModal(false);

    // }
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
            <button onClick={onAddDataList}>save</button>
        </div >
    );
}
export default TextEditor;



