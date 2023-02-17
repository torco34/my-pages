import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvaide } from "../../components/AuthProvaide";

import style from "./chooseUser.module.css";
import { existsUsername, updateUser } from "../../firebase/firebase";
export const ChooseUserName = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [username, setUsername] = useState("");
  function handleUserLoggedIn(user) {
    navigate("/dashboard");
  }
  function handleOnUserNotRegiste(user) {
    setCurrentUser(user);
    setState(3);
  }
  function handleOnUserNotLoggedIn() {
    navigate("/login");
  }
  function handleUserName(e) {
    setUsername(e.target.value);
  }

  async function handleContinue(exists) {
    if (username != "") {
      const exists = await existsUsername(username);
      if (exists) {
        setState(5);
      } else {
        console.log(exists, "existe");
        const tmp = { ...currentUser };
        tmp.username = username;
        tmp.processCompleted = true;
        console.log(tmp, "hol");
        await updateUser(tmp);
        setState(6);
      }
    }
  }

  if (state === 3 || state === 5) {
    return (
      <div className={style.ChooUser}>
        <h1> Bienvenido {currentUser.displayName}</h1>
        <p>Para terminar el proceso elige un nombre del usuario</p>

        <div>
          <p>{state === 5 ? <p>El nombre ya existe</p> : ""}</p>
          <input className="input" type="text" onChange={handleUserName} />
        </div>
        <div>
          <button className="btns" onClick={handleContinue}>
            Continuar
          </button>
        </div>
      </div>
    );
  }
  if (state === 6) {
    return (
      <div className={style.ChooUser}>
        <h1>felicidades ya puedes ir a la paswor</h1>
        <div className="">
          <Link to="/dashboard">Continuar</Link>
        </div>
      </div>
    );
  }
  return (
    <AuthProvaide
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotRegiste={handleOnUserNotRegiste}
      onUserNotLoggedIn={handleOnUserNotLoggedIn}
    ></AuthProvaide>
  );
};
