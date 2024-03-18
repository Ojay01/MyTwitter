import style from "./postLists.module.css";
import Post from "./post";
import NewPost from "./NewPost";

function PostList() {
  return (
    <>
    <NewPost />
    <ul className={style.posts}>
      <Post author="Kelly Kingston" body="I love React" />
      <Post author="Egbe Kliuvert" body="React is Awesome" />
      <Post author="Diamond wilson" body="React is Awefull" />
    </ul>
    </>
    
  );
}

export default PostList;
