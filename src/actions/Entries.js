import * as types from "../actionType";
import axios from "axios";





const getEntriesFromServerRequest = () =>({
	type: types.GET_ENTRIES_FROM_SERVER_REQUEST
});
const getEntriesFromServerRequestSuccess = payload =>({
	type: types.GET_ENTRIES_FROM_SERVER_REQUEST_SUCCESS,
	payload

});
const getEntriesFromServerRequestFail = payload =>({
	type: types.GET_ENTRIES_FROM_SERVER_REQUEST_FAIL,
	payload
});

export const newExpense = payload =>{
	return dispatch =>{
		dispatch(getEntriesFromServerRequest());

		axios("https://fea13-andrew.glitch.me/entries")
			.then(res =>dispatch(getEntriesFromServerRequestSuccess(res.data)))
			.catch(err =>dispatch(getEntriesFromServerRequestFail(err)))
	}

}
