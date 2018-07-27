import { SUCCESS_LOGOUT } from '../actions/actionAuth';

const delogedState = {
  isAuthenticated: false,
  token: '',
  status: ''
}; 

export default (state, action) => {
  debugger
  switch(action.type){
    case SUCCESS_LOGOUT:
      return delogedState;
    default:
    	return state
  }
  return state
}

