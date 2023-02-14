import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  existsUsername,
  getProfilePhotoUrl,
  getUserPublicProfileInfo,
} from "../../firebase/firebase";

export const PublicProfileView = () => {
  const params = useParams();
  const [profile, setProfile] = useState(null);
  const [url, setUrl] = useState("");
  const [state, setState] = useState(0);
  useEffect(() => {
    getProfile();

    async function getProfile() {
      const username = params.username;
      try {
        const userUid = await existsUsername(username);
        if (userUid) {
          const userInfo = await getUserPublicProfileInfo(userUid);
          setProfile(userInfo);
          const url = await getProfilePhotoUrl(
            userInfo.profileInfo.profilePicture
          );
          setUrl(url);
        } else {
          setState(7);
        }
      } catch (error) {}
    }
  }, []);

  if (state === 7) {
    <div>
      <h1>Username doesn't exist</h1>
    </div>;
  }
  return (
    <div>
      <div>
        <img src={url} alt="url" />
      </div>
      <h2>{profile?.profileInfo.username}</h2>

      <div>
        Links
        {profile?.LinksInfo.map((link) => (
          <div>
            <a href={link.url}>{link.title} </a>
          </div>
        ))}
      </div>
    </div>
  );
};
