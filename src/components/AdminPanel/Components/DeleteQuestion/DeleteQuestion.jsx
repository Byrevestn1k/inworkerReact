import { useDispatch } from 'react-redux';
import { deleteDocForID } from '../../helpers';
import './deleteQuestion.css';
import { createPortal } from "react-dom";
import { PUSH_USEEFFECT_UPDATE } from '../../../../constants/actions';

const portalRoot = document.getElementById('portal');

const DeleteQuestion = ({ data, collection, setShowModal }) => {
    let dispatch = useDispatch()

    return (
        <div className='delete-question'>
            <div> Ви впевнені, що хочете видалити "{data.text}"? </div>
            <button onClick={() => {
                setShowModal(false)
            }}>Ні</button>
            <button onClick={() => {

                deleteDocForID(collection, data.id);
                dispatch({ type: PUSH_USEEFFECT_UPDATE })
              setTimeout(() => {
                setShowModal(false);
              }, 1000);  
             
                
            }}>Так</button>
        </div>
    )
}

export default DeleteQuestion;
