import style from "./NewPost.module.css";
import { useState } from "react";
function NewPost({ onCancel, onAddPost }) {
  const [currentValue, SetNewValue] = useState("I Love React");
  const [currentName, SetNewName] = useState("Kelly Kingston");

  function changeBodyHandler(event) {
    SetNewValue(event.target.value);
  }

  function changeNameHandler(event) {
    SetNewName(event.target.value);
  }

  function formSubmit(event) {
    event.preventDefault();
    const PostData = {
      body: currentValue,
      author: currentName,
    };
    onAddPost(PostData);
    onCancel();
  }

  return (
    <form className={style.form} onSubmit={formSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={changeNameHandler} />
      </p>
      <p className={style.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
