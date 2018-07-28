import _ from "lodash";
import { FETCH_TODOLISTS, NEW_TODOLISTS, DELETE_TODOLIST } from '../actions/actionTodoList';
import { CREATED_TASK, UPDATED_TASK, DELETE_TASK } from '../actions/actionTask';



const defaultState = {}; 

// TODO ATUALIZAR, E REMOVER TASK do state de todolist

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
    case CREATED_TASK:
      return {
        task: action.payload.data
      }
    case UPDATED_TASK:
      return {
        ...state,
        task: action.payload.data
      }
    case DELETE_TASK:
      return _.omit(state, [action.payload.id])
    default:
      return state
  }
  return state
}

