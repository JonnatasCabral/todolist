import axios from "axios";
import getCookie from '../common/helpers';
import fetchTodoLists from '../actions/actionTodoList';


const ROOT_URL = "/api/v1/todolists/";

const fetchToDoLists = (user) => {
  return (dispatch) => {
    const csrf = getCookie('csrftoken');
    const token = user.token
    const headers = {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'X-CSRFToken': csrf,
        'authorization': `Token ${token}`
      },
    }
    axios.get(`${ROOT_URL}`, headers)
      .then((data) => {
        dispatch(fetchTodoLists(data));
      })
      .catch((error) => {   
        console.log(error)
      });
  } 
}

const loadTodos = (token) => {
  return (dispatch) => {
    return todoApi.getAllTodos(token).then(todos => {
      dispatch(loadTodoSuccess(todos));
    });
  }
};
export default fetchToDoLists;