import { FETCH_USERS } from '../actions/actionTask';


export default (state = {}, action) => {
  switch(action.type){
    case FETCH_USERS:
      return {
        ...state,
          users: action.payload.data.results,
      };
    default:
    	return state
  }
  return state
}

