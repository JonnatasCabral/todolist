import SET_TOKEN from '../actions/login';

const defaultState = {
  username: '',
  token: ''
}; 


export default (state = defaultState, action) => {
  switch(action.type){
    case SET_TOKEN:
      return {
      	...state,
      	token: action.token
      }
    default:
    	return state
  }
  return state
}

