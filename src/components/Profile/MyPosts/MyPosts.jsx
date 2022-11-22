import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React, { useRef } from "react";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post id={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = useRef();

  //იღებს value-ს მნიშვნელობას და props ით მიღბულ ფუნქციაში სვავს მნიშვნელობას
  let addPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div>New post</div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;




















// let addPost = () => {
//   props.addPost();
//   props.updateNewPostText('');
// };

// პოსტის შეყვანილი მნიშვნელობის გამოტანა
// let onPostChange = () => {
//   let text = newPostElement.current.value;
//   props.updateNewPostText(text);
// }