import React from "react";

const Card = (props) => 
    <div className="card card-primary">
        <div className="card-header">
            <h3 className="card-title">
                <strong>
                    <i className= {props.icon} ></i> {props.title} </strong>
            </h3>
        </div>
        <div className="card-body">
            {props.children}
        </div>
    </div>


export default Card;