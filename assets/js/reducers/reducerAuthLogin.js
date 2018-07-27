import { SUCCESS_LOGIN } from '../actions/actionAuth';

const defaultState = {
  isAuthenticated: '',
  token: localStorage.getItem("token"),
  status: ''
}; 

const userInfo = (action, authenticated) => {
  return {
    token: action.data.data.key,
    isAuthenticated: authenticated,
    status: action.data.status,
  };
}

export default (state = defaultState, action) => {
  switch(action.type){
    case SUCCESS_LOGIN:
      localStorage.setItem("token", action.data.data.key);
      return userInfo(action, true);
    default:
    	return state
  }
  return state
}

