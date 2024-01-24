import { deleteDocForID } from '../../helpers';
import './deleteQuestion.css';
import { createPortal } from "react-dom";

const portalRoot = document.getElementById('portal');

const DeleteQuestion = ({ data, collection, setShowModal }) => {

    return (
        <div className='delete-question'>
            <div> Ви впевнені, що хочете видалити? {data.text}</div>
            <button onClick={() => {
                setShowModal(false)
            }}>Ні</button>
            <button onClick={() => {
                deleteDocForID(collection, data.id)
                setShowModal(false)
            }}>Так</button>
        </div>
    )
}

export default DeleteQuestion;
