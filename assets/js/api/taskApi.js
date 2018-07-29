import axios from "axios";

import getCookie from '../common/helpers';
import { fetchUsersAction, fetchTaskAction } from '../actions/actionTask';
import { createTaskAction, updateTaskAction, deleteTaskAction } from '../actions/actionTask';

const TASK_URL = '/api/v1/task';

class TaskApi {

  static fetchUsers () {
    return (dispatch) => {
      const USER_URL = '/api/v1/users/list/';
      const csrf = getCookie('csrftoken');
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'X-CSRFToken': csrf,
          'authorization': `Token ${token}`
        },
      }
      axios.get(`${USER_URL}`, config)
        .then((data) => {
          dispatch(fetchUsersAction(data));
        })
        .catch((error) => {   
          console.log(error)
        });
    } 
  }
  static fetchTask (id) {
    return (dispatch) => {
      const csrf = getCookie('csrftoken');
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'X-CSRFToken': csrf,
          'authorization': `Token ${token}`
        },
      }
      axios.get(`${TASK_URL}/${id}/`, config)
        .then((data) => {
          dispatch(fetchTaskAction(data));
        })
        .catch((error) => {   
          console.log(error)
        });
    } 
  }

  static createTask (task) {
    return (dispatch) => {
      const csrf = getCookie('csrftoken');
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'X-CSRFToken': csrf,
          'authorization': `Token ${token}`
        },
      }
      axios.post(`${TASK_URL}/`, task ,config)
        .then(() => {
          dispatch(createTaskAction(task));
        })
        .catch((error) => {   
          console.log(error)
        });
    } 
  }
  static updateTask (task) {
    return (dispatch) => {
      const csrf = getCookie('csrftoken');
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'X-CSRFToken': csrf,
          'authorization': `Token ${token}`
        },
      }
      axios.put(`${TASK_URL}/${task.id}/`, task ,config)
        .then(() => {
          dispatch(updateTaskAction(task));
        })
        .catch((error) => {   
          console.log(error)
        });
    } 
  }
  static deleteTask(data) {
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
      
      axios.delete(`${TASK_URL}/${data.task.id}/`, config)
        .then(() =>{
          dispatch(deleteTaskAction(data))
        }).catch((error) =>{
          console.log(error)
        });
    }
  }
}
  
export default TaskApi;