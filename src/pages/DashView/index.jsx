import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthProvaide } from "../../components/AuthProvaide";
import { DashboardWrapper } from "../../components/DashboardWrapper/index";
import { v4 as uuidv4 } from "uuid";
import { getLinks, insertNewLink } from "../../firebase/firebase";
import { Linkcomp } from "../../components/Linkcomp";

export const DashView = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState([]);
  async function handleUserLoggedIn(user) {
    setCurrentUser(user);
    setState(2);
    const resLinks = await getLinks(user.uid);
    setLinks([...resLinks]);
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
    addLink();
  }

  function addLink() {
    if (title != " " && url != "") {
      const newLink = {
        id: uuidv4(),
        title: title,
        url: url,
        uid: currentUser.uid,
      };
      const res = insertNewLink(newLink);
      newLink.docId = res.id;
      setTitle("");
      setUrl("");
      setLinks([...links, newLink]);
    }
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
  function handleOnDelete() {}
  function handleOnUpdata(docId, title, url) {
    const link = links.find((item) => item.docId === docId);
    link.title = title;
    link.url = url;
  }
  return (
    <DashboardWrapper>
      <div className="container link link ">
        <h1>dash</h1>
        <form action="" onSubmit={handleOnSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" onChange={handleOnChange} />
          <label htmlFor="url">url</label>
          <input type="text" name="url" onChange={handleOnChange} />

          <input type="submit" value="create nuevo link" />
        </form>
      </div>
      <div>
        {links.map((link) => (
          <Linkcomp
            key={link.docId}
            url={link.url}
            title={link.title}
            onDelete={handleOnDelete}
            onUpdata={handleOnUpdata}
          />
        ))}
      </div>
    </DashboardWrapper>
  );
};
