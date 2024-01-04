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

export const retrieveUserAccounts = () => {
	return api.get(`${API_ENDPOINTS.RECORDS}/fetchUsers`).then(defaultThen);
};

export const retrieveUserAppointments = (context) => {
	const { queryKey } = context;
	const [, params] = queryKey;

	return api
		.get(API_ENDPOINTS.APPOINTMENTS, {
			params,
		})
		.then(defaultThen);
};

export const retrieveDentalRecords = (context) => {
	const { queryKey } = context;
	const [, params] = queryKey;

	return api.get(API_ENDPOINTS.DENTAL_RECORDS, { params }).then(defaultThen);
};

export const retrieveDentalCharts = (context) => {
	const { queryKey } = context;
	const [, params] = queryKey;

	return api.get(API_ENDPOINTS.DENTAL_CHARTS, { params }).then(defaultThen);
};

export const retrieveMedicalRecords = (context) => {
	const { queryKey } = context;
	const [, params] = queryKey;

	return api.get(API_ENDPOINTS.MEDICAL, { params }).then(defaultThen);
};

export const retrieveConditionRecords = (context) => {
	const { queryKey } = context;
	const [, params] = queryKey;

	return api.get(API_ENDPOINTS.CONDITIONS, { params }).then(defaultThen);
};

export const retrieveGuardians = (context) => {
	const { queryKey } = context;
	const [, params] = queryKey;

	return api.get(API_ENDPOINTS.GUARDIANS, { params }).then(defaultThen);
};

export const retrieveTeeth = (context) => {
	const { queryKey } = context;
	const [, params] = queryKey;

	return api.get(API_ENDPOINTS.TOOTH, { params }).then(defaultThen);
};

export const retrieveToothStatus = (context) => {
	const { queryKey } = context;
	const [, params] = queryKey;

	return api.get(API_ENDPOINTS.TOOTH_STATUS, { params }).then(defaultThen);
};
