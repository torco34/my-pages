import React from "react";

export const Linkcomp = ({ docId, title, url, onDelete, onUpdate }) => {
  return (
    <>
      <div key={docId}>
        <div>
          <button>edit</button>
          {title}
        </div>
        <div>
          <button>edit</button>
          {url}
        </div>
      </div>
    </>
  );
};
