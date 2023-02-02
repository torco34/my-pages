import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthProvaide } from "../components/AuthProvaide";
import { existsUsername, updateUser } from "../firebase/firebase";

export const ChooseUserName = () => {
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [userName, setUserName] = useState("");
  const navigates = useNavigate();
  function handleUserLoggedIn(user) {
    navigates("/deshboar");
  }
  function handleOnUserNotRegiste(user) {
    // navigates("/choose-username");
    setCurrentUser(user);
    setState(3);
  }
  function handleOnUserNotLoggedIn() {
    navigates("/login");
  }
  function handleUserName(e) {
    setUserName(e.target.value);
  }
  async function handleContinue() {
    if (userName != "") {
      const exists = await existsUsername(username);
      if (exists) {
        setState(5);
      } else {
        const tmp = { ...currentUser };
        tmp.username = username;
        tmp.processCompleted = true;
        await updateUser(tmp);
      }
    }
  }

  if (state === 3 || state === 4) {
    return (
      <div>
        {currentUser.displayName}
        <p>Para terminar el proceso elige un nombre del usuario</p>
        <p> Bienvenido {state === 5 ? <p>El nombre ya existe</p> : ""}</p>
        <div>
          <input type="text" onInput={handleUserName} />
        </div>
        <div>
          <button onClick={handleContinue}>Continuar</button>
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
