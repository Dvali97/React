import s from './News.module.css';
import NewsPost from './NewsPost/NewsPost';

const News = (props) => {

    let newsDetails =
    props.news.map(n =>  <NewsPost name={n.name} done={n.done}/>);

    return  (
        <div className={s.content}>
         {newsDetails}
        </div>
    )
}

export default News;