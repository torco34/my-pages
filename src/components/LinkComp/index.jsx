import React, { useRef, useState, useEffect } from "react";

import {
  Link,
  LinkInfo,
  LinkTitle,
  BtnEdit,
  BtnDelete,
  LinkAction,
} from "./styles";

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
    <Link>
      <LinkInfo>
        <LinkTitle>
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
            <BtnEdit>
              <button onClick={handleEditTitle}>
                <BsPencil />
              </button>
              {currentTitle}
            </BtnEdit>
          )}
        </LinkTitle>

        <div>
          {editUrl ? (
            <input
              ref={urlRef}
              value={currentUrl}
              onChange={handleOnChangeUrl}
              onBlur={handleOnBlurUrl}
            />
          ) : (
            <BtnEdit>
              <button onClick={handleEditUrl}>
                <BsPencil />
              </button>
              {currentUrl}
            </BtnEdit>
          )}
        </div>

        <LinkAction>
          <button onClick={handleOnClick}>
            <BsFillTrashFill size={20} />
          </button>
        </LinkAction>
      </LinkInfo>
    </Link>
  );
};
