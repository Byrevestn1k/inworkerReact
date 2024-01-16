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
// import { addDocumentToDB_Firebase, getDocumentFromDB_Firebase } from "./helpers";


function AdminPanel() {
  
  let { setAdminflag } = useContext(DataContext)
  let logoWidth = 50;

  useEffect(() => {
    //getDocumentFromDB_Firebase(dataBaseCollection, document){// отримати елемент з колекції БД
   //addDocumentToDB_Firebase(dataBaseCollection, object)// створити документ в колекції елемент з колекції БД
  })
  function setAdminflagHandler() {//перемикає адмінпанель
    setAdminflag(false)
  }

  return (
    <div className="admin-panel">
      <div className="admin-header">

        <div className="admin-header-name">
          <div >
            <img src={inworker_shapka_mini} width={logoWidth} alt="" />
          </div>
          Adminpanel of <span>{document.domain}</span> site</div>
        <button onClick={setAdminflagHandler}>Close</button>

      </div>

    </div>

  );
}

export default AdminPanel;
