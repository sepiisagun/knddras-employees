import { API_ENDPOINTS } from "../../../constants/Endpoints";
import api from "../../../utils/api";

export const retrieveUserDetails = () => {
	return api.get(`${API_ENDPOINTS.USERS}/me`).then((data) => data);
};

export const retrievePatientAccounts = (context) => {
	const { queryKey } = context;
	const [, params] = queryKey;

	return api
		.get(`${API_ENDPOINTS.PATIENTS}/patients`, { params })
		.then((data) => data);
};

export const retrieveDoctorAccounts = () => {
	return api.get(`${API_ENDPOINTS.PATIENTS}/doctors`).then((data) => data);
};
