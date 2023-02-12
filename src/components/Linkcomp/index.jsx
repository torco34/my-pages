import React, { useState } from "react";

export const Linkcomp = ({ docId, title, url, onDelete, onUpdate }) => {
  const [currentTitle, setCurrentTitle] = useState(title);
  const [currentUrl, setCurrentUrl] = useState(url);
  const [editTitle, setEditTitle] = useState(false);
  const [editUrl, setEditUrl] = useState(false);
  function handleEditTitle() {
    setEditTitle(true);
  }
  function handleEditUrl() {
    setEditUrl(true);
  }
  function handleOnChangeTitle(e) {
    setCurrentTitle(e.target.value);
  }
  function handleOnChangeUrl(e) {
    setCurrentUrl(e.target.value);
  }

  return (
    <>
      <div key={docId}>
        <div>
          {editTitle ? (
            <>
              <input value={currentTitle} onChange={handleOnChangeTitle} />
            </>
          ) : (
            <>
              <button onClick={handleEditTitle}>edit</button>
              {title}
            </>
          )}
        </div>

        <div>
          {editUrl ? (
            <>
              <input value={currentUrl} onChange={handleOnChangeUrl} />
            </>
          ) : (
            <>
              <button onClick={handleEditUrl}>edit</button>
              {url}
            </>
          )}
        </div>
        <button className="btn btn-danger m-2">Delete</button>
      </div>
    </>
  );
};
