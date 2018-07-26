import axios from "axios";
import getCookie from '../common/helpers';
import fetchTodoListsAction from '../actions/actionTodoList';


const ROOT_URL = "/api/v1/todolists/";

const fetchTodoLists = (user) => {
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
        dispatch(fetchTodoListsAction(data));
      })
      .catch((error) => {   
        console.log(error)
      });
  } 
}

export default fetchTodoLists;