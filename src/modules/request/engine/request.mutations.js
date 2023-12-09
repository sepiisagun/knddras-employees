import { API_ENDPOINTS } from "../../../constants/Endpoints";
import api, { defaultThen } from "../../../utils/api";

export const createRequest = (context) => {
	const { data } = context;

	return api.post(API_ENDPOINTS.REQUESTS, { data }).then(defaultThen);
};

export const updateRequest = (context) => {
	const { data, id } = context;

	return api
		.put(`${API_ENDPOINTS.REQUESTS}/${id}`, {
			data,
		})
		.then(defaultThen);
};
