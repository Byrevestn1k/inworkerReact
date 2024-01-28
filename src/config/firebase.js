
import { initializeApp } from "firebase";
import { getFirestore } from "firebase";
import { getStorage } from "firebase";

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


export const db = getFirestore(app);
export const storage = getStorage(app);

export function dblog() {
}
