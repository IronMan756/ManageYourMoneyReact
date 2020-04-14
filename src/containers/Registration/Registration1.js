// import React,{Component} from "react";
// import "./Registration.css";
// import "../../components/Button/Button.css";
// import {Redirect} from "react-router-dom";

// import Preview from "../../components//Preview/Preview.js";
// import Template from "../../components/ComponentTemplate/ComponentTemplate.js";

// // import RegistrComponent from "../../containers/Registration";




// import {connect} from "react-redux";
// import axios from "axios";
// import {registration} from "../../actions/Registration.js";

// const FORM_TEMPLATE = {	
// 	name: {
// 		type: "name",
// 		name: "name",
// 		className:"formControl",
// 	 	ClassName:"controlLabel",
// 		required:"true",
// 		title: "Name",
// 		value: "",
// 		validate: {
// 			require: {
// 				cb: v => v.trim() === ""
// 			}
// 		},
// 		touch: false,
// 		valid: false
// 	},
// 	email: {
// 		type: "email",
// 		name: "email",
// 		className:"formControl",
// 	 	ClassName:"controlLabel",
// 		required:"true",
// 		title: "Email",
// 		value: "",
// 		validate: {
// 			require: {
// 				cb: v => v.trim() === ""
// 			}
// 		},
// 		touch: false,
// 		valid: false
// 	},
// 	password: {
// 		type: "password",
// 		name: "password",
// 		className:"formControl",
// 	 	ClassName:"controlLabel",
// 		title:"Password",
// 		required:"true",
// 		value: "",
// 		validate: {
// 			require: {
// 				cb: v => v.trim() === ""
// 			},
// 			minL: {
// 				cb: v => v.trim().length < 6
// 			}
// 		},
// 		touch: false,
// 		valid: false
// 	},
// 	ConfirmPassword: {
// 		type: "password",
// 		name: "ConfirmPassword",
// 		className:"formControl",
// 	 	ClassName:"controlLabel",
// 		title:"ConfirmPassword",
// 		required:"true",
// 		value: "",
// 		validate: {
// 			require: {
// 				cb: v => v.trim() === ""
// 			},
// 			minL: {
// 				cb: v => v.trim().length < 6
// 			},
// 			match: {
//  				cb: (v, p) => v !== p,
// 				field: "password"
// 			}
// 		},
// 		touch: false,
// 		valid: false
// 	},
// };
//  class Registration extends Component {
// 	state = {
// 		form:FORM_TEMPLATE,
// 		formValid: false,
// 		value64:"http://scma.com.ua/wp-content/uploads/2015/02/user.png"
// 	}

// 	validator = (prevValue,value,form,name) => {
// 		// console.log("prevValue",prevValue)
// 		// console.log("form",form)
// 		// let validInput = ()=>{

// 		// 	this.setState(prevState => ({
// 		// 	...prevState,
// 		// 	form: {
// 		// 		...prevState.form,
// 		// 		[name]: {
// 		// 			...prevState.form[name],
// 		// 			className: "form-control-valid"
// 		// 			}
// 		// 		}
// 		// 	}));
// 		// }
// 		// switch(prevValue.type){
// 		// 	case"email":
// 		// 		prevValue.value.indexOf("@") > 0 &&  prevValue.value.indexOf(".") > 0 ? validInput(): console.log("is not valided")
// 		// 	break
// 		// }

// 	};
	
// 	onChangeHandler = event => {
// 		event.target.type == "file" ? this.inputOnchange(event): console.log()
// 		const { value, name, className,form } = event.target;
// 		this.setState(prevState => ({
// 			...prevState,
// 			form: {
// 				...prevState.form,
// 				[name]: {
// 					...prevState.form[name],
// 					value,
// 					touch: true,
// 					valid: this.validator(prevState.form[name],name)
// 				}
// 			}
// 		}));
// 	};

	

// 	inputOnchange = event => {
// 			let selected = event.target.files [0]
// 		    if ( selected.type.split('/')[0] !== 'image' ) return
		    	
// 		        let fileReader = new FileReader ()
// 		        // fileReader.onload = (e) =>{
// 		        fileReader.readAsDataURL ( selected )
// 	            fileReader.onload =  event => {
// 	    	     	       	this.setState( prevState =>({
// 		     	       		...prevState,
// 		     	       			value64:event.target.result
// 		     	}))}
// 	}
// 	getAllValues = () => {
// 		let form = this.state.form
// 		let avatar = this.state.value64
// 		return Object.keys(form).reduce((prev, elem) => {
// 			return ({ ...prev, [elem]:form[elem].value,avatar:avatar});
// 		}, {});
// 	};
// 	clearForm = () =>{
//  		this.setState (prevState =>({
// 			...prevState, form:FORM_TEMPLATE
// 		}))
//  	}
//     submitEvents = e => {
//     	const{registration} = this.props;
// 		registration(this.getAllValues());
// 		// setTimeout(this.clearForm,5000)	
// 		// this.clearForm()
//  	};
 	
// 	render(){
// 		const {form} = this.state
// 		const {isFetching, user} = this.props
// 		console.log("user1",user)
// 		if (user) return <Redirect to="/" />;
// 		return (
// 			<div className="compWrap">
// 				<Template/>
// 				<div className="mainPart">
// 					<div className="leftPart">
// 						<Preview className="previewWrap" src ={this.state.value64} />
// 					</div>
// 					<div className="rightPart">
// 						<form >
// 							{Object.keys(form).map(el => (
// 									<section key={el}>
// 										<label  className={form[el].ClassName}>{form[el].title}</label>
// 										<input
// 											required={form[el].required}
// 										    className = {form[el].className}
// 											name={form[el].name}
// 											value={form[el].value}
// 											onChange={this.onChangeHandler}
// 											type={form[el].type}
// 											valid={form[el].valid}
// 											touch={form[el].touch}
// 										/>
// 									</section>									
// 							))}	
// 						<section>
// 							<label  className="controlLabel2">Add your photo</label>
// 							<input type= "file" onChange={e=>this.inputOnchange(e)} className="formControl"/>
// 						</section>
// 						</form>
						
// 						<button type="button" onClick = {e =>this.submitEvents(e)} className="button" >{ isFetching ? "Loading..." : "Register"}</button>
// 					</div>
// 				</div>		
// 			</div>
// 		);
// 	}
// }
// const mapStateToProps = state => {
// 	return {
// 		isFetching: state.Registration.isFetching,
// 		user: state.Registration.user
// 	};
// };

// export default connect(mapStateToProps,{registration}
// )(Registration);























// // if(this.props.required ==="true")
		
// 			// const e = this.state.event.className
// 			// console.log('event',e)
// 			// const className = "form-control-valid"

		
// 		        // this.setState( prevState=> ({...prevState, className:"form-control-valid" }));

// // changerEvent = ()=>{
// // 		const mail = {email: this.state.form.email.value}
// // 		let {changeEvent} = this.props
// // 		changeEvent(mail) 	
// // 	};


// // validator = (event)=>{
// 	// 	let form = this.state.form
// 	// 	let [type] = Object.keys(this.state.form)
// 	// 	console.log(event)
// 	// }








// 	// switch(prevValue.type){
// 		// 	case"number": 
// 		// 	    prevValue.oninput="validity.valid||(value='');"
// 		// 	    prevValue.value > 0 ? validInput(): inValidInput()
// 		// 	    prevValue.value.match(/^\d+/)
// 		// 	    prevValue.min = 0
// 		//     break
// 		// 	case"text":
// 		// 		prevValue.value.match(/[0-9a-zA-Z]/) ? validInput(): inValidInput()	
// 		// 	break
// 			// case"email":
// 				// prevValue.value.indexOf("@") > 0 &&  prevValue.value.indexOf(".") > 0 ? validInput(): inValidInput()
// 			// break
// 		// 	case"password":
// 		// 		prevValue.value.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/) ? validInput(): inValidInput()
// 		// 	break
// 			// case"file":
// 			// 	for ( var file of currentInputFiles ) {
// 			//         if ( file.type.split('/')[0] !== 'image' )
// 			//         	 document.write("Это не фото!!!!")
// 			//         }
// 			// break
// 		// }






// 	// 	// const valid = Object.keys(rules).reduce((prev, elem) => {
// 	// 	// 	if (prev) return true;
// 	// 	// 	const check =rules[elem].cb(value)
			
// 	// 	// 	//  prevValue[rules[elem].field]
// 	// 	// 	// if (!prev && check) return check;

// 	// 	// 	return false;
// 	// 	// }, false);
// 	// 	// console.log("valid",valid )

// 	// 	// return valid;




// 	// sendRequest = () => {
// 	// 	const values = Object.keys(this.state.form).reduce((prev, elem) => {
// 	// 		return { ...prev, [elem]: this.state.form[elem].value };
// 	// 	}, {});

// 	// 	this.props.submitEvent(values);
// 	// };




// // sendAxios = payload => {
// // 		const {registrationRequest} = this.state
// // 		return dispatch => {
// // 			console.log(payload)
// // 			dispatch(registrationRequest()); 
// // 			axios({
// // 				method: "GET",
// // 				url: "http://fea13-andrew.glitch.me/owner",
// // 				// data: payload
// // 			})
// // 				.then(res => console.log("It is ok"))
// // 				.catch(err => console.log("It is Fail"));
// // 		};
// // 	};










// 	// const values = this.getAllValues();


// 		// const auth = payload => {
// 		// 	// console.log("registrationSuccess",registrationSuccess)
// 		// 	return dispatch => {
// 		// 		dispatch(registrationRequest());

// 		// 		axios({
// 		// 			method: "POST",
// 		// 			url: "http://fea13-andrew.glitch.me/owner",
// 		// 			data: {
// 		// 		          name: this.state.form.name.value,
// 		// 		          email: this.state.form.email.value,
// 		// 		          passHash: this.state.form.password.value
// 		// 		        }
// 		// 		})
// 		// 			.then(res => dispatch(registrationSuccess(res)))
// 		// 			.catch(err => dispatch(registrationFail(err)));
// 		// 	};
// 		// axios ({
// 		// 	method:"POST",
// 		// 	url:"http://fea13-andrew.glitch.me/owner",
// 		// 	data: {
// 	 //          name: this.state.form.name.value,
// 	 //          email: this.state.form.email.value,
// 	 //          passHash: this.state.form.password.value
// 	 //        }
//   //     })
// 	 //        .then(res =>console.log(res))
// 		// 	.catch(err =>console.log(err))
//  		// };