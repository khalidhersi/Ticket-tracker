import React, {useState} from "react";
import "./Ticket.scss";
import Employee from "../Employee/Employee";
import team from "../../data/team";
 

const Ticket = (props) => {

const [counter, setCounter] = useState(0)

  const teamNameArr = team
    .filter((employee) => employee.name)
    console.log(teamNameArr)

    const teamIdArr = team
    .map((employee) => employee.id)
    console.log(teamIdArr)

    const teaRoledArr = team
    .map((employee) => employee.role)
    console.log(teaRoledArr)
    
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
        <Employee nameArr={teamNameArr} indexArr={teamIdArr} roleArr={teaRoledArr}/>
    </div>
}

export default Ticket;