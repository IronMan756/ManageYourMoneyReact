	import React,{Component} from "react";
import AuthForm from "../../components/forms/authForm";
import Template from "../../components/ComponentTemplate/ComponentTemplate";
import {connect} from "react-redux";
import {authGetUser,authToStore,authTAutoLogIn} from "../../actions/Registration";
import {Redirect} from "react-router-dom";
import "../../styles/SympleComponent.css";
import "./Auth.css";


class AuthPage extends React.Component{
	state ={
		err:null
	}

    onCheckUser = formData =>{
			const {authUserObj,authToStore} = this.props			
			let {
			    name: formName,
			    email: formEmail
			} = formData
			const {name, email} = authUserObj
    		formName === name?formEmail === email ? authToStore(authUserObj):
    		this.setState( prevState =>({ ...prevState, err:"No such email"})) :
    		this.setState( prevState =>({ ...prevState, err:"No such user name"}))
		}
	render(){
	
		// authUserObj && document.cookie ?authToStore(authUserObj) :
		// 	console.log("not user")
		// if(authUserObj && document.cookie) {
		// 						setTimeout (
  //       function () {
  //         this.prop.authToStore(this.props.authUserObj)
  //   }, 0 )}
		const{err} = this.state
		const{user} = this.props
		if (user) return <Redirect to="/" />
		return(
			<div className="SignIn">
				<Template title="Sign In"/>
				<AuthForm onSubmit={this.onCheckUser}/>
				{err && <p>{err}</p>}									
			</div>
		);	
	}
	
}
const mapStateToProps = state =>{
	return{
		isFetching: state.Registration.isFetching,
		authUserObj: state.Registration.authUserObj,
		authToStore: state.Registration.authToStore,
		user:state.Registration.user
	}
} 

export default connect( mapStateToProps,{authGetUser,authToStore,authTAutoLogIn})(AuthPage) 