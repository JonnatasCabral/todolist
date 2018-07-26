import { combineReducers } from "redux";
import user from './reducerAuthLogin';
import todolists from './reducerTodoList.js';

const rootReducer = combineReducers({
	user: user,
	todolists: todolists
});

export default rootReducer;