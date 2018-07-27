import { SUCCESS_LOGIN } from '../actions/actionAuth';

const defaultState = {
  isAuthenticated: false,
  token: localStorage.getItem("token"),
}; 


export default (state = defaultState, action) => {
  switch(action.type){
    case SUCCESS_LOGIN:
      localStorage.setItem("token", action.data.data.key);
      return {
          token: action.data.data.key,
          isAuthenticated: true,
      };
    default:
    	return state
  }
  return state
}

