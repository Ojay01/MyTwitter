import style from "./postLists.module.css";
import Post from "./post";
import NewPost from "./NewPost";
import {useState} from 'react'


function PostList() {
    const [currentValue, SetNewValue] = useState('I Love React');

    function changeBodyHandler(event) {
        SetNewValue(event.target.value);
    }
  return (
    <>
    <NewPost bodyChange={changeBodyHandler} />
    <ul className={style.posts}>
      <Post author="Kelly Kingston" body={currentValue} />
      <Post author="Egbe Kliuvert" body="React is Awesome" />
      <Post author="Diamond wilson" body="React is Awefull" />
    </ul>
    </>
    
  );
}

export default PostList;
