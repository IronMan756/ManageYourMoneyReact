import *  as types from "../actionType";


const InitialState = {
	pockets: null,
	isFetching:false
}



export default ( state = InitialState, {type, payload})=>{
	switch(type){
		case types.ADD_POCKET_TO_STORE:{
			return state
		}
		case types.GET_POCKETS_FROM_SERVER_REQUEST: {
			return state
		}
		case types.GET_POCKETS_FROM_SERVER_REQUEST_SUCCESS: {
			return {...state,  pockets: payload  };
		}
		case types.GET_POCKETS_FROM_SERVER_REQUEST_FAIL: {
			return {...state  };
		}
		case types.POST_POCKET_TO_SERVER_REQUEST: {
			return {...state,  pockets: payload ,isFetching:true };
		}
		case types.POST_POCKET_TO_SERVER_REQUEST_SUCCESS: {
			return {...state,  pockets: payload ,isFetching:false };
		}
		case types.POST_POCKET_TO_SERVER_REQUEST_FAIL: {
			return {...state  };
		}



		case types.NEW_ARRIVAL_TO_THE_POCKET: {
			console.log('action', payload)

			const selectedPocket = (payload.selectedPocket) - 1 
			const res = (state.pockets[selectedPocket].cashGRN) + (payload.currency)		
			return {
				...state,
				pockets: [...state.pockets, state.pockets[selectedPocket].cashGRN = res]
			};
		}
		case types.NEW_EXPENSE_FROM_THE_POCKET: {
			const selectedPocket = (payload.selectedPocket) - 1 
			const res = (state.pockets[selectedPocket].cashGRN) - (payload.currency)		
			return {
				...state,
				pockets: [...state.pockets, state.pockets[selectedPocket].cashGRN = res]
			};
		}



		default:return state
	}
}
