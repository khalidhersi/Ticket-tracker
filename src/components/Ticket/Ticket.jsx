import React from "react";
import "./Ticket.scss";
import Employee from "../Employee/Employee";


const Ticket = (props) => {
let counter = 0;
const {id} = props;

    return <div className="ticket__border">
        <h3 className="ticket__title">Ticket</h3>
        <div className="ticket__counter">
            <h5 className="ticket__counter-title">Counter</h5>
            <p className="counter">{counter += id}</p>
            <p className="minus">-</p>
            <p className="plus">+</p>
        </div>
        <Employee />
    </div>
}

export default Ticket;