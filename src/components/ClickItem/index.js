import React from "react";
import "./ClickItem.css";



const ClickItem = (props) => {

    return (
        <div
            onClick={() => props.clickHandle(props.letter)}
            className="clickItem col-10 col-sm-6 col-md-4 col-lg-4 col-xl-4"
        >
            <img
                classname="clickImg"
                src={props.src}
                alt={props.letter}
            />
        </div>
    )
};

export default ClickItem;