import './modal.css';
import { createPortal } from "react-dom";

const portalRoot = document.getElementById('portal');

const Modal = (props) => {
    const { children, showModal, openModalFunc } = props;


    const portalContent = (
        <div className={'common'} onClick={() => { openModalFunc(false) }}>
            <div className={'modal'} onClick={(e) => { e.stopPropagation() }}>
                <button className='close' onClick={() => { openModalFunc(false) }}>X</button>
                {children}

            </div>
        </div>
    );
    return showModal ? createPortal(portalContent, portalRoot) : null;
}

export default Modal;
