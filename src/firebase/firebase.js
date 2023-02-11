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
  getDocs,
  QuerySnapshot,
} from "firebase/firestore";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APP_APIKEY,
  // authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_APP_PROJECTID,
  // storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_APP_MASSAGINGSENDERID,
  // appId: import.meta.env.VITE_APP_APPID,

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
  const docRef = doc(db, "users", uid);
  const res = await getDoc(docRef);
  console.log(res);
  return res.exists();
}

export async function existsUsername(username) {
  const users = [];
  const docsRef = collection(db, "users");
  const q = query(docsRef, where("username", "==", username));
  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((doc) => {
    users.push(doc.data());
  });

  return users.length > 0 ? users[0].uid : null;
}

export async function registerNewUser(user) {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, user.uid);
    await setDoc(docRef, user);
  } catch (error) {}
}

export async function updateUser(user) {
  try {
    const collectionRef = collection(db, "users");
    const docRef = doc(collectionRef, user.uid);
    await setDoc(docRef, user);
  } catch (error) {}
}
export async function getUserInfo(uid) {
  try {
    const docRef = doc(db, "users", uid);
    const document = await getDoc(docRef);
    return document.data();
  } catch (error) {}
}
