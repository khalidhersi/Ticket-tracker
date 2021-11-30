import React from "react";
import "./Ticket.scss";


const Ticket = (props) => {
    return <div className="ticket--container">
        <div className="ticket__border">
            <div className="ticket__box">
                <h3 className="ticket__title">Ticket</h3>
                <div className="ticket__counter"></div>
                <h5 className="ticket__name">Name:_________________</h5>
            </div>
        </div>
    </div>
}

export default Ticket;