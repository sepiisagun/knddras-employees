/* eslint-disable sort-keys */
const spiels = {
	APP_NAME: "KNDDRAS Employees",
	BUTTON_SEARCH: "Search",
	COLOR_TEAR: "teal.300",
	COMPANY_NAME: "Klinika ng Dentista",
	EMPLOYEE_PORTAL: "Employee Portal",
	EMPLOYEE_PORTAL_SUBTITLE: "Enter your Email and Password to sign in",
	TEXT_FILTER: "Filters",
	INCORRECT_EMAIL: "Incorrect Email",
	INCORRECT_PASSWORD: "Incorrect Password",
	LABEL_ASSIGNED_TO: "Assigned To: ",
	LABEL_DATE: "Date: ",
	LABEL_EMAIL: "Email",
	LABEL_NAME: "Name: ",
	LABEL_PASSWORD: "Password",
	LABEL_REMEMBER: "Remember Me",
	LABEL_SIGNIN: "Sign In",
	LABEL_TRANSACTION_NUMBER: "Transaction #: ",
	LABEL_VIEW_TREATMENT_TOTAL: "Total",
	PLACEHOLDER_EMAIL: "Your Email Address",
	PLACEHOLDER_PASSWORD: "Your Password",
	INC_EMAIL: "Incorrect Email",
	INC_PASSWORD: "Incorrect Password",
	LABEL_LAST_VISIT: "Last Visit",
	LBL_EMAIL: "Email",
	LBL_PASSWORD: "Password",
	LBL_REMEMBER: "Remember Me",
	LBL_SIGNIN: "Sign In",
	PHOLDER_EMAIL: "Your Email Address",
	PHOLDER_PASSWORD: "Your Password",
	PLACEHOLDER_SEARCH: "Search for Records",
	PRINT_CONFIRMATION: "Generate a printable copy for this record?",
	PRINT_TRANSACTION_TABLE:
		"Generate a transaction report with data starting from ",
	REQ_EMAIL: "Email is required",
	REQ_PASSWORD: "Password is required",
	TABLE_CHECKUP_HISTORY: "Check Up and Treatment History",
	GENERATE_TRANSACTION_REPORT: "Generate Transaction Report",
	VIEW_APPOINTMENT: "View Appointment",
	REBOOK_APPOINTMENT: "Rebook Appointment",
	PROCEDURE_SUMMARY: "Procedure Summary",
	APPOINTMENT_REQUEST: "Appointment Request",
	CONDITIONS: "Conditions",
	DENTAL_CHART: "Dental Chart",

	// Counters
	COUNTER_ADD_APPOINTMENT: "Add Appointment",
	COUNTER_CHECK_REQUESTS: "Check Requests",
	COUNTER_ADD_RECORD: "Add Record",

	// Table
	TABLE_COLUMNS: [
		{
			title: "Name",
		},
		{
			title: "Procedure",
		},
		{
			title: "Assigned To",
		},
		{
			title: "Schedule",
		},
		{
			title: "Status",
		},
	],
	TABLE_COLUMNS_CHECKUP_HISTORY: [
		{
			title: "Procedure",
		},
		{
			title: "Operated By",
		},
		{
			title: "Date Operated",
		},
		{
			title: "Total Fee",
		},
		{
			title: "Action",
		},
	],
	TABLE_COLUMNS_TREATMENT_VIEW: [
		{
			title: "Tooth No.",
		},
		{
			title: "Procedure",
		},
		{
			title: "Cost",
		},
	],

	// Buttons
	BUTTON_ACCEPT: "Accept",
	BUTTON_ADD: "Add",
	BUTTON_ADD_RECORD: "Add Record",
	BUTTON_ADD_APPOINTMENT: "Add Appointment",
	BUTTON_BACK: "Back",
	BUTTON_BOOK_NOW: "Book Now",
	BUTTON_CANCEL: "Cancel",
	BUTTON_CANCEL_APPOINTMENT: "Cancel Appointment",
	BUTTON_DELETE_ACCOUNT: "Delete Account",
	BUTTON_DELETE: "Delete",
	BUTTON_EDIT_RECORD: "Edit Record",
	BUTTON_LOGIN: "Login",
	BUTTON_NEXT: "Next",
	BUTTON_NEW_PROCEDURE: "New Procedure",
	BUTTON_PRINT: "Print",
	BUTTON_PRINT_RECORD: "Print Record",
	BUTTON_PRINT_TABLE: "Print Table",
	BUTTON_PROCEED: "Proceed",
	BUTTON_REJECT: "Reject",
	BUTTON_RESCHEDULE: "Reschedule",
	BUTTON_SAVE: "Save",
	BUTTON_SEND_RESET_REQUEST: "Send Reset Request",
	BUTTON_SET_APPOINTMENT: "Set Appointment",
	BUTTON_SIGN_IN: "Sign In",
	BUTTON_SIGN_UP: "Sign Up",
	BUTTON_SUBMIT: "Submit",
	BUTTON_UPDATE: "Update",
	BUTTON_VIEW: "View",
	BUTTON_VIEW_ALL: "View all",
	BUTTON_VIEW_RECORD: "View Record",

	// Banner
	REDIRECT_SUBHEADER: "Built by developers",
	REDIRECT_BANNER: "KNNDRAS Web UI",
	REDIRECT_BANNER_DESC:
		"Klinika ng Dentista's Appointment Maker page for their Patients.",

	// Form
	FORM_ADD_APPOINTMENT: "Add Appointment",
	FORM_ADDRESS: "Address",
	FORM_AGE: "Age",
	FORM_ASSIGN_DENTIST: "Assign Dentist",
	FORM_BIRTHDATE: "Birthdate",
	FORM_BLEEDING_TIME: "Bleeding Time",
	FORM_BLOOD_TYPE: "Blood Type",
	FORM_CONFIRM: "Confirm Password",
	FORM_CONFIRM_PASSWORD: "Confirm New Password",
	FORM_CONTACT_NO: "Contact Number",
	FORM_DATE: "Appointment Date",
	FORM_DENTAL_VISIT: "Last Dental Visit",
	FORM_EMAIL_ADDRESS: "Email Address",
	FORM_FNAME: "First Name",
	FORM_FORGOT_PASSWORD: "Forgot Password",
	FORM_GENDER: "Gender",
	FORM_GUARDIAN: "Parent/Guardian's Name",
	FORM_ID_NUMBER: "ID Number",
	FORM_INITIAL: "Middle Initial",
	FORM_LNAME: "Last Name",
	FORM_NATIONALITY: "Nationality",
	FORM_NEW_PASSWORD: "New Password",
	FORM_NOTES: "Notes (optional)",
	FORM_OFFICE_ADDRESS: "Office Address",
	FORM_OCCUPATION: "Occupation",
	FORM_OLD_PASSWORD: "Old Password",
	FORM_PASSWORD: "Password",
	FORM_PATIENT_ACCOUNT: "Patient Account Email Address",
	FORM_PHYSICIAN_NAME: "Name of Physician",
	FORM_PREV_DENTIST: "Previous Dentist",
	FORM_PROCEDURE: "Procedure",
	FORM_REGION: "Region",
	FORM_RELATIONSHIP: "Relationship",
	FORM_RELIGION: "Religion",
	FORM_SELECT_PATIENT: "Select Patient",
	FORM_SEX: "Sex",
	FORM_SLOT: "Slot",

	// Form Blood Type
	FORM_BLOOD_TYPE_LIST: [
		{
			value: "A",
		},
		{
			value: "B",
		},
		{
			value: "AB",
		},
		{
			value: "O",
		},
	],

	FORM_SLOT_LIST: [
		{
			value: "AM",
		},
		{
			value: "PM",
		},
	],

	// Tabs
	PERSONAL_INFO: "Personal Info",
	MEDICAL_HISTORY: "Medical History",

	// Dental Chart Legend
	DENTAL_CHART_LEGEND_COLUMN_ONE: [
		{
			label: "✓",
			value: "Present Teeth",
		},
		{
			label: "D",
			value: "Decayed",
		},
		{
			label: "M",
			value: "Missing due to Caries",
		},
		{
			label: "MO",
			value: "Missing due to Other Causes",
		},
		{
			label: "Im",
			value: "Impacted Tooth",
		},
		{
			label: "Sp",
			value: "Supermumerary Tooth",
		},
		{
			label: "Rf",
			value: "Root Fragment",
		},
	],

	DENTAL_CHART_LEGEND_COLUMN_TWO: [
		{
			label: "Un",
			value: "Unerupted",
		},
		{
			label: "Am",
			value: "Amaigam Filling",
		},
		{
			label: "Co",
			value: "Composite Filling",
		},
		{
			label: "JC",
			value: "Jacket Crown",
		},
		{
			label: "Ab",
			value: "Abutment",
		},
		{
			label: "Att",
			value: "Attachment",
		},
		{
			label: "P",
			value: "Pontic",
		},
	],

	DENTAL_CHART_LEGEND_COLUMN_THREE: [
		{
			label: "In",
			value: "Inlay",
		},
		{
			label: "Imp",
			value: "Implant",
		},
		{
			label: "S",
			value: "Sealants",
		},
		{
			label: "Rm",
			value: "Removable Denture",
		},
		{
			label: "X",
			value: "Extraction Due to Caries",
		},
		{
			label: "XO",
			value: "Extraction Due to Other Causes",
		},
	],

	// Dental Chart Checkbox
	DC_CHECKBOXES: [
		// Periodontal Screening
		{
			value: "Gingivitis",
			key: 1,
		},
		{
			value: "Early Periodontitis",
			key: 1,
		},
		{
			value: "Moderate Periodontitis",
			key: 1,
		},
		{
			value: "Advanced Periodontitis",
			key: 1,
		},

		// Occlusion
		{
			value: "Class (Molar)",
			key: 2,
		},
		{
			value: "Overjet",
			key: 2,
		},
		{
			value: "Overbite",
			key: 2,
		},
		{
			value: "Midline Deviation",
			key: 2,
		},
		{
			value: "Crossbite",
			key: 2,
		},

		// Appliances
		{
			value: "Orthodontic",
			key: 3,
		},
		{
			value: "Stayplate",
			key: 3,
		},

		// TMD
		{
			value: "Clenching",
			key: 4,
		},
		{
			value: "Clicking",
			key: 4,
		},
		{
			value: "Trismus",
			key: 4,
		},
		{
			value: "Muscle Spasm",
			key: 4,
		},

		// X-ray Taken
		{
			value: "Periapical",
			key: 5,
		},
		{
			value: "Panoramic",
			key: 5,
		},
		{
			value: "Cephalometric",
			key: 5,
		},
		{
			value: "Occlusal",
			key: 5,
		},
	],
};

export default spiels;
