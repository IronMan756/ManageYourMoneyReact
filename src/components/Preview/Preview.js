import React from "react";
import "./Preview.css"
import Previewlogo from "../../images/avatar-placeholder.png";


export default ({src }) =>{
	return(
		<div className="previewWrap">
                <img src={src} alt="preview" id="preview"/>
        </div>
	)	
}