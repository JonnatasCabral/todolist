import { combineReducers } from "redux";
import user from './reducerAuthLogin';

const rootReducer = combineReducers({
	user: user
});

export default rootReducer;