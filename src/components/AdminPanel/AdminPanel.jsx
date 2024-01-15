import { useContext, useEffect, useState } from "react";
import "./adminPanel.css";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { collection, addDoc, getDocs } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { DataContext } from "../../App";

function AdminPanel() {
  let { setAdminflag } = useContext(DataContext)
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
  function setAdminflagHandler() {
    setAdminflag(false)
  }

  return (
    <div>ADMIN

      <button onClick={setAdminflagHandler}>Close</button>
    </div>

  );
}

export default AdminPanel;
