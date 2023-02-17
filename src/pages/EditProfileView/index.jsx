import React from "react";
import { DashboardWrapper } from "../../components/DashboardWrapper";
import { AuthProvaide } from "../../components/AuthProvaide";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { async } from "@firebase/util";
import {
  setUserProfilePhoto,
  updateUser,
  getProfilePhotoUrl,
} from "../../firebase/firebase";
import style from "./editProfile.module.css";
export const EditProfileView = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [profileUrl, setPofileUrl] = useState(null);
  const fileRef = useRef(null);
  async function handleUserLoggedIn(user) {
    setCurrentUser(user);
    const url = await getProfilePhotoUrl(user.profilePicture);
    setPofileUrl(url);
    setState(2);
  }
  function handleOnUserNotRegiste(user) {
    navigate("/login");
  }
  function handleOnUserNotLoggedIn() {
    navigate("/login");
  }
  function handleOpenFilePiker() {
    if (fileRef.current) {
      fileRef.current.click();
    }
  }
  async function handleOnChengeFile(e) {
    const files = e.target.files;
    const fileReader = new FileReader();
    if (fileReader && files && files.length > 0) {
      fileReader.readAsArrayBuffer(files[0]);
      fileReader.onload = async function () {
        const imageData = fileReader.result;
        const res = await setUserProfilePhoto(currentUser.uid, imageData);
        // console.log(res);
        if (res) {
          const tmpUser = { ...currentUser };
          tmpUser.profilePicture = res.metadata.fullPath;
          await updateUser(tmpUser);
          setCurrentUser({ ...tmpUser });
          const url = await getProfilePhotoUrl(currentUser.profilePicture);
          setPofileUrl(url);
        }
      };
    }
  }

  if (state != 2) {
    return (
      <AuthProvaide
        onUserLoggedIn={handleUserLoggedIn}
        onUserNotLoggedIn={handleOnUserNotLoggedIn}
        onUserNotRegiste={handleOnUserNotRegiste}
      ></AuthProvaide>
    );
  }
  return (
    <>
      <h2>Edit Profile info</h2>

      <div className={style.profilePintureContainer}>
        <div>
          <img src={profileUrl} alt="imgen" width={150} />
        </div>

        <div>
          <button className="btn" onClick={handleOpenFilePiker}>
            Choose new profilr
          </button>
          <input
            className={style.fileInput}
            ref={fileRef}
            type="file"
            onChange={handleOnChengeFile}
          />
        </div>
      </div>
    </>
  );
};
