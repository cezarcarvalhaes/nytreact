import React from "react";
import "./Section.css"

const Section = (props) => 
    <div className = "row">
        <div className = "col-sm-12">
        {props.children}
        </div>
    </div>

export default Section