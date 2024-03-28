import style from "./postLists.module.css";
import Post from "./post";
import NewPost from "./NewPost";
import { useState, useEffect } from "react";
import Modal from "./Modal";

function PostList({ isOpen, isClose }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
    }
    fetchPosts();
  }, []);
  function AddPost(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    setPosts((existingPosts) => [postData, ...existingPosts]);
  }

  return (
    <>
      {isOpen && (
        <Modal onClose={isClose}>
          <NewPost onCancel={isClose} onAddPost={AddPost} />
        </Modal>
      )}
      {(posts.length > 0 && (
        <ul className={style.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )) || (
        <div style={{ textAlign: "center" }}>
          <h2> No Posts Found</h2>
          <p>Add New Posts</p>
        </div>
      )}
    </>
  );
}

export default PostList;
