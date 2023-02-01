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
  apiKey: import.meta.env.VITE_APP_APIKEY,
  authDomain: import.meta.env.VITE_APP_AUTHDOMAIN,
  projectId: import.meta.env.VITE_APP_PROJECTID,
  storageBucket: import.meta.env.VITE_APP_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APP_APPID,
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

export async function existsUsername(username) {
  const users = [];
  const docRef = collection(db, "user");
  const q = query(docsRef, where("username", "==", username));
  const querySnapshot = await getDocs(q);

  QuerySnapshot.forEach((doc) => {
    users, push(doc.data());
  });

  return users.length > 0 ? users[0].uid : null;
}

export async function registerNewUser(users) {
  try {
    const collectionRef = collection(db, "user");
    const docRef = doc(collectionRef, user.id);
    await setDoc(docRef, user);
  } catch (error) {}
}

export async function updateUser(users) {
  try {
    const collectionRef = collection(db, "user");
    const docRef = doc(collectionRef, user.uid);
    await setDoc(docRef, user);
  } catch (error) {}
}
