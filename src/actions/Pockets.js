import * as types from "../actionType";
import axios from "axios";




const getPocketsFromServerRequest = () =>({
	type: types.GET_POCKETS_FROM_SERVER_REQUEST
});
const getPocketsFromServerRequestSuccess = payload =>({
	type: types.GET_POCKETS_FROM_SERVER_REQUEST_SUCCESS,
	payload

});
const getPocketsFromServerRequestFail = payload =>({
	type: types.GET_POCKETS_FROM_SERVER_REQUEST_FAIL,
	payload
});

export const getPocketsFromServer = payload =>{
	return dispatch =>{
		dispatch(getPocketsFromServerRequest());
		axios("https://fea13-andrew.glitch.me/pockets")
			.then(res =>dispatch(getPocketsFromServerRequestSuccess(res.data),console.log("Pockets",res.data)))
			.catch(err =>dispatch(getPocketsFromServerRequestFail(err)))
	}

}


const postNewPocketToServerRequest = () =>({
	type: types.POST_POCKET_TO_SERVER_REQUEST
});
const postNewPocketToServerRequestSuccess = payload =>({
	type: types.POST_POCKET_TO_SERVER_REQUEST_SUCCESS,
	payload

});
const postNewPocketToServerRequestFail = payload =>({
	type: types.POST_POCKET_TO_SERVER_REQUEST_FAIL,
	payload
});

export const postNewPocket = payload =>{
		return dispatch =>{
		dispatch(postNewPocketToServerRequest());
		axios ({
			method:"POST",
			url:"https://fea13-andrew.glitch.me/pockets",
			data: payload,
		})
		.then(res =>dispatch(postNewPocketToServerRequestSuccess(res.data)))
		.catch(err =>dispatch(console.log("ответ феил ",err)))
	}

}










