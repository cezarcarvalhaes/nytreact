import React from "react";

const Select = (props) =>
    <div className="form-group">
        <label htmlFor="pwd">Number of Records to Retrieve:</label>
        <select className="form-control" id="article-count" name={props.name} onChange={props.onChange}>
            <option value="1">1</option>
            <option value="5" defaultValue>5</option>
            <option value="10">10</option>
        </select>
    </div>

export default Select;