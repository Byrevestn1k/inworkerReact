import { useContext, useEffect, useState } from "react";
import "./adminPanel.css";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { collection, addDoc, getDocs } from "firebase/firestore";
// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, getDocs, getDoc, doc } from 'firebase/firestore/lite';
import { DataContext } from "../../App";
import inworker_shapka_mini from '../../images/header/inworker_shapka_mini.png';
import { getDatabase } from "firebase/database";
import MenuPanel from "../MenuPanel/MenuPanel";
import { getAllDocuments_Firebase, getAllNamesOfCollections } from "./helpers";
import PageWrapper from "../PageWrapper/PageWrapper";
// import { addDocumentToDB_Firebase, getDocumentFromDB_Firebase } from "./helpers";


function AdminPanel() {
  let [categoriesList, setCategriesList] = useState([])
  let collection = `admin-menu-panel`;
  let { setAdminflag } = useContext(DataContext)
  let logoWidth = 50;
useEffect(()=>{
    getAllDocuments_Firebase(collection).then((resp=>{
        setCategriesList(resp)
    }));
    getAllNamesOfCollections().then((resp)=>{
      console.log(resp);
    })
},[])



  useEffect(() => {
    //getDocumentFromDB_Firebase(dataBaseCollection, document){// отримати елемент з колекції БД
   //addDocumentToDB_Firebase(dataBaseCollection, object)// створити документ в колекції елемент з колекції БД
  })
  function setAdminflagHandler() {//перемикає адмінпанель
    setAdminflag(false)
  }

  return (
    <PageWrapper>
    <div className="admin-panel">
      <div className="admin-header">

        <div className="admin-header-name">
          <div >
            <img src={inworker_shapka_mini} width={logoWidth} alt="" />
          </div>
          Adminpanel of <span>{document.domain}</span> site</div>
        <button onClick={setAdminflagHandler}>Close</button>

      </div>
      <div className="admin-panel_main">
          <div className="admin-panel_menu">
            <MenuPanel dataBD={categoriesList}/>
          </div>
          <div className="admin-panel_main_main"></div>

      </div>
    </div>
    </PageWrapper>  
  );
}

export default AdminPanel;
