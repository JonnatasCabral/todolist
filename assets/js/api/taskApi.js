import axios from "axios";

import getCookie from '../common/helpers';

const TASK_URL = '/api/v1/task/';

class TaskApi {
  static createTask (task) {
    return (dispatch) => {
      const csrf = getCookie('csrftoken');
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          'Accept': 'application/json',
          'Content-type': 'application/json',
          'X-CSRFToken': csrf,
          'authorization': `Token ${token}`
        },
      }
      axios.post(`${TASK_URL}`, task ,config)
        .then((data) => {
        })
        .catch((error) => {   
          console.log(error)
        });
    } 
  }
}
  
export default TaskApi;