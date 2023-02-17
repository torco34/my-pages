import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, userExists } from "../../firebase/firebase";
import {} from "firebase/auth";
import { AuthProvaide } from "../../components/AuthProvaide";
import style from "./loginView.module.css";
export const LoginView = () => {
  const navigate = useNavigate();
  /*
  state
  o: inicializa
  1: login 
  2: login completo
  3:login pero sin registro
  4: no hay loguin
  5: ya existe username
  6: nuevo username click para continuar
  
  */

  // const [currentUser, setCurrentUser] = useState(null);
  const [state, setCurrentsState] = useState(0);
  // useEffect(() => {
  //   setCurrentsState(1);
  //   onAuthStateChanged(auth, async (user) => {
  //     if (user) {
  //       const isRegistered = await userExists(user.uid);
  //       if (isRegistered) {
  //         //TODO redirigir a dashboard

  //         navigates("/deshboar");
  //         setCurrentsState(2);
  //       } else {
  //         navigates("/choose-username");
  //         setCurrentsState(3);
  //       }

  //       console.log(user.displayName);
  //     } else {
  //       setCurrentsState(4);
  //       console.log("no hay");
  //     }
  //   });
  // }, [navigates]);

  async function handleOnClick() {
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider);

    async function signInWithGoogle(googleProvider) {
      try {
        const res = await signInWithPopup(auth, googleProvider);
        // console.log(res);
      } catch (error) {
        console.error(error);
      }
    }
  }
  function handleUserLoggedIn(user) {
    navigate("/dashboard");
  }
  function handleOnUserNotRegiste(user) {
    navigate("/choose-username");
  }
  function handleOnUserNotLoggedIn() {
    setCurrentsState(4);
  }

  // if (state === 2) {
  //   return <div> Estas autenticado y registrado</div>;
  // }
  // if (state === 3) {
  //   return <div> Estas autenticad pero no registrado</div>;
  // }
  if (state === 4) {
    return (
      <div className={style.loginView}>
        <div>
          <h2>Link Tree</h2>
        </div>
        <button className={style.provaider} onClick={handleOnClick}>
          Login with Google
        </button>
      </div>
    );
  }

  // if (state === 5) {
  //   return (
  //     <>
  //       <button onClick={handleOnClick}>Login with Google</button>
  //     </>
  //   );
  // }
  return (
    <AuthProvaide
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotRegiste={handleOnUserNotRegiste}
      onUserNotLoggedIn={handleOnUserNotLoggedIn}
    >
      <div>Londing...</div>
    </AuthProvaide>
  );
};
