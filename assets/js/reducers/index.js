import { combineReducers } from "redux";
import user from './reducerAuthLogin';
import userDislogged from './reducerAuthLogout';
import todolists from './reducerTodoList.js';

const rootReducer = combineReducers({
	user: user,
	todolists: todolists,
	userDislogged: userDislogged

});

export default rootReducer;