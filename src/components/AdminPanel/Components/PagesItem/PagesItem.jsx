import { useState } from 'react';
import Modal from '../Modal';
import './pagesItem.css';
import NavigationEditor from '../NavigationEditor/NavigationEditor';
import DeleteQuestion from '../DeleteQuestion';
import { useDispatch, useSelector } from 'react-redux';
import { HIDE_MODAL, SHOW_MODAL } from '../../../../constants/actions';
import TextEditor from '../TextEditor';



// export let DataCategoriesContext = createContext()

const PagesItem = ({ data, collection }) => {
   let { text, title, description, path, priority, keywords, id, dateCreate, dateUpdate, picture } = data;
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
         <div><h5>{title}</h5></div>
         <div><span>description</span>: {description}</div>
         <div><span>keywords</span>: {keywords}</div>
         <div><span>PATH</span>: {path}</div>
         <div><span>ID</span>: {id}</div>
         <div><span>PRIORITY</span>: {priority}</div>
         <div><span>dateCreate</span>: {dateCreate}</div>
         <div><span>dateUpdate</span>: {dateUpdate}</div>

         <button onClick={onClickEdit}>Edit</button>
         <button onClick={onClickDeleteHendler}>Delete</button>
         <Modal showModal={showModal} openModalFunc={setShowModal}>
            {showModalDeleteQuestion ?
               <TextEditor showModalDeleteQuestion={showModalDeleteQuestion} setShowModalDeleteQuestion={setShowModalDeleteQuestion} setShowModal={setShowModal} data={data} collection={collection} /> :

               <DeleteQuestion data={data} collection={collection} setShowModal={setShowModal} />}
         </Modal>
      </div>


   )
}

export default PagesItem;