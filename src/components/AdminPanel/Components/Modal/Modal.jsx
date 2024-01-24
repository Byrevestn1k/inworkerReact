import { useDispatch, useSelector } from 'react-redux';
import './modal.css';
import { createPortal } from "react-dom";
import { HIDE_MODAL } from '../../../../constants/actions';

const portalRoot = document.getElementById('portal');

const Modal = ({ children }) => {

    const showModal = useSelector(state => state.showModal.showModal);
    let dispath = useDispatch()
    const portalContent = (
        <div className={'common'} onClick={() => { dispath({ type: HIDE_MODAL }); }}>
            <div className={'content'} onClick={(e) => { e.stopPropagation() }}>
                <button className='close' onClick={() => { dispath({ type: HIDE_MODAL }) }}>X</button>
                {children}
            </div>
        </div>
    );
    return showModal ? createPortal(portalContent, portalRoot) : null;
}

export default Modal;
