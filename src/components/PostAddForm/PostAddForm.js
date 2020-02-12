import React, { useState } from "react";
import { POST_ADD } from "../../actions/actionTypes";

let dialogStyles = {
  width: "500px",
  maxWidth: "100%",
  margin: "0 auto",
  position: "fixed",
  left: "50%",
  top: "50%",
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
  const handleSubmit = () => {
    dispatch({ type: POST_ADD, authorImageUrl, postContent, postDescription });
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
    <div style={dialogStyles} onSubmit={handleSubmit}>
      <button style={dialogButtonsStyles} onClick={onClose}>
        x
      </button>

      <div className="inp-desc">
        <label htmlFor="input-descritiop">Input post author image url: </label>
        <input
          onChange={handleChangeAvatar}
          id="input-descritiop"
          className="input-descritiop"
          placeholder="description..."
          autocomplete="off"
        ></input>
      </div>

      <div className="inp-pos">
        <label htmlFor="input-position">Input post content url: </label>
        <input
          onChange={handleChangeContent}
          id="input-position"
          className="input-position"
          placeholder="position..."
          autocomplete="off"
        ></input>
      </div>

      <div className="inp-pos">
        <label htmlFor="input-position">Input post description: </label>
        <input
          onChange={handleChangeDescription}
          id="input-position"
          className="input-position"
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
