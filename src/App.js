import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import { db } from "./firebase";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => {
		setPosts(snapshot.docs.map(doc => doc.data()));
	})
  }, []);

  return (
    <div className="app">
      {/* {header} */}
      <div className="">
        <img
          className="app_headerImage"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F04%2FInstagram-Logo-2010-2013.png&f=1&nofb=1"
          alt=""
        />
      </div>
      <h1>Hello let's build instagram clone @_@</h1>
      {/* {posts} */}
      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageUrl={post.imageUrl}
        />
      ))}
    </div>
  );
}

export default App;
