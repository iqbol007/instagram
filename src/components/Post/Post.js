import React, { useState } from "react";
import Comments from "../Comments/Comments";
import CommentAddForm from "../CommentAddForm/CommentAddForm";
import { POST_LIKE, POST_REMOVE } from "../../actions/actionTypes";
import VievAllComments from "../VievAllComments/VievAllComments";

export default function Post({ post, dispatch }) {
  const handleLike = () => {
    dispatch({ type: POST_LIKE, postId: post.id });
  };
  const avaImg = post.imgUrl;
  const conImg = post.imgContentUrl;
  var avaStyle = {
    width: "40px",
    height: "40px",
    backgroundImage: `url(${avaImg})`,
    backgroundSize: "cover",
    borderRadius: "50%"
  };
  var contentImgStyle = {
    width: "400px",
    height: "400px",
    paddingTop: "5px",
    backgroundImage: `url(${conImg})`,
    backgroundSize: "cover"
  };

  const [isOpen, setisOpen] = useState(false);

  const handleRemowePost = () => {
    dispatch({ type: POST_REMOVE, postId: post.id });
  };
  return (
    <article className="post">
      <div className="author">
        <div style={avaStyle}></div>
        <span className="author-name">{post.author}</span>
        <i className="fa fa-trash remover" onClick={handleRemowePost}></i>
        <div></div>
      </div>
      <div className="text-content">{post.geo}</div>
      <div className="content">
        <div className="img-content">
          <div style={contentImgStyle}></div>
        </div>
        <div className="social-buttons">
          <i
            className={
              post.isLikedByme
                ? "fa fa-heart fr fa-lg likedClass"
                : "fa fa-heart fr fa-lg"
            }
            onClick={handleLike}
          ></i>

          <i
            className="fa fa-comment fr fa-lg"
            onClick={() => setisOpen(true)}
          ></i>
          <i className="fa fa-paper-plane fr fa-lg"></i>
          <i className="fa fa-bookmark fl fa-lg"></i>
        </div>
      </div>
      <footer className="footer">
        <div className="likes">Нравится: {post.likes}</div>
        <div className="text-content">
          <span className="description">{post.author}</span> {post.textContent}
        </div>
      </footer>
      <CommentAddForm postId={post.id} dispatch={dispatch} />
      <Comments comments={post.comments} dispatch={dispatch} />
      <VievAllComments
        comments={post.comments}
        isOpen={isOpen}
        onClose={() => setisOpen(false)}
        dispatch={dispatch}
      />
    </article>
  );
}
