export const CREATED_TASK = "created_task";
export const FETCH_USERS = "fetch_users";
export const FETCH_TASK = "fetch_task";

export const createdTask = (data) => ({
  type: CREATED_TASK,
  data
});

export const fetchUsersAction = (data) => ({
  type: FETCH_USERS,
  payload: data
});

export const fetchTaskAction = (data) => ({
  type: FETCH_TASK,
  payload: data
});

