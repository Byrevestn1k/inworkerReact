import './categories.css';
import NavigationItem from "../NavigationItem/NavigationItem";
import { useEffect, useState } from "react";
import { WIDTH_MONITOR } from "../constants/constants";
import { getAllDocuments_Firebase } from "../../helpers";
import Modal from "../Modal";
import CategoryEditor from "../CategoryEditor/CategoryEditor";
import { useDispatch, useSelector } from "react-redux";
import { UPLOAD_CATEGIRIES } from "../../../../constants/actions";
import { Button } from "@mui/material";
import CategoriesItem from '../CategoriesItem/CategoriesItem';

const Categories = ({ isFooter }) => {
  //адаптивне меню, ховаєм в кнопку нав
  let [isShowPAnel, setIisShowPAnel] = useState(false)
  const [categories, setCategoties] = useState([]);// БД з навігацією
  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch();
  let pushForUseEffectUpdate = useSelector(state => state.pushForUseEffectUpdate).pushForUseEffectUpdate;
  let collection = 'categories';
  useEffect(() => {
    getAllDocuments_Firebase(collection).then((resp) => {
      setCategoties(resp);//отримуєм БД з навігацією
      dispatch({ type: UPLOAD_CATEGIRIES, payload: resp });
    })
  }
    , [pushForUseEffectUpdate]);

  function modalCall() {
    setShowModal(true);
  }

console.log(categories);
  return (
    <> 
    <div id="addnew">
      <Button onClick={modalCall} variant="outlined" size="small">Створити</Button>  
    </div>
      <nav className="navigation">
        {categories.map((element) => {
          return (
            <CategoriesItem data={element} collection={collection} categoriesList={categories}/>
          )
        })
        }
      </nav>
      <Modal showModal={showModal} openModalFunc={setShowModal}>
        <CategoryEditor setShowModal={setShowModal} collection={collection}/>
      </Modal>
    </>
  );
};

export default Categories;
