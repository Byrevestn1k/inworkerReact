import { useEffect, useState } from "react";
import "./dataBase.css";
import { initializeApp } from 'firebase/app';
import { getFirestore, getDocs, collection, setDoc, getDoc, doc, addDoc } from 'firebase/firestore/lite';
import { INITIALISATION_FIREBASE_CONFIG } from "../../constants/constants";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';


const app = initializeApp(INITIALISATION_FIREBASE_CONFIG);
const db = getFirestore(app);



// const docRef = doc(db, "categories", "dUK5vGjbqQeGWo2PdBKw");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }

function DataBase() {
  let [data, setData] = useState()

  useEffect(()=>{

    },[])
  
// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  console.log(cityList);
}

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
    <div>DATABASE
    </div>

  );
}

export default DataBase;
