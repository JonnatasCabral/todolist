export const FETCH_TODOLISTS = "fetch_todolists";
export const NEW_TODOLISTS = "new_todolists";

export const fetchTodoListsAction = (data) => ({
  type: FETCH_TODOLISTS,
  payload: data
});


export const addNewTodoList = (data) => ({
	type: NEW_TODOLISTS,
	payload: data

})