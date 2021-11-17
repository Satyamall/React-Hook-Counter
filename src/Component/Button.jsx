
import style from "./Counter.module.css";

export default function Button({title,onClick}){
     
    return <button className={style.button} onClick={onClick}>{title}</button>
}