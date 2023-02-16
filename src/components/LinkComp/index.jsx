import React, { useRef, useState, useEffect } from "react";

import {
  LinkTitle,
  LinkInfo,
  ContenedorLink,
  BtnEdit,
  LinkAction,
  Input,
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
    <>
      <LinkInfo>
        <LinkTitle>
          {editTitle ? (
            <>
              <Input
                ref={titleRef}
                value={currentTitle}
                onChange={handleOnChangeTitle}
                onBlur={handleOnBlurTitle}
              />
            </>
          ) : (
            <BtnEdit>
              <button className="btn " onClick={handleEditTitle}>
                <BsPencil />
              </button>
              {currentTitle}
            </BtnEdit>
          )}
        </LinkTitle>

        <div>
          {editUrl ? (
            <>
              <Input
                ref={urlRef}
                value={currentUrl}
                onChange={handleOnChangeUrl}
                onBlur={handleOnBlurUrl}
              />
            </>
          ) : (
            <BtnEdit>
              <button className="btn " onClick={handleEditUrl}>
                <BsPencil />
              </button>
              {currentUrl}
            </BtnEdit>
          )}
        </div>

        <LinkAction>
          <button onClick={handleOnClick} className="btnDelete">
            <BsFillTrashFill size={20} />
          </button>
        </LinkAction>
      </LinkInfo>
    </>
  );
};
