export const CREATED_TASK = "created_task";
export const UPDATED_TASK = "created_task";
export const DELETE_TASK = "delete_task";
export const FETCH_USERS = "fetch_users";
export const FETCH_TASK = "fetch_task";

export const createTaskAction = (data) => ({
  type: CREATED_TASK,
  payload: data
});
export const updateTaskAction = (data) => ({
  type: UPDATED_TASK,
  payload: data
});

export const fetchUsersAction = (data) => ({
  type: FETCH_USERS,
  payload: data
});

export const fetchTaskAction = (data) => ({
  type: FETCH_TASK,
  payload: data
});

export const deleteTaskAction = (data) => ({
  type: DELETE_TASK,
  payload: data
});
