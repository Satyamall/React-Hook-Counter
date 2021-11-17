import { useState } from "react";
import Header from "../Header";
import CounterBox from "../CounterBox";
import Button from "../Button";

function Counter(){
    const [counter,setCounter] = useState(0);

    const handleClick = (value)=>{
        setCounter(counter+value);
    }

    const handleClickDouble = (value)=>{
        setCounter(counter*value);
    }
    return (
        <div>
            <Header title={"Counter of Number Game"}/>
            <CounterBox title={counter}/>
            <Button title="INCREMENT" onClick={()=>handleClick(1)}/>
            <Button title="DECREMENT" onClick={()=>handleClick(-1)}/>
            <Button title="DOUBLE" onClick={()=>handleClickDouble(2)}/>
            <Button title="RESET" onClick={()=>handleClickDouble(0)}/>
        </div>
    )
}

export default Counter;