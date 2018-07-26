import { SET_TOKEN } from '../actions/actionLogin';

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
    case SET_TOKEN:
      localStorage.setItem("token", action.data.data.key);
      return userInfo(action, true);
    default:
    	return state
  }
  return state
}

