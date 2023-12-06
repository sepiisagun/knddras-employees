import { API_ENDPOINTS } from "../../../constants/Endpoints";
import api from "../../../utils/api";

const retrieveUserDetails = () => {
	return api.get(`${API_ENDPOINTS.USERS}/me`).then((data) => data);
};

export default retrieveUserDetails;
