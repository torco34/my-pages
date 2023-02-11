import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvaide } from "../components/AuthProvaide";
import { existsUsername, updateUser } from "../firebase/firebase";

export const ChooseUserName = () => {
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  function handleUserLoggedIn(user) {
    navigate("/deshboar");
  }
  function handleOnUserNotRegiste(user) {
    navigates("/choose-username");
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
      <div>
        <h1> Bienvenido {currentUser.displayName}</h1>
        <p>Para terminar el proceso elige un nombre del usuario</p>

        <div>
          <p>{state === 5 ? <p>El nombre ya existe</p> : ""}</p>
          <input type="text" onChange={handleUserName} />
        </div>
        <div>
          <button onClick={handleContinue}>Continuar</button>
        </div>
      </div>
    );
  }
  if (state === 6) {
    return (
      <div>
        {" "}
        <h1>felicidades ya puedes ir a la paswor</h1>
        {/* <Link to="/deshboar">Continuar</Link> */}
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
