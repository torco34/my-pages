import React, { useRef, useState, useEffect } from "react";

export const Linkcomp = ({ docId, title, url, onDelete, onUpdate }) => {
  const [currentTitle, setCurrentTitle] = useState(title);
  const [currentUrl, setCurrentUrl] = useState(url);
  const [editTitle, setEditTitle] = useState(false);
  const [editUrl, setEditUrl] = useState(false);
  const titleRef = useRef(null);
  const urlRef = useRef(null);
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }, [editTitle]);

  useEffect(() => {
    if (urlRef.current) {
      urlRef.current.focus();
    }
  }, [editUrl]);

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
  function handleOnBlurTitle(e) {
    setEditTitle(false);
    onUpdate(docId, currentTitle, currentUrl);
  }
  function handleOnBlurUrl(e) {
    setEditUrl(false);
    onUpdate(docId, currentTitle, currentUrl);
  }
  return (
    <>
      <div className="link link-warning" key={docId}>
        <div>
          {editTitle ? (
            <>
              <input
                ref={titleRef}
                value={currentTitle}
                onChange={handleOnChangeTitle}
                onBlur={handleOnBlurTitle}
              />
            </>
          ) : (
            <>
              <button className="btn btn-dark m-2 " onClick={handleEditTitle}>
                Edit
              </button>
              {currentTitle}
            </>
          )}
        </div>

        <div className="link link-info">
          {editUrl ? (
            <>
              <input
                ref={urlRef}
                value={currentUrl}
                onChange={handleOnChangeUrl}
                onBlur={handleOnBlurUrl}
              />
            </>
          ) : (
            <>
              <button className="btn btn-dark m-2 " onClick={handleEditUrl}>
                Edit
              </button>
              {currentUrl}
            </>
          )}
        </div>
        <button className="btn btn-danger m-2">Delete</button>
      </div>
    </>
  );
};
