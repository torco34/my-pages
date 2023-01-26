import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
  connectStorageEmulator,
} from "firebase/storage";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDCAt7YLsyzNhJtZAFD1t8PrsZpvwh81YQ",
  authDomain: "trilink-tuturial.firebaseapp.com",
  projectId: "trilink-tuturial",
  storageBucket: "trilink-tuturial.appspot.com",
  messagingSenderId: "366393441879",
  appId: "1:366393441879:web:f3153394ed5057e958ad12",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
export async function userExists(uid) {
  const docRef = doc(db, "user", uid);
  const res = await getDoc(docRef);
  console.log(res);
  return res.exists();
}
