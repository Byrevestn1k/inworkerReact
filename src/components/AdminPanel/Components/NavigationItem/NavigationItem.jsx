import { useState } from 'react';
import Modal from '../ModalR';
import './navigationitem.css';
import NavigationEditor from '../NavigationEditor/NavigationEditor';


// export let DataCategoriesContext = createContext()

const NavigationItem = ({data, onClick}) => {
  let {text, isUppercase, isFooter, path, priority, isHeader, id} =data;
  const [showModal, setShowModal] = useState(false)
   
  function onClickEdit(){
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
        <button onClick={onClick}>Delete</button> 
        <Modal showModal={showModal} openModalFunc={setShowModal} >
                <NavigationEditor />
         </Modal>
      </div>
      

   )
}

export default NavigationItem;