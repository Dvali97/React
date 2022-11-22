import s from './Post.module.css';

const Post = (props) => {
    return <div>
        <div className={s.item}>
            <img src="https://i.ytimg.com/vi/o_26SGY83-I/movieposter_en.jpg" alt="" />
          {props.message}
            <div>
              <span>Like {props.likesCount}</span>
            </div>
          </div>
        </div>
}

export default Post;