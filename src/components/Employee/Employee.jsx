import React from "react";
import "./Employee.scss";


const Employee = (props) => {
    const {name, role} = props;

    return <>
        <p>{name}</p>
        <p>{role}</p>
    </>
}

export default Employee;