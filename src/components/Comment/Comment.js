import React from "react";
import { COMMENT_LIKE, COMMENT_REMOVE } from "../../actions/actionTypes";

export default function Comment({ comment, dispatch }) {
  const handleLike = () => {
    dispatch({ type: COMMENT_LIKE, commentId: comment.id });
  };
  const handleRemove = () => {
    dispatch({ type: COMMENT_REMOVE, commentId: comment.id });
  };

  return (
    <article className="comment">
      <div>
        <i className="fa fa-trash com-rem" onClick={handleRemove}></i>
      </div>
      <div className="comment-author">
        {comment.author}
        <span className="comment-text col">{comment.content}</span>

        <i
          className={
            comment.comLikedByme
              ? "fa fa-heart fa-sm col likedClass"
              : "fa fa-heart fa-sm col"
          }
          onClick={handleLike}
        ></i>
      </div>
      <div className="comment-info">
        <span className="comment-aded-time">13мин.</span>
        <span className="comment-likes">Нравится: {comment.likes}</span>
        <span className="comment-reply">
          Ответить <i className="fa fa-reply"></i>
        </span>
      </div>
      <footer></footer>
    </article>
  );
}
