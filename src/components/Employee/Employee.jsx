import React from "react";
import "./Employee.scss";


const Employee = (props) => {
    const {name, role} = props;

    return <>
        <h5 className="ticket__name">Name:________</h5>
        <h5 className="ticket__role">Role:____________</h5>
    </>
}

export default Employee;