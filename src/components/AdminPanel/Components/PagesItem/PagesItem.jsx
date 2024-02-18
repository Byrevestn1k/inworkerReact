import { useState } from 'react';
import Modal from '../Modal';
import './pagesItem.css';
import NavigationEditor from '../NavigationEditor/NavigationEditor';
import DeleteQuestion from '../DeleteQuestion';
import { useDispatch, useSelector } from 'react-redux';
import { HIDE_MODAL, PUSH_USEEFFECT_UPDATE, SHOW_MODAL, TRANSMIT_EDIT_PAGE_DATA, TRANSMIT_EDIT_PAGE_NAME, UPLOAD_NAVIGATION } from '../../../../constants/actions';
import TextEditor from '../TextEditor';
import { useNavigate } from 'react-router';



// export let DataCategoriesContext = createContext()

const PagesItem = ({ data, collection, setIsShowEditor }) => {
   let navigator = useNavigate()
   let { text, title, description, path, priority, keywords, id, dateOfCreate, dateOfUpdate, picture } = data;
   const [showModalDeleteQuestion, setShowModalDeleteQuestion] = useState(true)
   const [showModal, setShowModal] = useState(false)
   const dispatch = useDispatch(false);

   function onClickEdit() {
      dispatch({ type: TRANSMIT_EDIT_PAGE_DATA, payload: data });
      dispatch({ type: TRANSMIT_EDIT_PAGE_NAME, payload: collection });
      navigator(`/admin/pages/editor`)

   }
   function onClickDeleteHendler() {
      setShowModalDeleteQuestion(false)
      setShowModal(true);
   }

   return (
      <div className='nav-item-admin'>
         <div><h5>{title}</h5></div>
         <div className='description'><span>description</span>: {description}</div>
         <div><span>keywords</span>: {keywords}</div>
         <div><span>PATH</span>: {path}</div>
         <div><span>ID</span>: {id}</div>
         <div><span>PRIORITY</span>: {priority}</div>
         <div><span>dateCreate</span>: {`${dateOfCreate}`}</div>
         <div><span>dateUpdate</span>: {dateOfUpdate}</div>

         <button onClick={onClickEdit}>Edit</button>
         <button onClick={onClickDeleteHendler}>Delete</button>

         <Modal showModal={showModal} openModalFunc={setShowModal}>
            <DeleteQuestion data={data} collection={collection} setShowModal={setShowModal} />
         </Modal>
      </div>


   )
}

export default PagesItem;