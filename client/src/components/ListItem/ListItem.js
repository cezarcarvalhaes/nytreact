import React from "react";

const ListItem = (props) => 
    <a href={props.url}>
        <li className="list-group list-group-flush">
        {props.title}
        </li>
    </a>

export default ListItem;