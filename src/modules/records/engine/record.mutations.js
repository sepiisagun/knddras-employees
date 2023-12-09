import { API_ENDPOINTS } from "../../../constants/Endpoints";
import api, { defaultThen } from "../../../utils/api";

export const updateRecord = (context) => {
	const { data, id } = context;

	return api
		.put(`${API_ENDPOINTS.RECORDS}/${id}`, {
			data,
		})
		.then(defaultThen);
};

export const createRecord = (context) => {
	const { data } = context;

	return api
		.post(API_ENDPOINTS.RECORDS, {
			data,
		})
		.then(defaultThen);
};

export const updateMedicalHistory = (context) => {
	const { data, id } = context;

	return api
		.put(`${API_ENDPOINTS.MEDICAL}/${id}`, {
			data,
		})
		.then(defaultThen);
};

export const createMedicalHistory = (context) => {
	const { data } = context;

	return api
		.post(API_ENDPOINTS.MEDICAL, {
			data,
		})
		.then(defaultThen);
};
