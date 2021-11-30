import React from "react";
import "./Button.scss";

const Button = (props) => {
    let buttonStyles = "button";

    //props.isSecondary === true ? buttonStyles += "button--secondary" : buttonStyles += "button--primary" 
    if(props.isSecondary === true){
        buttonStyles += " button--secondary" 
    } else {
        buttonStyles += " button--primary" 
    }

    return <button className={buttonStyles}>{props.buttonText}</button>
}

export default Button;