import { API_ENDPOINTS } from "../../../constants/Endpoints";
import api, { defaultThen } from "../../../utils/api";

export const retrieveRequests = (context) => {
	const { queryKey } = context;
	const [, params] = queryKey;

	return api
		.get(API_ENDPOINTS.REQUESTS, {
			params,
		})
		.then(defaultThen);
};

export const retrieveRequest = (context) => {
	const { queryKey } = context;
	const [, id] = queryKey;

	return api.get(`${API_ENDPOINTS.REQUESTS}/${id}`).then(defaultThen);
};
