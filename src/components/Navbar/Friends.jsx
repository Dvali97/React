import s from './../Dialogs/Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Friends = (props) => {

    return <div className={s.friends_box}>
      <div className={s.dialog + " " + s.active + " " + s.mode}>
        <div className={s.icon}></div>
        <NavLink className={s.person} to={"#" + props.id}>{props.name}</NavLink>
    </div>  
    </div>
    
}

export default Friends;