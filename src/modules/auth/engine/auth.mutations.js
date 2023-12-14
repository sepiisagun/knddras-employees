import { API_ENDPOINTS } from "../../../constants/Endpoints";
import api from "../../../utils/api";

const mapUserPayload = ({ ...user }) => {
	const { file, ...rest } = user;
	const data = {
		...rest,
		username: user.email,
	};

	if (!file) {
		return data;
	}

	const formData = new FormData();

	formData.append("data", JSON.stringify(data));

	return formData;
};

export const register = (user) => {
	return api
		.post(`${API_ENDPOINTS.AUTH}/local/register`, mapUserPayload(user))
		.then(({ data }) => data);
};

export const sendEmailConfirmation = ({ email }) => {
	return api
		.post(`${API_ENDPOINTS.AUTH}/send-email-confirmation`, {
			email,
		})
		.then(({ data }) => data);
};

export const forgotPassword = ({ email }) => {
	return api
		.post(`${API_ENDPOINTS.AUTH}/forgot-password`, {
			email,
		})
		.then(({ data }) => data);
};

export const resetPassword = ({ code, password, passwordConfirmation }) => {
	return api
		.post(`${API_ENDPOINTS.AUTH}/reset-password`, {
			code,
			password,
			passwordConfirmation,
		})
		.then(({ data }) => data);
};

export const login = (user) => {
	return api
		.post(`${API_ENDPOINTS.AUTH}/local`, user)
		.then(({ data }) => data);
};

export const createUser = (context) => {
	const { data: userData } = context;

	return api
		.post(`${API_ENDPOINTS.ACCOUNTS}/create`, mapUserPayload(userData))
		.then(({ data }) => data);
};

export const updateUser = (context) => {
	const { data: userData, id } = context;

	return api
		.put(`${API_ENDPOINTS.ACCOUNTS}/update/${id}`, mapUserPayload(userData))
		.then(({ data }) => data);
};

export const changePassword = (payload) => {
	return api
		.post(`${API_ENDPOINTS.AUTH}/change-password`, payload)
		.then(({ data }) => data);
};
