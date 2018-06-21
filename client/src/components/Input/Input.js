import React from "react";

const Input = (props) =>

    <div className="form-group">
        <label htmlFor="search">{props.label}</label>
        <input type="text" className="form-control" id="search-term" name={props.name} onChange={props.onChange} />
    </div>;

export default Input;