import React from "react";
import Comment from "../Comment/Comment";
export default function VievAllComments({
  comments,
  onClose,
  isOpen,
  dispatch
}) {
  let dialog = (
    <div className="dialogStyles">
      <button className="dialogButtonsStyles" onClick={onClose}>
        x
      </button>
      <div className="viev-all-comments">
        {comments.map(o => (
          <Comment key={o.id} comment={o} dispatch={dispatch} />
        ))}
      </div>
    </div>
  );
  if (!isOpen) {
    dialog = null;
  }
  return <>{dialog}</>;
}
