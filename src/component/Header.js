import style from '../styles/headerStyles.module.css';

function Header() {
    return(
        <nav className={style.top}>
            <h1 className={style.headerText}> Kalkulator Sederhana </h1>
        </nav>
    )
}

export default Header;
