import axios from "axios";
import getCookie from '../common/helpers'


const ROOT_URL = "http://localhost:8000/api/v1/todolists";

const fetchToDoLists = (values) => {
  debugger
  
  return (dispatch, getState) => {
    const csrf = getCookie('csrftoken');
    debugger
    const token = getState()
    const headers = {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'X-CSRFToken': csrf,
        'authorization': `Token ${token}`
      },
    }
    axios.get(`${ROOT_URL}`, values, headers)
      .then((data) => {
        dispatch(setToken(data.data.key));
      })
      .catch((error) => {   
        console.log(error)
      });
  } 
}
export default fetchToDoLists;