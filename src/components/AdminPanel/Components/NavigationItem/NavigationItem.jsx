import { useState } from 'react';
import Modal from '../Modal';
import './navigationitem.css';
import NavigationEditor from '../NavigationEditor/NavigationEditor';
import { deleteDocForID } from '../../helpers';
import DeleteQuestion from '../DeleteQuestion';


// export let DataCategoriesContext = createContext()

const NavigationItem = ({ data, collection }) => {
   let { text, isUppercase, isFooter, path, priority, isHeader, id } = data;
   const [showModal, setShowModal] = useState(false)
   const [showModalDeleteQuestion, setShowModalDeleteQuestion] = useState(true)


   function onClickEdit() {
      setShowModalDeleteQuestion(true)
      setShowModal(true)
   }
   function onClickDeleteHendler() {
      setShowModalDeleteQuestion(false)
      setShowModal(true)
   }

   return (
      <div className='nav-item-admin'>
         <h6>Кнопка навігації</h6>
         <div><h5>{text}</h5></div>
         <div><span>ID</span>: {id}</div>
         <div><span>PATH</span>: {path}</div>
         <div><span>PRIORITY</span>: {priority}</div>
         <div><span>ISUPPERCASE</span>: {`${isUppercase}`}</div>
         <div><span>ISFOOTER</span>: {`${isFooter}`}</div>
         <div><span>ISHEADER</span>: {`${isHeader}`}</div>
         <button onClick={onClickEdit}>Edit</button>
         <button onClick={onClickDeleteHendler}>Delete</button>
         <Modal showModal={showModal} openModalFunc={setShowModal} >
            {showModalDeleteQuestion ? <NavigationEditor data={data} /> : <DeleteQuestion data={data} collection={collection} setShowModal={setShowModal} />}
         </Modal>
      </div>


   )
}

export default NavigationItem;