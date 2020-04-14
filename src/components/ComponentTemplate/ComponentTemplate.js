import React from "react";
import "./ComponentTemplate.css";
// import ClosingImage from "../../images/times-solid.svg";
 


export default ({title="Registration"}) => {
	return(
		<div className="component-template">
		 	<header className="Component-header">
                <h1>{title}</h1>
            </header>
		</div>
	)
}