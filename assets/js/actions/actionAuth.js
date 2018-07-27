export const SUCCESS_LOGIN = "success_login";
export const SUCCESS_LOGOUT = "success_logout";

export const sucessLogin = (data) => ({
  type: SUCCESS_LOGIN,
  data
});


export const sucessLogout = (data) => ({
	type: SUCCESS_LOGOUT,
	data
});