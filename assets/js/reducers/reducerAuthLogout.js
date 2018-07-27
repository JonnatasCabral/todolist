import { SUCCESS_LOGOUT } from '../actions/actionAuth';


const defaultState = {
  isAuthenticated: true,
  token: localStorage.getItem("token"),
}; 

export default (state, action) => {
  switch(action.type){
    case SUCCESS_LOGOUT:
      localStorage.removeItem("token", '');
      return {
        isAuthenticated: false,
        token: '',
      };
  }
  return defaultState
}

