import { API_ENDPOINTS } from "../../../constants/Endpoints";
import api, { defaultThen } from "../../../utils/api";

export const updateRequest = (context) => {
	const { data, id } = context;

	return api
		.put(`${API_ENDPOINTS.REQUESTS}/${id}`, {
			data,
		})
		.then(defaultThen);
};

export const createAppointment = (context) => {
	const { data } = context;

	return api
		.put(API_ENDPOINTS.MEDICAL, {
			data,
		})
		.then(defaultThen);
};

export const acceptRequest = (context) => {
	const { data, id } = context;

	return api
		.put(`${API_ENDPOINTS.REQUESTS}/${id}/accept`, {
			data,
		})
		.then(defaultThen);
};

export const rejectRequest = (context) => {
	const { data, id } = context;

	return api
		.put(`${API_ENDPOINTS.REQUESTS}/${id}/reject`, {
			data,
		})
		.then(defaultThen);
};
