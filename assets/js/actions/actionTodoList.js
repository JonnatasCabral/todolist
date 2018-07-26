export const FETCH_TODOLISTS = "fetch_todolists";

const fetchTodoListsAction = (data) => ({
  type: FETCH_TODOLISTS,
  payload: data
});

export default fetchTodoListsAction;