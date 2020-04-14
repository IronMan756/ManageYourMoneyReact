import React from "react";
import  "./Input.css";



const customInput = ({input,meta,...props}) =>{
	let classStyle = props.required === true? "controlLabel": "controlLabel2"
	let error = meta.error && meta.touched ? "error": ""
	return(
			<div className="inputStyle" {...props} >
	            <label className= {classStyle + error} >{meta.error && meta.touched ? meta.error :props.title  }</label>
	            <input className="formControl" {...input}{...props}/>
	        </div>
		);
}

export default customInput