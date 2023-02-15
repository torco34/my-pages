import React from "react";
import { useNavigate } from "react-router-dom";
import { AuthProvaide } from "../../components/AuthProvaide";
import { logout } from "../../firebase/firebase";

export const SignOutView = () => {
  const navigate = useNavigate();

  async function handleUserLoggedIn(user) {
    await logout();
  }
  function handleOnUserNotRegiste(user) {
    navigate("/login");
  }
  function handleOnUserNotLoggedIn() {
    navigate("/login");
  }
  return (
    <AuthProvaide
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotLoggedIn={handleOnUserNotLoggedIn}
      onUserNotRegiste={handleOnUserNotRegiste}
    ></AuthProvaide>
  );
};
