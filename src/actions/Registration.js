import * as types from "../actionType";
import axios from "axios";
import history from '../history';
import {getPocketsFromServer } from "./Pockets";
// 	const urlRequest = "https://fea13-andrew.glitch.me/owne"







export const authToStore = payload =>({
	type: types.AUTH_USER,
	payload
});
export const logOut = payload =>({
	type: types.LOG_OUT,
});
export const authTAutoLogIn = payload =>({
	type:types.AUTO_LOG_IN,
	payload
})




 const authGetRequest = () =>({
	type: types.AUTH_GET_REQUEST
});
 const authGetSuccess = payload =>({
	type: types.AUTH_GET_REQUEST_SUCCESS,
	payload

});
 const authGetFail = payload =>({
	type: types.AUTH_GET_REQUEST_FAIL,
	payload
});




 const registrationRequest = () =>({
	type: types.REGISTRATION_REQUEST
});
 const registrationSuccess = payload =>({
	type: types.REGISTRATION_REQUEST_SUCCESS,
	payload

});
 const registrationFail = payload =>({
	type: types.REGISTRATION_REQUEST_FAIL,
	payload
});


export const registration = payload =>{
	return dispatch => {
		dispatch(registrationRequest());
		axios ({
			method:"POST",
			url:"http://fea13-andrew.glitch.me/owner",
			data: payload,
		})
			.then(res => dispatch(
				registrationSuccess(res.data),console.log("registration",res.data),
				localStorage.setItem("user",res.data),
				document.cookie = `userName = ${res.data.name}`,
				document.cookie =`userEmail = ${res.data.email}`,
				))
			.catch(err =>dispatch(registrationFail(err)))
	}
 } 



export const authGetUser = payload =>{
	return dispatch => {
		dispatch(authGetRequest());
		axios("http://fea13-andrew.glitch.me/owner")
			.then(res => dispatch(authGetSuccess(res.data)))						
			.catch(err => dispatch(authGetFail(err)))
	}
 } 



const addUserPhotoRequest = () =>({
	type: types.ADD_USER_PHOTO_REQUEST
});
export const addUserPhotoRESET = () =>({
	type: types.ADD_USER_PHOTO_RESET
});


 const addUserPhotoSuccess = payload =>({
	type: types.ADD_USER_PHOTO_REQUEST_SUCCESS,
	payload

});
 const addUserPhotoFail = payload =>({
	type: types.ADD_USER_PHOTO_REQUEST_FAIL,
	payload
});

 export const AddUserPhotoRequest = payload =>{
 	console.log(payload)
 	return dispatch =>{
 		dispatch(addUserPhotoRequest());
 		axios ({
			method:"PATCH",
			url:"http://fea13-andrew.glitch.me/owner",
			data: payload,
		})
			.then(res=>dispatch(addUserPhotoSuccess(res.data),
				localStorage.setItem("user",res.data)))
			.catch(err=>dispatch(addUserPhotoFail(err)))
 	}
 	// const post = await axios.patch("http://fea13-andrew.glitch.me/owner", payload)
 }