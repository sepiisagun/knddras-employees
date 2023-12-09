export const CONFIG = {
	timeout: 30000,
};

/**
 * Front-end endpoints
 */
export const ENDPOINTS = {
	ADD_RECORD: "records/add-record",
	APPOINTMENTS: "appointments",
	CALENDAR: "calendar",
	DASHBOARD: "dashboard",
	LOG_OUT: "logout",
	RECORDS: "records",
	REQUEST: "request",
	TRANSACTIONS: "transactions",
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
	PATIENTS: "/api/users-permissions/users",
	RECORDS: "/api/records",
	REQUESTS: "/api/requests",
	TOOTH: "/api/teeth",
	TREATMENTS: "/api/treatments",
	USERS: "/api/users",
};
