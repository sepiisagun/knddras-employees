import { API_ENDPOINTS } from "../../../constants/Endpoints";
import api from "../../../utils/api";

export const retrieveUserDetails = () => {
	return api.get(`${API_ENDPOINTS.USERS}/me`).then((data) => data);
};

export const retrievePatientAccounts = () => {
	return api.get(`${API_ENDPOINTS.PATIENTS}/patients`).then((data) => data);
};
