
import { useState } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './textEditor.css'
import { log } from 'util';
const TextEditor = () => {

    const html = '<p>Hey this <strong>editor</strong> rocks 😀</p>';
    const contentBlock = htmlToDraft(html);
    const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);

    const editorState = EditorState.createWithContent(contentState);

    const [editorStates, setEditorStates] = useState(editorState);


    let [Textvalue, setTextvalue] = useState()


    function onEditorStateChange(contentState) {
        if (contentBlock) {
            setEditorStates(contentState)
        }
    };
    return (
        <div>
            <Editor
                editorState={editorStates}
                onEditorStateChange={(e) => onEditorStateChange(e)}
            />
            <textarea className='text-editor-textarea'
                enable
                value={draftToHtml(convertToRaw(editorStates.getCurrentContent()))}
                onChange={(e) => {
                    console.log(e.target.value);
                }}
            />
        </div>
    );
}
export default TextEditor;



