import axios from "axios";
import getCookie from '../common/helpers'
import { sucessLogin, sucessLogout} from '../actions/actionAuth';


export const login = (user) => {
  const LOGIN_URL = "/api/v1/rest-auth/login/";
  const csrf = getCookie('csrftoken')
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'X-CSRFToken': csrf
    },

  }
  return (dispatch) => {
    axios.post(`${LOGIN_URL}`, user, config)
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
  const csrf = getCookie('csrftoken')
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json',
      'X-CSRFToken': csrf
    },

  }
  return (dispatch) => {
    return axios.get(`${LOGOUT_URL}`, config)
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
    const csrf = getCookie('csrftoken');
    const config = {
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        'X-CSRFToken': csrf,
      },
    }
    axios.post(`${USER_URL}`, user ,config)
      .then((data) => {
      })
      .catch((error) => {   
        console.log(error)
      });
  } 
}