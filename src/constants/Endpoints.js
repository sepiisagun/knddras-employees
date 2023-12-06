export const CONFIG = {
	timeout: 30000,
};

/**
 * Front-end endpoints
 */
const ENDPOINTS = {
	ADD_RECORD: "records/add-record",
	APPOINTMENTS: "appointments",
	CALENDAR: "calendar",
	DASHBOARD: "dashboard",
	LOG_OUT: "logout",
	RECORD: "records/add-record",
	RECORDS: "records",
	REQUEST: "request",
	TRANSACTION: "transaction",
};

/**
 * Add /api and a leading slash for each api endpoint
 *
 * e.g. AUTH: '/api/auth',
 */
export const API_ENDPOINTS = {
	// sample
	APPOINTMENTS: "/api/appointments",
	AUTH: "/api/auth",
	MEDICAL: "/api/medicals",
	RECORDS: "/api/records",
	REQUESTS: "/api/requests",
	TOOTH: "/api/teeth",
	TREATMENTS: "/api/treatments",
	USERS: "/api/users",
};

export default ENDPOINTS;
