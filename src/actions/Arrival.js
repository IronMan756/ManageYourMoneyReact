import * as types from "../actionType";
import axios from "axios";
// import {newArrivalToThePocket} from "./Pockets"





const postNewArrivalRequest = () =>({
	type: types.POST_NEW_ARRIVAL_REQUEST
});
const postNewArrivalRequestSuccess = payload =>({
	type: types.POST_NEW_ARRIVAL_REQUEST_SUCCESS,
	payload

});
const postNewArrivalRequestFail = payload =>({
	type: types.POST_NEW_ARRIVAL_REQUEST_FAIL,
	payload
});

export const postNewArrival = payload =>{
	return dispatch =>{
		dispatch(postNewArrivalRequest());


		axios ({
			method:"POST",
			url:"https://fea13-andrew.glitch.me/entries",
			data: payload,
		})
			.then(res =>dispatch(postNewArrivalRequestSuccess(res.data),
						dispatch(newArrivalToThePocket(res.data))))
			.catch(err =>dispatch(postNewArrivalRequestFail(err)))
	}

}
const newArrivalToThePocket = payload =>({
	type: types.NEW_ARRIVAL_TO_THE_POCKET,
	payload	
});


