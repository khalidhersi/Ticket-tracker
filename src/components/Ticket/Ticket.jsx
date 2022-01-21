import React, {useState} from "react";
import "./Ticket.scss";

 

const Ticket = (props) => {

const [counter, setCounter] = useState(0)
    
const handleIncrement = () => {
    setCounter(counter + 1)
}

const handleDecrement = () => {
    if(counter >0) {
        setCounter(counter - 1)
    }    
}

const handleReset = () => {
     setCounter(0)
}

console.log(counter)

    return <div className="ticket__border">
        <h3 className="ticket__title">Ticket</h3>
        <div className="ticket__counter">
            <h5 className="ticket__counter-title">Counter</h5>
            <p className="counter">{0 + counter}</p>
            <div className="buttons">                
                <button className="decrement" onClick={handleDecrement}>-</button>
                <button className="increment" onClick={handleIncrement}>+</button>
            </div>
            <button className="reset" onClick={handleReset}>Reset</button>
        </div>
    </div>
}

export default Ticket;