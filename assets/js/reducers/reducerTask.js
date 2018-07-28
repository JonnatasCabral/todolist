import { FETCH_TASK } from '../actions/actionTask';



export default (state = {}, action) => {
  switch(action.type){
    case FETCH_TASK:
      return {
        ...state,
        task: action.payload.data
      };
    default:
    	return state
  }
  return state
}

