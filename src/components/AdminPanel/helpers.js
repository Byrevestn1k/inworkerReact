import { useContext, useEffect, useState } from "react";
import "./adminPanel.css";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDoc, doc, addDoc, getDocs, deleteDoc, setDoc, query, where } from 'firebase/firestore';
import { getMetadata, getStorage } from "firebase/storage";
import { getDatabase, ref, onValue } from "firebase/database";
import { INITIALISATION_FIREBASE_CONFIG } from "../../constants/constants";
var firebase = require('firebase');
var firebaseui = require('firebaseui');
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
return await getMetadata(forestRef);
}


// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

ui.start('#firebaseui-auth-container', {
  signInOptions: [
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      signInMethod: firebase.auth.EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD
    }
  ],
  // Other config options...
});

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '<url-to-redirect-to-on-success>',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};

ui.start('#firebaseui-auth-container', uiConfig);