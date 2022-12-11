import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator, updatePostText } from "../../../redux/profile-reducer";



const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post id={p.id} message={p.message} likesCount={p.likesCount} />
  ));


  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };


  let onPostChange = (e) => {
    let val = e.target.value;
    props.dispatch(updatePostText(val));
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
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
