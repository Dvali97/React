import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css'
import Friends from './Friends';


const Navbar = (props) => {

  let friendsPersons = 
  props.friends.map(d => <Friends name={d.name} id={d.id} />);

    return (
     <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to={'/profile'} className={({isActive}) => isActive ? s.activeLink : ""}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={'/dialogs'} className={({isActive}) => isActive ? s.activeLink : ""}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={'/news'} className={({isActive}) => isActive ? s.activeLink : ""}>News</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to={'/music'} className={({isActive}) => isActive ? s.activeLink : ""}>Music</NavLink>
        </div>
        <br></br>
        <div className={s.item}>
          <NavLink to={'/settings'} className={({isActive}) => isActive ? s.activeLink : ""}>Settings</NavLink>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className={s.item}>
          <NavLink to={'#'}>Friends</NavLink>
          {friendsPersons}
        </div>
      </nav>
      );
}

export default Navbar;