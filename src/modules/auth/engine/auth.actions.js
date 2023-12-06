import { detachToken } from "../../../utils/api";

import {
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS,
	RETRIEVE_USER_DETAILS_SUCCESS,
} from "../../../../store/reducer";

export const login = (data) => {
	return {
		data,
		type: LOGIN_SUCCESS,
	};
};

export const logout = () => {
	detachToken();

	return {
		type: LOGOUT_SUCCESS,
	};
};

export const setUserDetails = (data) => {
	return {
		data,
		type: RETRIEVE_USER_DETAILS_SUCCESS,
	};
};
