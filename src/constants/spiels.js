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
	LABEL_PROCEDURE: "Procedure: ",
	LABEL_MOBILE: "Contact Number: ",
	LABEL_SCHEDULE: "Prospect Schedule: ",
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
	BUTTON_SAVE_CONTINUE: "Save & Continue",
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
	FORM_ALLERGIES_ANESTHETICS: "Local Anesthetic (ex. Lidocaine)",
	FORM_ALLERGIES_ANTIBIOTICS: "Penicillin, Antibiotics",
	FORM_ALLERGIES_LATEX: "Latex",
	FORM_ALLERGIES_SULFA: "Sulfa Drugs",
	FORM_ALLERGIES_ASPIRIN: "Aspirin",
	FORM_OTHER: "Other:",

	// Column 1
	FORM_HIGH_BLOOD_PRESSURE: "High Blood Pressure",
	FORM_AIDS_OR_HIV: "AIDS or HIV Infection",
	FORM_STOMACH_PROBLEMS_ULCER: "Stomach Troubles/Ulcers",
	FORM_JOINT_REPLACEMENT_IMPLANT: "Joint Replacement/Implant",
	FORM_THYROID_PROBLEM: "Thyroid Problem",
	FORM_HEPATITIS_LIVER_DISEASE: "Hepatitis/Liver Disease",
	FORM_RESPIRATORY_PROBLEMS: "Respiratory Problems",
	FORM_SWOLLEN_ANKLES: "Swollen Ankles",
	FORM_CHEST_PAIN: "Chest Pain",
	FORM_ANEMIA: "Anemia",
	FORM_EMPHYSEMA: "Emphysema",
	FORM_HEAD_INJURIES: "Head Injuries",
	// Column 2
	FORM_LOW_BLOOD_PRESSURE: "Low Blood Pressure",
	FORM_SEXUALLY_TRANSMITTED_DISEASE: "Sexually Transmitted Disease",
	FORM_RAPID_WEIGHT_LOSS: "Rapid Weight Loss",
	FORM_HEART_SURGERY: "Heart Surgery",
	FORM_HEART_DISEASE: "Heart Disease",
	FORM_RHEUMATIC_FEVER: "Rheumatic Fever",
	FORM_HAPATITIS_JAUNDICE: "Hepatitis/Jaundice",
	FORM_KIDNEY_DISEASE: "Kidney Disease",
	FORM_STROKE: "Stroke",
	FORM_ANGINA: "Angina",
	FORM_BLEEDING_PROBLEMS: "Bleeding Problems",
	FORM_ARTHRITIS_RHEUMATISM: "Arthritis/Rheumatism",
	// Column 3
	FORM_EPILEPSY_CONVULSIONS: "Epilepsy/Convulsions",
	FORM_FAINTING_SEIZURE: "Fainting Seizure",
	FORM_RADIATION_THERAPY: "Radiation Theraphy",
	FORM_HEART_ATTACK: "Heart Attack",
	FORM_HEART_MURMUR: "Heart Murmur",
	FORM_HAY_FEVER_ALLERGIES: "Hay Fever/Allergies",
	FORM_TUBERCULOSIS: "Tuberculosis",
	FORM_DIABETES: "Diabetes",
	FORM_CANCER_TUMORS: "Cancer/Tumors",
	FORM_ASTHMA: "Asthma",
	FORM_BLOOD_DISEASE: "Blood Diseases",

	// DC Checkboxes
	// Periodontal Screening
	FORM_GINGIVITIS: "Gingivitis",
	FORM_EARLY_PERIODONTITIS: "Early Periodontitis",
	FORM_MODERATE_PERIODONTITIS: "Moderate Periodontitis",
	FORM_ADVANCED_PERIODONTITIS: "Advanced Periodontitis",

	// Occlusion
	FORM_MOLAR: "Class (Molar)",
	FORM_OVERJET: "Overjet",
	FORM_OVERBITE: "Overbite",
	FORM_MIDLINE_DEVIATION: "Midline Deviation",
	FORM_CROSSBITE: "Crossbite",

	// Appliances
	FORM_ORTHODONTIC: "Orthodontic",
	FORM_STAYPLATE: "Stayplate",

	// TMD
	FORM_CLENCHING: "Clenching",
	FORM_CLICKING: "Clicking",
	FORM_TRISMUS: "Trismus",
	FORM_MUSCLE_SPASM: "Muscle Spasm",

	// XRAY
	FORM_PERIAPICAL: "Periapical",
	FORM_PANORAMIC: "Panoramic",
	FORM_CEPHALOMETRIC: "Cephalometric",
	FORM_OCCLUSAL: "Occlusal",

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

	// Conditions Tab
	CONDITIONS_TAB: {
		// Conditions
		CONDITIONS_ROW: [
			{
				value: "Do you use tobacco products",
			},
			{
				value: "Do you use alcohol, cocaine, or other dangerous drugs?",
			},
		],
	},
};

export default spiels;
