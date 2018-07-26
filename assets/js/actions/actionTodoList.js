export const FETCH_TODOLISTS = "fetch_todolists";

const fetchTodoLists = (data) => ({
  type: FETCH_TODOLISTS,
  payload: data
});

export default fetchTodoLists;