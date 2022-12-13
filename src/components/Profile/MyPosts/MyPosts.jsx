import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updatePostText } from "../../../redux/profile-reducer";
import { useRef } from "react";



const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post id={p.id} message={p.message} likesCount={p.likesCount} />
  ));

  let newPostElement = useRef();

  let onAddPost = () => {
    props.addPost();
    // props.dispatch(addPostActionCreator());
  };


  let onPostChange = (e) => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
    // props.dispatch(updatePostText(text));
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
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div>New post</div>
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
