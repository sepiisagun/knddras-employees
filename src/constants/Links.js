import {
	MdOutlineDashboardCustomize,
	MdOutlineCalendarToday,
	MdOutlinePhotoFilter,
	MdSchedule,
	MdOutlineTopic,
	MdOutlineMultipleStop,
	MdAccountCircle,
} from "react-icons/md";
import { ENDPOINTS } from "./Endpoints";

const Links = [
	{
		allowed: ["dental_assistant", "dentist", "associate_dentist"],
		href: `${ENDPOINTS.DASHBOARD}`,
		icon: MdOutlineDashboardCustomize,
		location: "dashboard",
		title: "Dashboard",
	},
	{
		allowed: ["dental_assistant"],
		href: `${ENDPOINTS.REQUEST}`,
		icon: MdOutlinePhotoFilter,
		location: "appointments",
		title: "Requests",
	},
	{
		allowed: ["dental_assistant", "dentist", "associate_dentist"],
		href: `${ENDPOINTS.APPOINTMENTS}`,
		icon: MdSchedule,
		location: "appointments",
		title: "Appointments",
	},
	// {
	// 	allowed: ["dental_assistant", "dentist", "associate_dentist"],
	// 	href: `${ENDPOINTS.CALENDAR}`,
	// 	icon: MdOutlineCalendarToday,
	// 	location: "appointments",
	// 	title: "Calendar",
	// },
	{
		allowed: ["dental_assistant", "dentist", "associate_dentist"],
		href: `${ENDPOINTS.RECORDS}`,
		icon: MdOutlineTopic,
		location: "records",
		title: "Records",
	},
	{
		allowed: ["dentist"],
		href: `${ENDPOINTS.TRANSACTIONS}`,
		icon: MdOutlineMultipleStop,
		location: "records",
		title: "Transactions",
	},
	{
		allowed: ["dental_assistant", "dentist", "associate_dentist", "admin"],
		icon: MdOutlineMultipleStop,
		location: "logout",
		title: "Logout",
	},
	{
		allowed: ["dental_assistant", "dentist", "associate_dentist"],
		href: `/`,
		icon: MdOutlineTopic,
		location: "navbar",
		title: "Record",
	},
	{
		allowed: ["admin"],
		href: `${ENDPOINTS.EMPLOYEES}`,
		icon: MdOutlineTopic,
		location: "dashboard",
		title: "Users",
	},
	{
		allowed: ["dental_assistant", "dentist", "associate_dentist", "admin"],
		href: `${ENDPOINTS.ACCOUNT}`,
		icon: MdAccountCircle,
		location: "records",
		title: "Account",
	},
];

export default Links;
