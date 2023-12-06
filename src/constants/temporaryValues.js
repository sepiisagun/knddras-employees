import { FaRegCalendar } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { IoNewspaperOutline } from "react-icons/io5";
import { TbMessage2 } from "react-icons/tb";

export const APPOINTMENT_USERS = [
	{
		date: "April 01, 2023",
		dentist: "Dr. Anna Mia",
		name: "Juan Dela Cruz",
		procedure: "Root Canal Theraphy",
		status: "Scheduled",
		time: "10:00 AM - 11:00 AM",
	},
	{
		date: "April 01, 2023",
		dentist: "Dr. Ron Hallway",
		name: "Juan Dela Cruz",
		procedure: "Root Canal Theraphy",
		status: "Scheduled",
		time: "10:00 AM - 11:00 AM",
	},
	{
		date: "April 01, 2023",
		dentist: "Dr. John Doe",
		name: "Maria Dela Cruz",
		procedure: "Root Canal Theraphy",
		status: "Ended",
		time: "10:00 AM - 11:00 AM",
	},
	{
		date: "April 01, 2023",
		dentist: "Dr. John Doe",
		name: "John Doe",
		procedure: "Root Canal Theraphy",
		status: "Ended",
		time: "10:00 AM - 11:00 AM",
	},
];

export const PATIENT_ACCOUNT = [
	{
		email: "johndoe@gmail.com",
	},
	{
		email: "johndoe1@gmail.com",
	},
	{
		email: "johndoe2@gmail.com",
	},
];
export const PATIENT_CHECKUP_HISTORY = [
	{
		action: "View",
		dateOperated: "August 08, 2021",
		id: 1,
		name: "Juan dela Cruz",
		operatedBy: "Juanita Poblacion",
		procedure: "Simple Extraction",
		time: "11:00 AM - 12:00 NN",
		totalFee: 1000,
		transactionNumber: 9876543210,
	},
	{
		action: "View",
		dateOperated: "March 23, 2022",
		id: 2,
		name: "Juan dela Cruz",
		operatedBy: "Remedios Alejandro delos Santos",
		procedure: "Composite Restoration",
		time: "11:00 AM - 12:00 NN",
		totalFee: 1000,
		transactionNumber: 1122334455,
	},
	{
		action: "View",
		dateOperated: "January 15, 2023",
		id: 3,
		name: "Juan dela Cruz",
		operatedBy: "Maria Josefina Baltazar",
		procedure: "Basic Cleaning",
		time: "11:00 AM - 12:00 NN",
		totalFee: 1000,
		transactionNumber: 4598724379,
	},
];

export const PROCEDURE = [
	{
		cost: 700,
		id: 1,
		procedure: "Simple Extraction",
	},
	{
		cost: 800,
		id: 2,
		procedure: "Composite Restoration",
	},
	{
		cost: 1500,
		id: 3,
		procedure: "Basic Cleaning",
	},
	{
		cost: 2000,
		id: 4,
		procedure: "Cleaning with Stains",
	},
	{
		cost: 10000,
		id: 5,
		procedure: "Odontectomy",
	},
	{
		cost: 8000,
		id: 6,
		procedure: "Root Canal Theraphy (per canal)",
	},
	{
		cost: 7500,
		id: 7,
		procedure: "Jacket Crown",
	},
	{
		cost: 7500,
		id: 8,
		procedure: "Fixed Bridge (per unit)",
	},
	{
		cost: 10000,
		id: 9,
		procedure: "Complete Denture",
	},
	{
		cost: 50000,
		id: 10,
		procedure: "Braces",
	},
	{
		cost: 5000,
		id: 11,
		procedure: "Retainers",
	},
];

export const VIEW_TREATMENT = [
	{
		cost: 700,
		procedure: "Simple Extraction",
		toothNumber: 11,
	},
	{
		cost: 800,
		procedure: "Composite Restoration",
		toothNumber: 41,
	},
];

export const PATIENT_INFORMATION = [
	{
		address: "Street #, Barangay, City, Region",
		birthDate: "December 1, 2000",
		contactNumber: "09123456789",
		email: "juandelacruz@sample.com",
		lastVisit: "January 1, 2023",
		name: "Juan dela Cruz",
		nationality: "Pipino",
		religion: "Roman Alcoholic",
		sex: "Male",
	},
];

export const APPOINTMENT_USER_ONE = [
	{
		icon: FaRegCalendar,
		key: 1,
		subValue: "March 01, 2020",
		value: "10:00 AM - 11: 00 AM",
	},
	{
		icon: FaUserDoctor,
		key: 2,
		subValue: "",
		value: "Dr. John Doe",
	},
	{
		icon: IoNewspaperOutline,
		key: 3,
		subValue: "",
		value: "Composite Restoration",
	},
	{
		icon: TbMessage2,
		key: 4,
		subValue: "",
		value: "No concerns mentioned...",
	},
];
