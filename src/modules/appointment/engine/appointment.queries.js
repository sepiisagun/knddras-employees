import { API_ENDPOINTS } from "../../../constants/Endpoints";
import api, { defaultThen } from "../../../utils/api";

export const retrieveAppointments = (context) => {
	const { queryKey } = context;
	const [, params] = queryKey;

	return api
		.get(API_ENDPOINTS.APPOINTMENTS, {
			params,
		})
		.then(defaultThen);
};

export const retrieveAppointment = (context) => {
	const { queryKey } = context;
	const [, id] = queryKey;

	return api.get(`${API_ENDPOINTS.APPOINTMENTS}/${id}`).then(defaultThen);
};
