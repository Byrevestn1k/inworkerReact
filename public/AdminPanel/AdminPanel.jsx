import { useEffect, useState } from "react";
import "./adminPanel.css";
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { collection, addDoc, getDocs } from "firebase/firestore";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';




// // Get a list of cities from your database
// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   console.log(cityList);
// }

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });n
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }




function AdminPanel() {

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
    // try {
    //   const docRef =  addDoc(collection(db, "users"), {
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }


  })


  return (
    <div>ADMIN</div>

  );
}

export default AdminPanel;
