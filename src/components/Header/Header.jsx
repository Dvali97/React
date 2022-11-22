import s from './Header.module.css';

const Header = () => {
    return <header className={s.header}>
    <a href="/profile"><img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png' /></a>
  </header>
}

export default Header;