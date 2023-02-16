import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvaide } from "../../components/AuthProvaide";
// import { ChooUserFather } from "./styles";
import { Button, Input, FatherUneversal, To } from "../../GlobalStyles";
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
      <FatherUneversal>
        <h1> Bienvenido {currentUser.displayName}</h1>
        <p>Para terminar el proceso elige un nombre del usuario</p>

        <div>
          <p>{state === 5 ? <p>El nombre ya existe</p> : ""}</p>
          <Input type="text" onChange={handleUserName} />
        </div>
        <div>
          <Button onClick={handleContinue}>Continuar</Button>
        </div>
      </FatherUneversal>
    );
  }
  if (state === 6) {
    return (
      <FatherUneversal>
        <h1>felicidades ya puedes ir a la paswor</h1>
        <To>
          <Link to="/dashboard">Continuar</Link>
        </To>
      </FatherUneversal>
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
