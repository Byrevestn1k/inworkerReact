
import { GoogleAuthProvider } from '@firebase/auth';
import { initializeApp } from 'firebase/app';

export const INITIALISATION_FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSEGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET2

};  //ініціалізаційні дані в firebase

export const NAVIGATION_HEADER = 'navigation';

export const app = initializeApp(INITIALISATION_FIREBASE_CONFIG);
export const googleAuthProvider = new GoogleAuthProvider();
