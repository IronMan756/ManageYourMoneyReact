import * as types from "../actionType";


const InitialState = {
	Entries:{
		sort : null,
		customerChoise : null,
		currency : null,
		id : null,
		selectedPocket:null,
		date:null,

	},
	isFetching: false,
}



export default ( state = InitialState, {type, payload})=>{
	switch(type){

		case types.GET_ENTRIES_FROM_SERVER_REQUEST:{
			return {...state, isFetching: true}
		}

		case types.GET_ENTRIES_FROM_SERVER_REQUEST_SUCCESS:{
			return {...state , Entries: payload, isFetching:false };
		}
		case types.GET_ENTRIES_FROM_SERVER_REQUEST_FAIL:{
			return {...state, Entries: null};
		}


		case types.POST_ENTRIES_FROM_SERVER_REQUEST:{
			return {...state, isFetching: true}
		}

		case types.POST_ENTRIES_FROM_SERVER_REQUEST_SUCCESS:{
			return {...state , Entries: payload, isFetching:false };
		}
		case types.POST_ENTRIES_FROM_SERVER_REQUEST_FAIL:{
			return {...state, Entries: null};
		}

		default:return state
	}}
