import './modal.css';
import { createPortal } from "react-dom";

const portalRoot = document.getElementById('portal');

const Modal = (props) => {
    const { children, showModal, openModalFunc } = props;


    const portalContent = (
        <div className={'common'} onClick={() => { openModalFunc(false) }}>
            <div className={'content'} onClick={(e) => { e.stopPropagation() }}>
                {children}
                <button onClick={() => { openModalFunc(false) }}>exit</button>
            </div>
        </div>
    );
    return showModal ? createPortal(portalContent, portalRoot) : null;
}

export default Modal;
