import axios from "axios";
import getCookie from '../common/helpers'

export const SET_TOKEN = "set_token";

const ROOT_URL = "http://localhost:8000/api/v1/rest-auth/login/";

const login = (values) => {
  const csrf = getCookie('csrftoken')
  const headers = {
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'X-CSRFToken': csrf
    },

  }
  return (dispatch) => {
  	axios.post(`${ROOT_URL}`, values, headers)
  	  .then((data) => {
  	  	dispatch(setToken(data.data.key));
  	  })
  	  .catch((error) => {  	
  	  	console.log(error)
  	  });
  } 
}

const setToken = (token) => ({
  type: SET_TOKEN,
  token
});

export default login;