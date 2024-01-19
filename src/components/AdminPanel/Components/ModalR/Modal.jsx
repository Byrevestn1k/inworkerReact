import styles from './modal.css';
import {createPortal} from "react-dom";

const portalRoot = document.getElementById('portal');

const Modal = (props) => {
    const { children, showModal, openModalFunc } = props;


    const portalContent = (
        <div className={'common'} onClick={() => {openModalFunc(false)}}>
            <div className={'content'} onClick={(e) => { e.stopPropagation() }}>
                <button onClick={openModalFunc(false)}>exit</button>
                { children }
            </div>
        </div>
    );
    return showModal ? createPortal(portalContent, portalRoot) : null;
}

export default Modal;
