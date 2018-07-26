import _ from "lodash";
import { FETCH_TODOLISTS } from '../actions/actionTodoList';


const defaultState = {}; 

export default (state = defaultState, action) => {
  switch(action.type){
    case FETCH_TODOLISTS:
      return _.mapKeys(action.payload.data.results, "id");
  }
  return state
}

