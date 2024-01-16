import { useContext, useEffect, useState } from "react";
import "./adminPanel.css";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { collection, addDoc, getDocs } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore/lite';
import { DataContext } from "../../App";
import inworker_shapka_mini from '../../images/header/inworker_shapka_mini.png';
import { getDatabase } from "firebase/database";


function AdminPanel() {
  // function getAllDocuments() {
  //   const collectionRef = collection(db, 'cities');
  //   const querySnapshot = getDocs(collectionRef);
  //   console.log(querySnapshot);
  //   // querySnapshot.forEach((doc) => { console.log(doc.id, '=>', doc.data()); });
  // }
  // async function getDocument(documentId) {
  //   const documentRef = getDoc(db, 'cities', documentId);
  //   const documentSnapshot = await getDoc(documentRef);
  //   if (documentSnapshot.exists()) {
  //     console.log('Document data:', documentSnapshot.data());
  //   }
  //   else { console.log('No such document'); }
  // }
  // function getCities(db) {
  //   const citiesCol = collection(db, 'cities');
  //   const citySnapshot = getDoc(citiesCol);
  //   const cityList = citySnapshot.docs.map(doc => doc.data());
  //   return cityList;
  // }

  // function getAllDocuments() {
  //   const collectionRef = collection(db, 'collection_name');
  //   const querySnapshot = getDocs(collectionRef);
  //   querySnapshot.forEach((doc) => { console.log(doc.id, '=>', doc.data()); });
  // }
 
  let { setAdminflag } = useContext(DataContext)
  let logoWidth = 50;

  const firebaseConfig = {
    apiKey: "AIzaSyCwTaUs78OePapYbHiStDkrcndp9F7N8rg",
    authDomain: "inworker-9e2b3.firebaseapp.com",
    databaseURL: "https://inworker-9e2b3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "inworker-9e2b3",
    storageBucket: "inworker-9e2b3.appspot.com",
    messagingSenderId: "964740146101",
    appId: "1:964740146101:web:2e4a1333bf7736920eeffc",
    measurementId: "G-J5H0JLTDD9"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  useEffect(() => {
    
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
