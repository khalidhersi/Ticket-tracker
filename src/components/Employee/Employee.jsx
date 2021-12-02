import React from "react";
import "./Employee.scss";


const Employee = (props) => {
    const {indexArr, nameArr, roleArr} = props;
    console.log(indexArr)
  const employeeDetailsJSX = nameArr.map((employee, index) => (
    <p className="name__p" key={(index + 1)}>{employee.name} </p> 
    ));

    return <div className="info">
        <h5 className="ticket__name">Name:______ {employeeDetailsJSX}</h5>
        <h5 className="ticket__role">Role:_______</h5>
    </div>
}

export default Employee;