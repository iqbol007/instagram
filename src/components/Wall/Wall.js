import React, { useState, useReducer } from "react";
import Post from "../Post/Post";
import PostAddForm from "../PostAddForm/PostAddForm";
import {
  COMMENT_ADD,
  COMMENT_LIKE,
  COMMENT_REMOVE,
  POST_LIKE,
  POST_ADD,
  POST_REMOVE
} from "../../actions/actionTypes";
import Footer from "../Footer/Footer";
let nextPostId = 1;
let nextCommentId = 1;

const initialPosts = [
  {
    id: nextPostId++,
    author: "instagram",
    imgUrl: "https://i.pravatar.cc/200",
    likes: 3,
    textContent: "Second Post",
    imgContentUrl: "https://i.pravatar.cc/510",
    comments: [
      {
        id: nextCommentId++,
        author: "fcbarcelona",
        content: "good bay",
        likes: 14,
        comLikedByMe: false
      }
    ],
    isLikedByme: false
  },
  {
    id: nextPostId++,
    author: "leomessi",
    imgUrl: "https://i.pravatar.cc/200",
    likes: 4,
    isLikedByMe: false,
    textContent: "good morning",
    imgContentUrl: "https://i.pravatar.cc/530",
    isLikedByme: false,
    comments: [
      {
        id: nextCommentId++,
        author: "danny",
        content: "Nice Post",
        likes: 0,
        comLikedByme: false
      }
    ]
  },
  {
    id: nextPostId++,
    author: "cristiano",
    imgUrl: "https://i.pravatar.cc/200",
    likes: 215,
    textContent: "third Post",
    isLikedByMe: false,
    imgContentUrl: "https://i.pravatar.cc/590",
    isLikedByme: false,
    comments: [
      {
        id: nextCommentId++,
        author: "john",
        content: "Cool man!!!",
        likes: 55,
        comLikedByme: false
      }
    ]
  }
];
function likeComment(comments, id) {
  return comments.map(c => {
    if (c.id !== id) {
      return c;
    } else {
      if (c.comLikedByme) {
        c.comLikedByme = !c.comLikedByme;
        return { ...c, likes: c.likes - 1 };
      }
      c.comLikedByme = !c.comLikedByme;
      return { ...c, likes: c.likes + 1 };
    }
  });
}
function removeComment(comments, id) {
  return comments.filter(c => c.id !== id);
}

function addComment(comments, comment) {
  return [
    ...comments,
    { id: nextCommentId++, author: "user_01", content: comment, likes: 0 }
  ];
}
function addPost(posts, authorImageUrl, postContent, postDescription) {
  return [
    ...posts,
    {
      id: nextPostId++,
      author: "user_01",
      imgUrl: authorImageUrl,
      likes: 0,
      textContent: postDescription,
      imgContentUrl: postContent,
      comments: [],
      isLikedByme: false
    }
  ];
}
function removePost(posts, postId) {
  return posts.filter(o => o.id !== postId);
}
function postLike(posts, postId) {
  return posts.map(p => {
    if (p.id !== postId) {
      return p;
    } else {
      if (p.isLikedByme) {
        p.isLikedByme = !p.isLikedByme;
        return { ...p, likes: p.likes - 1 };
      } else {
        p.isLikedByme = !p.isLikedByme;
        return { ...p, likes: p.likes + 1 };
      }
    }
  });
}
function commentAdd(posts, postId, comment) {
  return posts.map(p => ({
    ...p,
    comments: p.id !== postId ? p.comments : addComment(p.comments, comment)
  }));
}
export default function Wall() {
  const [posts, dispatch] = useReducer(reducer, initialPosts);
  const [isOpen, setisOpen] = useState(false);

  function reducer(posts, action) {
    switch (action.type) {
      case POST_LIKE: {
        const { postId } = action;
        return postLike(posts, postId);
      }
      case COMMENT_ADD: {
        const { postId, comment } = action;
        return commentAdd(posts, postId, comment);
      }
      case COMMENT_LIKE: {
        const { commentId } = action;
        return posts.map(p => ({
          ...p,
          comments: likeComment(p.comments, commentId)
        }));
      }
      case COMMENT_REMOVE: {
        const { commentId } = action;
        return posts.map(p => ({
          ...p,
          comments: removeComment(p.comments, commentId)
        }));
      }
      case POST_ADD: {
        const { authorImageUrl, postContent, postDescription } = action;
        return addPost(posts, authorImageUrl, postContent, postDescription);
      }
      case POST_REMOVE: {
        const { postId } = action;
        return removePost(posts, postId);
      }
      default:
        return posts;
    }
  }
  return (
    <>
      <div className="main">
        <div className="header">
          <i className="fa fa-camera fr head-icons pl size-xl"></i>
          <span className="instagramm-logo">Instagramm</span>
          <i className="fa fa-paper-plane fl head-icons pr size-xl"></i>
        </div>
        {posts
          .map(o => <Post key={o.id} post={o} dispatch={dispatch} />)
          .reverse()}
        <PostAddForm
          isOpen={isOpen}
          onClose={()=>setisOpen(false)}
          dispatch={dispatch}
        />
      </div>
      <div className="space"></div>
      <Footer onAddButtonClick={()=>setisOpen(true)} />
    </>
  );
}
