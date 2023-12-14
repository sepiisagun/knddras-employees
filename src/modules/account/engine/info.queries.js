import { API_ENDPOINTS } from "../../../constants/Endpoints";
import api, { defaultThen } from "../../../utils/api";

export const retrieveRecords = (context) => {
	const { queryKey } = context;
	const [, params] = queryKey;

	return api
		.get(API_ENDPOINTS.RECORDS, {
			params,
		})
		.then(defaultThen);
};

export const retrieveRecord = (context) => {
	const { queryKey } = context;
	const [, { id }] = queryKey;

	return api.get(`${API_ENDPOINTS.RECORDS}/${id}`).then(defaultThen);
};
