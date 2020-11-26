import React from "react";
import "./row.css"

const Row = function (props) {
    return(
        <div className="content-wrapper">
            <div className="content-wrapper__left-wrapper">{props.left}</div>
            <div className="content-wrapper__left-wrapper">{props.right}</div>
        </div>
    )
};

export default Row;