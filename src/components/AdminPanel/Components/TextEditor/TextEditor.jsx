
import { useState } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './textEditor.css'
import TextArea from '../TextArea/TextArea';
import Input from '../Input';

const TextEditor = () => {

    const html = '<p>Hey this <strong>editor</strong> rocks 😀</p>';
    const contentBlock = htmlToDraft(html);
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
    const editorState = EditorState.createWithContent(contentState);
    const [editorStates, setEditorStates] = useState(editorState);

    let [title, setTitle] = useState();
    let [description, setDescription] = useState();
    let [keywords, setKeywords] = useState();
    let [Textvalue, setTextvalue] = useState();

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

    return (
        <div>
            <Input label={`Назва сторінки поста (title)`} value={title} onChangeFunction={onChangeTitle} />
            <Input label={`Опис поста (description)`} value={description} onChangeFunction={onChangeDescription} />
            <Input label={`Ключові слова (keywords)`} value={keywords} onChangeFunction={onChangeKeywords} />

            <Editor
                editorState={editorStates}
                onEditorStateChange={(e) => {
                    onEditorStateChange(e);
                    setTextvalue(draftToHtml(convertToRaw(editorStates.getCurrentContent())))
                }}
            />

            <TextArea className={`text-editor-textarea`} value={draftToHtml(convertToRaw(editorStates.getCurrentContent()))} disabled={`disable`} onChange={(e) => {

            }} />
            <button onClick={() => {
                console.log(`title => `, title);
                console.log(`description => `, description);
                console.log(`keywords => `, keywords);
                console.log(`TEXT => `, Textvalue);
            }}>save</button>
        </div >
    );
}
export default TextEditor;



