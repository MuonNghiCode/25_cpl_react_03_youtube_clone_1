import React from "react";
import "./Navbar.css";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 
    faCirclePlay,faPencilSquare,faHeadset

  } from "@fortawesome/free-solid-svg-icons";
const DropDownCreate = () => {
    return (
        <div className="dropDownCreate">
            <ul className="listCategory">
                <></>
                <li><FontAwesomeIcon icon={faCirclePlay} className="icon" />Upload video</li>
                <li><FontAwesomeIcon icon={faHeadset} className="icon" />Go live</li>
                <li><FontAwesomeIcon icon={faPencilSquare} className="icon" />Create post</li>
            </ul>
        </div>
    )
}
export default DropDownCreate