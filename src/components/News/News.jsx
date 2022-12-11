import s from './News.module.css';
import NewsPost from './NewsPost/NewsPost';
import { addProgramActionCreator, updateProgramText } from './../../redux/news-reducer';

const News = (props) => {

    let newsDetails =
    props.news.map(n =>  <NewsPost name={n.name} done={n.done}/>);

    let artistChange = (e) => {
        let val = e.target.value;
        props.dispatch(updateProgramText(val));
    }

    let pushProgram = () => {
        props.dispatch(addProgramActionCreator());
    }

    return  (
        <div className={s.content}>
         {newsDetails}
         <div>
            <textarea onChange={artistChange}/>
         </div>
         <div><button onClick={pushProgram}>ADD</button></div>
        </div>
    )
}

export default News;