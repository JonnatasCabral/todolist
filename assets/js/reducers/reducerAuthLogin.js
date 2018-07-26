import { SET_TOKEN } from '../actions/actionLogin';

const defaultState = {
  isAuthenticated: '',
  token: '',
  status: ''
}; 

const userInfo = (action, authenticated) => {
  return {
    token: action.data.data.token,
    isAuthenticated: authenticated,
    status: action.data.status,
  };
}

export default (state = defaultState, action) => {
  switch(action.type){
    case SET_TOKEN:
      return userInfo(action, true);
    default:
    	return state
  }
  return state
}

