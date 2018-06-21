import React from "react";

const Button = (props) => 
<button type={props.type} className="btn btn-dark mx-1" onClick={props.onClick}>
<i className={props.icon}></i> {props.text} </button>

export default Button;