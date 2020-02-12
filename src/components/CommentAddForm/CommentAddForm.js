import React, { useState } from "react";
import { COMMENT_ADD } from "../../actions/actionTypes";

export default function CommentAddForm({ postId, dispatch }) {
  const [comment, setComment] = useState("");

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch({ type: COMMENT_ADD, comment, postId });
    setComment("");
  };

  const handleChange = evt => {
    const value = evt.target.value;
    setComment(value);
  };

  return (
    <form className="comment-add-form" onSubmit={handleSubmit}>
      <input
        className="input-comment"
        onChange={handleChange}
        value={comment}
        placeholder="To comment..."
        autocomplete="off"
      ></input>
      <i className="fa fa-plus-circle gray" onClick={handleSubmit}></i>
    </form>
  );
}
