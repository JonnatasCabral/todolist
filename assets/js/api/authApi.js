import axios from "axios";
import { sucessLogin, sucessLogout} from '../actions/actionAuth';


axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";


export const login = (user) => {
  const LOGIN_URL = "/api/v1/rest-auth/login/";
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
    },

  }
  return (dispatch) => {
    axios.post(`${LOGIN_URL}`, user)
      .then((data) => {
        dispatch(sucessLogin(data));
      })
      .catch((error) => {   
        console.log(error)
      });
  } 
}

export const logout = () => {
  const LOGOUT_URL = "/api/v1/rest-auth/logout/";
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
    },

  }
  return (dispatch) => {
    return axios.get(`${LOGOUT_URL}`)
      .then((data) => {
        dispatch(sucessLogout(data));
      })
      .catch((error) => {   
        console.log(error)
      });
  } 
}

export const createUser = (user) => {
  return (dispatch) => {
    const USER_URL = "/api/v1/users/register/";
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
    }
    axios.post(`${USER_URL}`, user)
      .then((data) => {
      })
      .catch((error) => {   
        console.log(error)
      });
  } 
}