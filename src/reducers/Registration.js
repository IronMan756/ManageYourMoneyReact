import * as types from "../actionType"

const initialState = {
	user: null,
	authUserObj: null,
	isFetching: false,
	closePhotoComp: false,
};





export default (state = initialState, {type, payload}) =>{
	switch(type){
		case types.REGISTRATION_REQUEST : {
			return{ ...state, isFetching: true};

		}
		case types.REGISTRATION_REQUEST_SUCCESS : {
			return{ ...state, isFetching: false, user: payload};

		}
		case types.ADD_USER_PHOTO_REQUEST : {
			return{ ...state, isFetching: true, closePhotoComp: false};

		}
		case types.ADD_USER_PHOTO_RESET : {
			return{ ...state, closePhotoComp: false};

		}
		case types.ADD_USER_PHOTO_REQUEST_SUCCESS : {
			return{ ...state, closePhotoComp: true,isFetching: false,user: payload};

		}

		case types.REGISTRATION_REQUEST_FAIL : {
			return{ ...state, isFetching: false};
		}


		case types.AUTH_GET_REQUEST : {
			return{ ...state, isFetching: true};

		}
		case types.AUTH_GET_REQUEST_SUCCESS : {
			return{ ...state, isFetching: false, authUserObj: payload};

		}
		case types.AUTH_GET_REQUEST_FAIL : {
			return{ ...state, isFetching: false};
		}

		case types.AUTH_USER:{
			return{...state, user: payload };
		}
		case types.LOG_OUT:{
			return{...state, user: null };
		}

		case types.AUTO_LOG_IN:{
			return{...state, user: payload };
		}

		default:{
			return state;
		}
	}
}