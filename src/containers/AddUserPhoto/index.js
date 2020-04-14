import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import Template from "../../components/ComponentTemplate/ComponentTemplate.js";
import "../../components/Button/Button.css";
import Preview from "../../components/Preview/Preview.js";
import  "./style.css";
import "../../components/Button/Button.css";
import {AddUserPhotoRequest,addUserPhotoRESET} from "../../actions/Registration";


class AddUserPhoto extends Component{

	state = {
		value64:"http://scma.com.ua/wp-content/uploads/2015/02/user.png",
		err:null
	}
componentWillUnmount(){
	const{addUserPhotoRESET} = this.props
	addUserPhotoRESET()
}
 inputOnchange = event => {
 	this.setState( prevState =>({ ...prevState, err:null}))
		let selected = event.target.files [0]
	    if (selected.type.split('/')[0] === 'image'){
	    	if(selected.size <= 140000){
	    	let fileReader = new FileReader ()
	        fileReader.readAsDataURL ( selected )
            fileReader.onload =  event => {
    	     	       	this.setState( prevState =>({
	     	       		...prevState,
	     	       			value64:event.target.result
	     	}))}}
    	    else {this.setState( prevState =>({ ...prevState, err:"Большеше 140kB"}))}
	}
	else {this.setState( prevState =>({ ...prevState, err:"Не img"}))}
}
AddUserPhoto = () =>{
	let photo = {"avatar":this.state.value64}
	localStorage.setItem("avatar",JSON.stringify ( photo ))
	const{AddUserPhotoRequest} = this.props
	AddUserPhotoRequest(photo)
}

render(){
		const {user,closePhotoComp, isFetching,addUserPhotoRequest} = this.props
		if(closePhotoComp){
		return	<Redirect to="/"/>
		} 
		return(
				<div className="compWrap">
					<Template title="User photo "/>
					<div className="mainWrap">
						<Preview src={this.state.value64}/>
						<div className="inputFile">
				            <label className="controlLabel2"  >Choose a photo</label>
				            <input type="file" onChange={ e => this.inputOnchange(e)} className="formControl" />
				        </div>
				        {this.state.err && <p>{this.state.err}</p>}
						<button onClick={()=>this.AddUserPhoto()}className="button">{isFetching? "Loading...": "Add Photo"}</button>
					</div>
				</div>
		)
	}	
}
const mapStateToProps = state =>{
		return {
			user: state.Registration.user,
			closePhotoComp: state.Registration.closePhotoComp,
			isFetching: state.Registration.isFetching
		}
	}
export default connect(mapStateToProps,{AddUserPhotoRequest,addUserPhotoRESET})(AddUserPhoto)