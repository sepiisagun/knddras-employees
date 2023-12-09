import { API_ENDPOINTS } from "../../constants/Endpoints";
import api, { defaultThen } from "../api";

export const retrieveProcedures = (context) => {
	const { queryKey } = context;
	const [, params] = queryKey;

	return api
		.get(API_ENDPOINTS.PROCEDURES, {
			params,
		})
		.then(defaultThen);
};

export const retrieveAppointment = (context) => {
	const { queryKey } = context;
	const [, id] = queryKey;

	return api.get(`${API_ENDPOINTS.PROCEDURES}/${id}`).then(defaultThen);
};
