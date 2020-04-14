import React,{Component} from "react";
import "./Registration.css";
import "../../components/Button/Button.css";
import {Redirect} from "react-router-dom";

import Template from "../../components/ComponentTemplate/ComponentTemplate.js";

import RegistrationForm from "../../components/forms/registrationForm";
import {connect} from "react-redux";
import axios from "axios";
import {registration} from "../../actions/Registration.js";



class Registration extends Component {
	state = {
		formValid: false,
		value64:"http://scma.com.ua/wp-content/uploads/2015/02/user.png"
	}

	
 	submitEvent = formData => {
 		const{registration} =this.props
 		if(formData.password === formData.ConfirmPassword){
 			registration(formData)
 			this.setState( prevState => ({...prevState, formValid:null}))}
 		else {
 		this.setState( prevState => ({...prevState, formValid:"Пароль должен совпадать"}))}
 		 
 	};

	render(){
		const {formValid} = this.state
		const {user} = this.props
		if (user) return <Redirect to="/" />;	
		return (
			<div className="compWrap">
				<Template/>
				<div className="mainPart">
					<RegistrationForm onSubmit = {this.submitEvent}/>
					{formValid && <p>{formValid}</p>}
				</div>
			</div>
		);
	}
}
const mapStateToProps = state => {
	return {
		isFetching: state.Registration.isFetching,
		user: state.Registration.user
	};
};
export default connect(mapStateToProps,{registration}
)(Registration);























// if(this.props.required ==="true")
		
			// const e = this.state.event.className
			// console.log('event',e)
			// const className = "form-control-valid"

		
		        // this.setState( prevState=> ({...prevState, className:"form-control-valid" }));

// changerEvent = ()=>{
// 		const mail = {email: this.state.form.email.value}
// 		let {changeEvent} = this.props
// 		changeEvent(mail) 	
// 	};


// validator = (event)=>{
	// 	let form = this.state.form
	// 	let [type] = Object.keys(this.state.form)
	// 	console.log(event)
	// }








	// switch(prevValue.type){
		// 	case"number": 
		// 	    prevValue.oninput="validity.valid||(value='');"
		// 	    prevValue.value > 0 ? validInput(): inValidInput()
		// 	    prevValue.value.match(/^\d+/)
		// 	    prevValue.min = 0
		//     break
		// 	case"text":
		// 		prevValue.value.match(/[0-9a-zA-Z]/) ? validInput(): inValidInput()	
		// 	break
			// case"email":
				// prevValue.value.indexOf("@") > 0 &&  prevValue.value.indexOf(".") > 0 ? validInput(): inValidInput()
			// break
		// 	case"password":
		// 		prevValue.value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/) ? validInput(): inValidInput()
		// 	break
			// case"file":
			// 	for ( var file of currentInputFiles ) {
			//         if ( file.type.split('/')[0] !== 'image' )
			//         	 document.write("Это не фото!!!!")
			//         }
			// break
		// }






	// 	// const valid = Object.keys(rules).reduce((prev, elem) => {
	// 	// 	if (prev) return true;
	// 	// 	const check =rules[elem].cb(value)
			
	// 	// 	//  prevValue[rules[elem].field]
	// 	// 	// if (!prev && check) return check;

	// 	// 	return false;
	// 	// }, false);
	// 	// console.log("valid",valid )

	// 	// return valid;




	// sendRequest = () => {
	// 	const values = Object.keys(this.state.form).reduce((prev, elem) => {
	// 		return { ...prev, [elem]: this.state.form[elem].value };
	// 	}, {});

	// 	this.props.submitEvent(values);
	// };




// sendAxios = payload => {
// 		const {registrationRequest} = this.state
// 		return dispatch => {
// 			console.log(payload)
// 			dispatch(registrationRequest()); 
// 			axios({
// 				method: "GET",
// 				url: "http://fea13-andrew.glitch.me/owner",
// 				// data: payload
// 			})
// 				.then(res => console.log("It is ok"))
// 				.catch(err => console.log("It is Fail"));
// 		};
// 	};










	// const values = this.getAllValues();


		// const auth = payload => {
		// 	// console.log("registrationSuccess",registrationSuccess)
		// 	return dispatch => {
		// 		dispatch(registrationRequest());

		// 		axios({
		// 			method: "POST",
		// 			url: "http://fea13-andrew.glitch.me/owner",
		// 			data: {
		// 		          name: this.state.form.name.value,
		// 		          email: this.state.form.email.value,
		// 		          passHash: this.state.form.password.value
		// 		        }
		// 		})
		// 			.then(res => dispatch(registrationSuccess(res)))
		// 			.catch(err => dispatch(registrationFail(err)));
		// 	};
		// axios ({
		// 	method:"POST",
		// 	url:"http://fea13-andrew.glitch.me/owner",
		// 	data: {
	 //          name: this.state.form.name.value,
	 //          email: this.state.form.email.value,
	 //          passHash: this.state.form.password.value
	 //        }
  //     })
	 //        .then(res =>console.log(res))
		// 	.catch(err =>console.log(err))
 		// };