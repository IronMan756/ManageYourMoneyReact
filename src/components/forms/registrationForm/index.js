import React,{Component} from "react";
import {Field, reduxForm} from "redux-form";
import customInput from "../../Input/Input";
import {connect} from "react-redux";
import "../../Button/Button.css";
import "../../../styles/SympleComponent.css";
import {requiredField,moreThen3Symbols} from "../../../validations";






const FORM_TEMPLATE = {	
	name: {
		component: customInput,
		type: "name",
		name: "name",
		required:true,
		title: "Name",
		validate:[requiredField,moreThen3Symbols]
	},
	email: {
		component: customInput,
		type: "email",
		name: "email",
		required:true,
		title: "Email",
		validate:[requiredField]
	},
	password: {
		component: customInput,
		type: "password",
		name: "password",
		title:"Password",
		required:true,
		validate:[requiredField]
	},
	ConfirmPassword: {
		component: customInput,
		type: "password",
		name: "ConfirmPassword",
		title:"ConfirmPassword",
		required:true,
		validate:[requiredField] 		
	},
};


class RegistrationForm extends React.Component {
	state = {
		form:FORM_TEMPLATE
	}

	render(){
		const{handleSubmit,isFetching} = this.props
		const{form} = this.state
		return(
		<form onSubmit={handleSubmit} >
		    {Object.keys(form).map(el => (
		    	<Field component = {form[el].component}
				   title={form[el].title}
				   name={form[el].name}
				   type={form[el].type}
				   validate={form[el].validate}
				   required={form[el].required}
				   key={form[el].name} />
		    ))}
		   <button className="button" >{ isFetching ? "Loading..." : "Register"}</button>
		</form>
		)
	}
}
 RegistrationForm = reduxForm({
	form:"Registration"
})(RegistrationForm)

const mapStateToProps = state =>{
	return{
		isFetching:state.Registration.isFetching
	}
}
export default connect(mapStateToProps)(RegistrationForm)