import { combineReducers } from "redux";
import user from './authLogin';

const rootReducer = combineReducers({
	user: user
});

export default rootReducer;