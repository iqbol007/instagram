import React from "react";
import Comment from "../Comment/Comment";

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

export default function VievAllComments({post, onClose, isOpen}) {
  let dialog = (
    <div style={dialogStyles}>
      <button style={dialogButtonsStyles} onClick={onClose}>
        x
      </button>
      <div className="viev-all-comments">
      
         {post.comments.map(o => <Comment key={o.id} comment={o}  />)}
      </div>
     
    </div>
  );
  if (!isOpen) {
    dialog = null;
  }
  return <>{dialog}</>;
}
