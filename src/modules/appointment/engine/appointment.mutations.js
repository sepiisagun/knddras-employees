import { API_ENDPOINTS } from "../../../constants/Endpoints";
import api, { defaultThen } from "../../../utils/api";

export const createAppointment = (context) => {
	const { data } = context;

	return api.post(API_ENDPOINTS.APPOINTMENTS, { data }).then(defaultThen);
};

export const updateAppointment = (context) => {
	const { data, id } = context;

	return api
		.put(`${API_ENDPOINTS.APPOINTMENTS}/${id}`, {
			data,
		})
		.then(defaultThen);
};
