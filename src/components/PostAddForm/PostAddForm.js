import React, { useState } from "react";
import { POST_ADD } from "../../actions/actionTypes";
export default function PostAddForm({ onClose, isOpen, dispatch }) {
  const [authorImageUrl, setauthorImageUrl] = useState("");
  const [postContent, setpostContent] = useState("");
  const [postDescription, setpostDescription] = useState("");
  const handleSubmit = () => {
    if (authorImageUrl === "" && postContent === "") {
      return;
    }
    dispatch({ type: POST_ADD, authorImageUrl, postContent, postDescription });
    onClose();
    setauthorImageUrl("");
    setpostContent("");
    setpostDescription("");
  };
  const handleChangeAvatar = evt => {
    const value = evt.target.value;
    setauthorImageUrl(value);
  };
  const handleChangeContent = evt => {
    const value = evt.target.value;
    setpostContent(value);
  };
  const handleChangeDescription = evt => {
    const value = evt.target.value;
    setpostDescription(value);
  };
  let dialog = (
    <div className="dialogStyles">
      <button onClick={onClose} className="dialogButtonsStyles">
        x
      </button>
      <h1>Add post form</h1>
      <div>
        <label className="lab" htmlFor="input-ava">
          Input post author image url:{" "}
        </label>
        <input
          onChange={handleChangeAvatar}
          id="input-ava"
          className="input-avaurl"
          placeholder="URL..."
          autocomplete="off"
        ></input>
      </div>

      <div>
        <label htmlFor="input-cont">Input post content url: </label>
        <input
          onChange={handleChangeContent}
          id="input-cont"
          className="input-conturl"
          placeholder="URL..."
          autocomplete="off"
        ></input>
      </div>

      <div>
        <label htmlFor="input-desc">Input post description: </label>
        <input
          onChange={handleChangeDescription}
          id="input-desc"
          className="input-description"
          placeholder="description..."
          autocomplete="off"
        ></input>
      </div>

      <button onClick={handleSubmit}>ok</button>
    </div>
  );
  if (!isOpen) {
    dialog = null;
  }
  return <>{dialog}</>;
}
