import * as types from "../actionType";
import axios from "axios";
// import {newArrivalToThePocket} from "./Pockets"





const newExpenseFromThePocketRequest = () =>({
	type: types.NEW_EXPENSE_FROM_THE_POCKET_REQUEST
});
const newExpenseFromThePocketRequestSuccess = payload =>({
	type: types.NEW_EXPENSE_FROM_THE_POCKET_REQUEST_SUCCESS,
	payload

});
const newExpenseFromThePocketRequestFail = payload =>({
	type: types.NEW_EXPENSE_FROM_THE_POCKET_REQUEST_FAIL,
	payload
});

export const newExpense = payload =>{
	return dispatch =>{
		dispatch(newExpenseFromThePocketRequest());
		axios ({
			method:"POST",
			url:"https://fea13-andrew.glitch.me/entries",
			data: payload,
		})
			.then(res =>dispatch(newExpenseFromThePocketRequestSuccess(res.data),
						dispatch(newExpenseInPocket(res.data)), console.log("EXpense", res.data)))
			.catch(err =>dispatch(newExpenseFromThePocketRequestFail(err)))
	}

}
const newExpenseInPocket = payload =>({
	type: types.NEW_EXPENSE_FROM_THE_POCKET,
	payload	
});