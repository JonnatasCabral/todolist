import { combineReducers } from "redux";
import user from './reducerAuthLogin';
import userDislogged from './reducerAuthLogout';
import todolists from './reducerTodoList.js';
import users from './reducerUsers.js';

const rootReducer = combineReducers({
	user: user,
	todolists: todolists,
	userDislogged: userDislogged,
	users: users

});

export default rootReducer;