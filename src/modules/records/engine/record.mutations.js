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

export const updateConditions = (context) => {
	const { data, id } = context;

	return api
		.put(`${API_ENDPOINTS.CONDITIONS}/${id}`, {
			data,
		})
		.then(defaultThen);
};

export const createConditions = (context) => {
	const { data } = context;

	return api
		.post(API_ENDPOINTS.CONDITIONS, {
			data,
		})
		.then(defaultThen);
};

export const updateDentalRecords = (context) => {
	const { data, id } = context;

	return api
		.put(`${API_ENDPOINTS.DENTAL_RECORDS}/${id}`, {
			data,
		})
		.then(defaultThen);
};

export const createDentalRecords = (context) => {
	const { data } = context;

	return api
		.post(API_ENDPOINTS.DENTAL_RECORDS, {
			data,
		})
		.then(defaultThen);
};
