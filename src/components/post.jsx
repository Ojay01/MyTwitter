import style from './Post.module.css';
function Post(props) {
    props.autor;
    props.body;
  return (
    <li className={style.post}>
      <p className={style.author}>{props.author} </p>
      <p className={style.body}>{props.body}</p>
    </li>
  );
}

export default Post;
