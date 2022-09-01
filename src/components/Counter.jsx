import { useState } from "react";
import './Counter.css'


const Counter = () => {

    /*  State hook */
    const [count, setCount] = useState(0)

    /* Funktion */
    const add = () => {
        setCount(count + 1)
    }
    /* Funktion */
    const minus = () => {
        // Das ist der ternary operator eine kurzschreibweise von if else
        setCount !== 0 ? setCount(count - 1) : setCount(0)
    }
    const reset = () => {
        setCount !== setCount ? setCount(count(0)) : setCount(0)
    }
    return (
        <div className='flexBox'>
            {/* Funktionsaufruf ohne () */}
            <div>
                <button onClick={add} >+</button>
                <button><span>{count}</span></button>
                <button onClick={minus}>-</button>
            </div>
            <button className='resetButton' onClick={reset}>reset</button>
        </div>


    )
}
export default Counter;