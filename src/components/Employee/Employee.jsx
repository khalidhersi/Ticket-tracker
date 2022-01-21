import React from "react";
import "./Employee.scss";
import Ticket from "../Ticket/Ticket";


const Employee = (props) => {
    const {id, name, role} = props;

    return <div className="container">
         <Ticket /> 
        <h5 className="ticket__name">Name: {name}</h5>
        <h5 className="ticket__role">Role: {role}</h5>
    </div>
}

export default Employee;