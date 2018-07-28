export const CREATED_TASK = "created_task";
export const FETCH_USERS = "fetch_task";

export const createdTask = (data) => ({
  type: CREATED_TASK,
  data
});

export const fetchUsersAction = (data) => ({
  type: FETCH_USERS,
  payload: data
});

