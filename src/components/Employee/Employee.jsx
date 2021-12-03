import React from "react";
import "./Employee.scss";


const Employee = (props) => {
    const {indexArr, nameArr, roleArr} = props;
    console.log(indexArr)

    let count = 0
    const employeeId = indexArr.map(employee => {
      console.log(employee)
      return count = employee
    });
    console.log(count) 
  const employeeDetailsJSX = nameArr.map((employee, index) =>
    (
    <p className="name__p" key={(index + 1)}>{employee.name} </p>
    ));

    return <div className="info">
        <h5 className="ticket__name">Name:______ {employeeDetailsJSX[2]}</h5>
        <h5 className="ticket__role">Role:_______</h5>
    </div>
}

export default Employee;