import axios from "axios";
import getCookie from '../common/helpers';
import { fetchTodoListsAction, addNewTodoList, deleteTodoList } from '../actions/actionTodoList';


const ROOT_URL = "/api/v1/todolists/";

class TodoListApi {
  
  static fetchTodoLists (user) {
    return (dispatch) => {
      const csrf = getCookie('csrftoken');
      const token = user.token
      const config = {
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'X-CSRFToken': csrf,
          'Authorization': `Token ${token}`
        },
      }
      axios.get(`${ROOT_URL}`, config)
        .then((data) => {
          dispatch(fetchTodoListsAction(data));
        })
        .catch((error) => {   
          console.log(error)
        });
    } 
  }

  static createTodoList(data) {
    return (dispatch) => {
      const csrf = getCookie('csrftoken');
      const token = localStorage.token
      const config = {
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'X-CSRFToken': csrf,
          'Authorization': `Token ${token}`
        },
      }
      axios.post(ROOT_URL, data, config)
        .then((data) =>{
          dispatch(addNewTodoList(data))
        }).catch((error) =>{
          console.log(error)
        });
    }
  }

  static delete(data) {
    return (dispatch) => {
      const csrf = getCookie('csrftoken');
      const token = localStorage.token
      const config = {
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'X-CSRFToken': csrf,
          'Authorization': `Token ${token}`
        },
      }
      
      axios.delete(`${ROOT_URL}${data.id}/`, config)
        .then(() =>{
          dispatch(deleteTodoList(data))
        }).catch((error) =>{
          console.log(error)
        });
    }
  }
}
export default TodoListApi;