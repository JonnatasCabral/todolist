import axios from "axios";
import getCookie from '../common/helpers'
import setToken from '../actions/actionLogin';

const ROOT_URL = "http://localhost:8000/api/v1/rest-auth/login/";

const login = (userData, callback) => {
  const csrf = getCookie('csrftoken')
  const headers = {
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'X-CSRFToken': csrf
    },

  }
  return (dispatch) => {
    axios.post(`${ROOT_URL}`, userData, headers)
      .then((data) => {
        dispatch(setToken(data));
      })
      .catch((error) => {   
        console.log(error)
      });
  } 
}

export default login;