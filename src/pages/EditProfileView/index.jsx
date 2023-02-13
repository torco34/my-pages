import React from "react";
import { DashboardWrapper } from "../../components/DashboardWrapper";
import { AuthProvaide } from "../../components/AuthProvaide";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const EditProfileView = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [profileUrl, setPofileUrl] = useState(null);
  async function handleUserLoggedIn(user) {
    setCurrentUser(user);
    setState(2);
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
    >
      <DashboardWrapper>
        <div>Edit Profile info</div>
        <div>
          <div>
            <img src={profileUrl} alt="imgen" width={100} />
          </div>
          <div>
            <button>Choose new profilr</button>
            <input type="file" />
          </div>
        </div>
      </DashboardWrapper>
    </AuthProvaide>
  );
};
