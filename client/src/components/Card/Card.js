import React from "react";
import "./Card.css";

const Card = (props) => 
    <div className="card">
        <div className="card-header bg-secondary text-light">
                <h3 className="card-title">
                <a href= {props.url}>
                    <strong><i className= {props.icon} ></i> {props.title} </strong>
                </a>
                        <span className = "float-right">{props.right}</span>
                </h3>
        </div>
        <div className="card-body">
            {props.children}
        </div>
    </div>


export default Card;