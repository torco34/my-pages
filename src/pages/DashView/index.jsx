import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvaide } from "../../components/AuthProvaide";
import { DashboardWrapper } from "../../components/DashboardWrapper/index";

export const DashView = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

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
  function handleOnSubmit(e) {
    e.preventDefault();
  }
  function handleOnChange(e) {
    const value = e.target.value;
    if (e.target.name === "title") {
      setTitle(value);
    }
    if (e.target.name === "url") {
      setUrl(value);
    }
  }

  return (
    <DashboardWrapper>
      <>
        <h1>dash</h1>
        <form action="" onSubmit={handleOnSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={handleOnChange} />
          <label htmlFor="url">url</label>
          <input type="text" name="url" onChange={handleOnChange} />
        </form>
      </>
    </DashboardWrapper>
  );
};
