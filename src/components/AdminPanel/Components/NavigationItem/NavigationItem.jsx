import { useState } from 'react';
import Modal from '../ModalR';
import './navigationitem.css';
import NavigationEditor from '../NavigationEditor/NavigationEditor';
import { deleteDocForID } from '../../helpers';


// export let DataCategoriesContext = createContext()

const NavigationItem = ({ data, collection }) => {
   let { text, isUppercase, isFooter, path, priority, isHeader, id } = data;
   const [showModal, setShowModal] = useState(false)

   function onClickEdit() {
      setShowModal(true)
   }
   function onClickDeleteHendler() {
      deleteDocForID(collection, id)
      console.log(`DELETE`);
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
            <NavigationEditor />
         </Modal>
      </div>


   )
}

export default NavigationItem;