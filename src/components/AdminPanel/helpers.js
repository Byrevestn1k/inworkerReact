import { useContext, useEffect, useState } from "react";
import "./adminPanel.css";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDoc, doc, addDoc, getDocs, deleteDoc, setDoc, query, where } from 'firebase/firestore';
import { getMetadata, getStorage } from "firebase/storage";
import { getDatabase, ref, onValue } from "firebase/database";

// import { getDatabase } from "firebase/database";
import { INITIALISATION_FIREBASE_CONFIG } from "../../constants/constants";

const app = initializeApp(INITIALISATION_FIREBASE_CONFIG);
const db = getFirestore(app);

export async function getDocumentFromDB_Firebase(dataBaseCollection, document) {// отримати елемент з колекції БД
  const docRef = doc(db, dataBaseCollection, document);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
  return docSnap.data()
}

export async function addDocumentToDB_Firebase(dataBaseCollection, object) {// створити документ в колекції елемент з колекції БД
  try {
    const docRef = await addDoc(collection(db, dataBaseCollection), object);// addDoc/setDoc
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getAllDocuments_Firebase(dataBaseCollection) {// отримати всю колекцію з бази даних та формую свю БД з id
  const collectionRef = collection(db, dataBaseCollection);
  const querySnapshot = await getDocs(collectionRef);
  let data = [];
  querySnapshot.forEach((doc) => {
    let document = { ...doc.data(), id: doc.id }
    data.push(document)
  });
  return data;
}

export async function getAllNamesOfCollections(dataBaseCollection) {// отримати всю колекцію з бази даних
  const collectionRef = collection(db, 'cities');
  const querySnapshot = await getDocs(collectionRef);
}

export async function deleteDocForID(collection, docId) {// видалити сутність за назвою колекції та id
  await deleteDoc(doc(db, collection, docId))
  console.log(`collection doc DELETED`);
}

export async function setDocForID(collection, docId, object) {// оновити сутність за назвою колекції та id
  await setDoc(doc(db, collection, docId), object)
}

export async function getDocumentFromDB_Firebase_for_path(collectionName, path) {// отримати елемент з колекції БД за ключем
  const q = query(collection(db, collectionName), where("path", "==", path));
  const querySnapshot = await getDocs(q);
  let data;
  querySnapshot.forEach((doc) => {
    let document = { ...doc.data(), id: doc.id }
    data = document;
  });
  return data;
}

export async function getMetaDataOfFile(data) {// отримати мета дані файлу
const storage = getStorage();
const forestRef = ref(storage, data);
// Get metadata properties
return await getMetadata(forestRef)

 ;
}