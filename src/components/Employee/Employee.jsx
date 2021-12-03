import React from "react";
import "./Employee.scss";


const Employee = (props) => {
    const {indexArr, nameArr, roleArr} = props;
    console.log(indexArr)

    const employeeRoleJSX = roleArr.map((employee, index) =>
    (
    <p className="name__p" key={(index + 1)}>{employee.role} </p>
    ));


  const employeeNameJSX = nameArr.map((employee, index) =>
    (
    <p className="name__p" key={(index + 1)}>{employee.name} </p>
    ));

    /* 
      let count = []
    const employeeId = indexArr.forEach(employee => {
      console.log(employee)
       count = employee
    });
    console.log(employeeId)
        console.log(count) 
    */
    

    return <div className="info">
        <h5 className="ticket__name">Name:______ {employeeNameJSX}</h5>
        <h5 className="ticket__role">Role:_______{employeeRoleJSX}</h5>
    </div>
}

export default Employee;