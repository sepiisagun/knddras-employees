export const CONFIG = {
	timeout: 30000,
};

/**
 * Front-end endpoints
 */
export const ENDPOINTS = {
	ACCOUNT: "account",
	ADD_RECORD: "records/add-record",
	APPOINTMENTS: "appointments",
	CALENDAR: "calendar",
	DASHBOARD: "dashboard",
	EMPLOYEES: "employees",
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
	ACCOUNTS: "/api/users-permissions/users",
	APPOINTMENTS: "/api/appointments",
	AUTH: "/api/auth",
	CONDITIONS: "/api/conditions",
	DENTAL_CHARTS: "/api/dental-charts",
	DENTAL_RECORDS: "/api/dental-records",
	GUARDIANS: "/api/guardians",
	MEDICAL: "/api/medicals",
	PROCEDURES: "/api/procedures",
	RECORDS: "/api/records",
	REQUESTS: "/api/requests",
	TOOTH: "/api/tooth",
	TOOTH_STATUS: "/api/tooth-statuses",
	TREATMENTS: "/api/treatments",
	USERS: "/api/users",
};
