import React from "react";

const ListWrap = (props) => 
<ul className="list-group list-group-flush">
    {props.children}
</ul>

export default ListWrap;