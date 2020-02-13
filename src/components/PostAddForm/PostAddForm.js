import React, { useState } from "react";
import { POST_ADD } from "../../actions/actionTypes";

let dialogStyles = {
  width: "500px",
  height: "200px",
  maxWidth: "100%",
  marginTop: "-50px",
  position: "fixed",
  left: "45%",
  top: "5%",
  transform: "translate(-50%,50%)",
  zIndex: "999",
  backgroundColor: "#eee",
  padding: "10px 20px 40px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column"
};
let dialogButtonsStyles = {
  marginBottom: "15px",
  padding: "5px 8px",
  coursor: "pointer",
  borderRadius: "50%",
  border: "none",
  width: "30px",
  height: "30px",
  fontWeight: "bold",
  alingSelf: "flex-end"
};

export default function PostAddForm({ onClose, isOpen, dispatch }) {
  const [authorImageUrl, setauthorImageUrl] = useState("");
  const [postContent, setpostContent] = useState("");
  const [postDescription, setpostDescription] = useState("");
  let errorInputAva = false;
  let errorInputConImg = false;
  const handleSubmit = () => {
    if (authorImageUrl === "") {
      errorInputAva = true;
      return;
    }
    if (postContent === "") {
      errorInputConImg = true;
      return;
    }
    dispatch({ type: POST_ADD, authorImageUrl, postContent, postDescription });
    onClose();
    setauthorImageUrl("");
    setpostContent("");
    setpostDescription("");
    errorInputConImg=true;
    errorInputAva=true;
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
    <div style={dialogStyles}>
      <button style={dialogButtonsStyles} onClick={onClose}>
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
        {errorInputAva && <span>please input url</span>}
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
        {errorInputConImg && <span>please input url</span>}
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
