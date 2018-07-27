import _ from "lodash";
import { FETCH_TODOLISTS, NEW_TODOLISTS } from '../actions/actionTodoList';


const defaultState = {}; 

export default (state = defaultState, action) => {
  switch(action.type){
    case FETCH_TODOLISTS:
      return _.mapKeys(action.payload.data.results, "id");
    case NEW_TODOLISTS:
      debugger
    	return {
    		...state,
    		[action.payload.id] : { ...action.payload.data }
    	} 

  }
  return state
}

