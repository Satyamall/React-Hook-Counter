import style from "./Counter.module.css";

function Header({title}){
    return <h1 className={style.header}>{title}</h1>
}

export default Header;