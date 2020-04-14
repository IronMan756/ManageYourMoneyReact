import React from "react";
import {reduxForm, Field } from 'redux-form';
import {connect} from "react-redux";
import customInput from "../../Input/Input.js";
import {requiredField,moreThen3Symbols} from "../../../validations";



let AuthForm = props => {
		const { handleSubmit,isFetching} = props
		return(
				<form onSubmit ={handleSubmit} className="mainWrap">
					<Field component={customInput}
						   title="Name" 
						   name="name" 
						   type="name"
						   validate={[requiredField,moreThen3Symbols]} 
						   required/>
					<Field component={customInput}
						   title="Email"
						   name="email"
						   type="email"
						   validate={[requiredField]}
						   required/>
					<div>
						<button className="button" >{ isFetching ? "Loading..." :"Sign In"}</button>
					</div>
				</form>
	)
}
AuthForm = reduxForm({
  form: 'auth'
})(AuthForm)


const mapStateToProps = state =>{
	return{
		isFetching: state.Registration.isFetching
	}
}
 export default connect(mapStateToProps)(AuthForm)
