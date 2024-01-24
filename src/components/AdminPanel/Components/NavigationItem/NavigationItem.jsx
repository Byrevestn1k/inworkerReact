import { useState } from 'react';
import Modal from '../Modal';
import './navigationitem.css';
import NavigationEditor from '../NavigationEditor/NavigationEditor';
import DeleteQuestion from '../DeleteQuestion';
import { useDispatch, useSelector } from 'react-redux';
import { HIDE_MODAL, SHOW_MODAL } from '../../../../constants/actions';



// export let DataCategoriesContext = createContext()

const NavigationItem = ({ data, collection }) => {
   let { text, isUppercase, isFooter, path, priority, isHeader, id } = data;
   const [showModalDeleteQuestion, setShowModalDeleteQuestion] = useState(true)
   const dispatch = useDispatch();
   let pushForUseEffectUpdate = useSelector(state => state.pushForUseEffectUpdate.pushForUseEffectUpdate);

   function onClickEdit() {
      setShowModalDeleteQuestion(true)
      dispatch({ type: SHOW_MODAL });
   }
   function onClickDeleteHendler() {
      setShowModalDeleteQuestion(false)
      console.log(showModalDeleteQuestion);
      dispatch({ type: SHOW_MODAL });

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
         <Modal  >
            <DeleteQuestion data={data} collection={collection} setShowModal={pushForUseEffectUpdate} />
            {/* {showModalDeleteQuestion ? <NavigationEditor data={data} /> : <DeleteQuestion data={data} collection={collection} setShowModal={pushForUseEffectUpdate} />} */}
         </Modal>
      </div>


   )
}

export default NavigationItem;