import React, { useRef, useState, useEffect } from "react";
import style from "./llnkCompon.module.css";
import { BsFillTrashFill, BsPencil } from "react-icons/bs";
export const LinkComp = ({ docId, title, url, onDelete, onUpdate }) => {
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
  function handleOnClick(e) {
    onDelete(docId);
  }
  return (
    <div className={style.link}>
      <div className={style.linkInfo}>
        <div className={style.linkTitle}>
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
            <div>
              <button className={style.btnEdit} onClick={handleEditTitle}>
                <BsPencil />
              </button>
              {currentTitle}
            </div>
          )}

          {editUrl ? (
            <input
              ref={urlRef}
              value={currentUrl}
              onChange={handleOnChangeUrl}
              onBlur={handleOnBlurUrl}
            />
          ) : (
            <div>
              <button className={style.btnEdit} onClick={handleEditUrl}>
                <BsPencil />
              </button>
              {currentUrl}
            </div>
          )}
        </div>

        <div className={style.linkAction}>
          <button className={style.btnDelete} onClick={handleOnClick}>
            <BsFillTrashFill size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
