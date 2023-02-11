import React from "react";

export const Home = () => {
  return (
    <div>
      {import.meta.env.VITE_APP_APIKEY}
      <br />
      {import.meta.env.VITE_APP_AUTHDOMAIN}
      <br />
      {import.meta.env.VITE_APP_PROJECTID}
      <br />
      {import.meta.env.VITE_APP_STORAGEBUCKET}
      <br />
      {import.meta.env.VITE_APP_MASSAGINGSENDERID}
      <br />

      <br></br>
      {import.meta.env.VITE_APP_APPID}
    </div>
  );
};
