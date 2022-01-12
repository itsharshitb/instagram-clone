import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";

function post({username, caption, imageUrl}) {
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
      <img
        className="post_image"
        src={imageUrl}
        alt=""
      />

      {/* username + caption */}
      <h4 className="post_text">
        <strong>{username} </strong>{caption}
      </h4>
    </div>
  );
}

export default post;
