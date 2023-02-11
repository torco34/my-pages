import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvaide } from "../../components/AuthProvaide";
import { DashboardWrapper } from "../../components/DashboardWrapper/index";

export const DashView = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});

  function handleUserLoggedIn(user) {
    setCurrentUser(user);
    setState(2);
  }
  function handleOnUserNotRegiste(user) {
    navigate("/login");
  }
  function handleOnUserNotLoggedIn() {
    navigate("/login");
  }
  if (state === 0) {
    return (
      <AuthProvaide
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotLoggedIn={handleOnUserNotLoggedIn}
        onUserNotRegiste={handleOnUserNotRegiste}
      >
        login...
      </AuthProvaide>
    );
  }

  return (
    <DashboardWrapper>
      <div>
        <h1>dash</h1>
      </div>
    </DashboardWrapper>
  );
};
