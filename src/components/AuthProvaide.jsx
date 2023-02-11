import React from "react";
import { useNavigate } from "react-router-dom";

import {
  auth,
  getUserInfo,
  registerNewUser,
  userExists,
} from "../firebase/firebase";
// import { async } from "@firebase/util";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { useEffect, useState } from "react";

import { async } from "@firebase/util";
export const AuthProvaide = ({
  children,
  onUserLoggedIn,
  onUserNotLoggedIn,
  onUserNotRegiste,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const isRegistered = await userExists(user.uid);

        if (isRegistered) {
          const userInfo = await getUserInfo(user.uid);

          if (userInfo.processCompleted) {
            onUserLoggedIn(userInfo);
          } else {
            onUserNotRegiste(userInfo);
          }
        } else {
          await registerNewUser({
            uid: user.uid,
            displayName: user.displayName,
            profilePicture: "",
            username: "",
            processCompleted: false,
          });
          onUserNotRegiste(user);
        }

        console.log(user.displayName);
      } else {
        onUserNotLoggedIn();
      }
    });
  }, [navigate, onUserLoggedIn, onUserNotRegiste, onUserNotLoggedIn]);
  return <>{children}</>;
};
