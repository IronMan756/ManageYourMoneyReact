import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'
 


import Registration  from "./Registration";
import Pockets  from "./Pockets";
import Entries from "./Entries"

export default combineReducers({
	Registration,
	Pockets,
	form: formReducer,
	Entries
})