import _ from "lodash";
import { FETCH_TODOLISTS, NEW_TODOLISTS, DELETE_TODOLIST } from '../actions/actionTodoList';


const defaultState = {}; 

export default (state = defaultState, action) => {
  switch(action.type){
    case FETCH_TODOLISTS:
      return _.mapKeys(action.payload.data.results, "id");
    case NEW_TODOLISTS:
    	return {
    		...state,
    		[action.payload.data.id] : { ...action.payload.data }
    	} 
    case DELETE_TODOLIST:
      return _.omit(state, [action.payload.id])
  }
  return state
}

