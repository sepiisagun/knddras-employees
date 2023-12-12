import { API_ENDPOINTS } from "../../../constants/Endpoints";
import api, { defaultThen } from "../../../utils/api";

export const retrieveTransactions = (context) => {
	const { queryKey } = context;
	const [, params] = queryKey;

	return api
		.get(API_ENDPOINTS.TREATMENTS, {
			params,
		})
		.then(defaultThen);
};

export const retrieveTransaction = (context) => {
	const { queryKey } = context;
	const [, id] = queryKey;

	return api.get(`${API_ENDPOINTS.TREATMENTS}/${id}`).then(defaultThen);
};
