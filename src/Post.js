import React, { useEffect, useState } from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import { db } from "./firebase";
import firebase from 'firebase';

function Post({ postId, username, user, caption, imageUrl }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  useEffect(() => {
    let unsubscribe;
    if (postId) {
      unsubscribe = db
        .collection("posts")
        .doc(postId)
        .collection("comments")
        .orderBy("timestamp","desc")
        .onSnapshot((snapsot) => {
          setComments(snapsot.docs.map((doc) => doc.data()));
        });
    }
    return () => {
      unsubscribe();
    };
  }, [postId]);

  const postComment = (event) => {
    event.preventDefault();

    db.collection("posts").doc(postId).collection("comments").add({
      text: comment,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setComment('');
  }

  return (
    <div className="post">
      {/* header -> avatar + username */}
      <div className="post_header">
        <Avatar
          className="post_avatar"
          alt="Harshit"
          src="https://yt3.ggpht.com/a/AATXAJw2UXmQvp3vYV3Zs5mh1gsRmPc-COXmKR-jOA=s900-c-k-c0xffffffff-no-rj-mo"
        />
        <h3>{username}</h3>
      </div>

      {/* image */}
      <img className="post_image" src={imageUrl} alt="" />

      {/* username + caption */}
      <h4 className="post_text">
        <strong>{username} </strong>
        {caption}
      </h4>

      <div className="post_comments">
        {comments.map((comment)=>(
          <p>
            <strong>{comment.username}</strong> {comment.text}
          </p>
        ))}
      </div>

      {user && (<form className="post_commentbox">
        <input
          className="post_input"
          type="text"
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></input>
        <button
          className="post_button"
          disabled={!comment}
          type="submit"
          onClick={postComment}
        >
          Post
        </button>
      </form>)}
    </div>
  );
}

export default Post;
