import { createSlice } from "@reduxjs/toolkit";
import { get } from "lodash";

export const authSlice = createSlice({
	initialState: {
		isLoggedIn: false,
		jwt: null,
		user: {},
	},
	name: "auth",
	reducers: {
		LOGIN_SUCCESS: (state, action) => {
			return {
				...state,
				isLoggedIn: true,
				jwt: get(action, "data.jwt"),
			};
		},
		LOGOUT_SUCCESS: () => {
			return {
				isLoggedIn: false,
				jwt: null,
				user: {},
			};
		},
		RETRIEVE_USER_DETAILS_SUCCESS: (state, action) => {
			return {
				...state,
				user: get(action, "data", {}),
			};
		},
	},
});

export const { LOGIN_SUCCESS, LOGOUT_SUCCESS, RETRIEVE_USER_DETAILS_SUCCESS } =
	authSlice.actions;

export default authSlice.reducer;
