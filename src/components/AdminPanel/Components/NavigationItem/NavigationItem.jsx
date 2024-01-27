import { useState } from 'react';
import Modal from '../Modal';
import './navigationitem.css';
import NavigationEditor from '../NavigationEditor/NavigationEditor';
import DeleteQuestion from '../DeleteQuestion';
import { useDispatch, useSelector } from 'react-redux';
import { HIDE_MODAL, SHOW_MODAL } from '../../../../constants/actions';



// export let DataCategoriesContext = createContext()

const NavigationItem = ({ data, collection }) => {
   let { text, isUppercasetext, isFooter, path, priority, isHeader, id } = data;
   const [showModalDeleteQuestion, setShowModalDeleteQuestion] = useState(true)
   const [showModal, setShowModal] = useState(false)
   function onClickEdit() {
      setShowModalDeleteQuestion(true)
      setShowModal(true);

   }
   function onClickDeleteHendler() {
      setShowModalDeleteQuestion(false)
      setShowModal(true);
   }

   return (
      <div className='nav-item-admin'>
         <div><h5>{text}</h5></div>
         <div><span>ID</span>: {id}</div>
         <div><span>PATH</span>: {path}</div>
         <div><span>PRIORITY</span>: {priority}</div>
         <div><span>ISUPPERCASE</span>: {`${isUppercasetext}`}</div>
         <div><span>ISFOOTER</span>: {`${isFooter}`}</div>
         <div><span>ISHEADER</span>: {`${isHeader}`}</div>
         <button onClick={onClickEdit}>Edit</button>
         <button onClick={onClickDeleteHendler}>Delete</button>
         <Modal showModal={showModal} openModalFunc={setShowModal}>
            {showModalDeleteQuestion ? <NavigationEditor showModalDeleteQuestion={showModalDeleteQuestion} setShowModalDeleteQuestion={setShowModalDeleteQuestion} setShowModal={setShowModal} data={data} collection={collection} /> : <DeleteQuestion data={data} collection={collection} setShowModal={setShowModal} />}
         </Modal>
      </div>


   )
}

export default NavigationItem;