import React from "react";
import { auth, userExists } from "../firebase/firebase";
// import { async } from "@firebase/util";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";

export const LoginView = () => {
  /*
  state
  o: inicializar
  1: login 
  2: login completo
  3:login pero sin registro
  4: no hay loguin
  
  */
  const [currentUser, setCurrentUser] = useState(null);
  const [state, setCurrentsState] = useState(0);
  useEffect(() => {
    setCurrentsState(1);
    onAuthStateChanged(auth, handleUseStateChend);
  }, []);

  async function handleUseStateChend(user) {
    if (user) {
      const isRegistered = await userExists(user.uid);
      if (isRegistered) {
        //TODO redirigir a dashboard
        setCurrentsState(2);
      } else {
        // TODO redirigido a choose user
        setCurrentsState(3);
      }

      console.log(user.displayName);
    } else {
      setCurrentsState(4);
      console.log("no hay");
    }
  }
  async function handleOnClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);

    async function signInWithGoogle(googleProvider) {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
  }

  if (state === 2) {
    return <div> Estas autenticad y registrado</div>;
  }
  if (state === 3) {
    return <div> Estas autenticad pero no registrado</div>;
  }
  if (state === 4) {
    return (
      <>
        hola
        <button onClick={handleOnClick}>Login with Google</button>
      </>
    );
  }

  return <>louding....</>;
};
