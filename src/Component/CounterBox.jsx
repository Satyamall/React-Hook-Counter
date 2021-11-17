
import style from "./Counter.module.css";

function CounterBox({title}){
    return (
        <div className={style.counterBox}>
            <h1>{title}</h1>
        </div>
    )
}

export default CounterBox;