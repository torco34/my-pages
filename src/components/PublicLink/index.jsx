import React from "react";

export const PublicLink = ({ url, title }) => {
  return (
    <div>
      <a href={url}>{title} </a>
    </div>
  );
};
