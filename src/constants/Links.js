import {
	MdOutlineDashboardCustomize,
	MdOutlineCalendarToday,
	MdOutlinePhotoFilter,
	MdSchedule,
	MdOutlineTopic,
	MdOutlineMultipleStop,
} from "react-icons/md";
import { ENDPOINTS } from "./Endpoints";

const Links = [
	{
		allowed: [
			"authenticated",
			"dental_assistant",
			"dentist",
			"associate_dentist",
		],
		href: `${ENDPOINTS.DASHBOARD}`,
		icon: MdOutlineDashboardCustomize,
		location: "dashboard",
		title: "Dashboard",
	},
	{
		allowed: [
			"authenticated",
			"dental_assistant",
			"dentist",
			"associate_dentist",
		],
		href: `${ENDPOINTS.REQUEST}`,
		icon: MdOutlinePhotoFilter,
		location: "appointments",
		title: "Requests",
	},
	{
		allowed: [
			"authenticated",
			"dental_assistant",
			"dentist",
			"associate_dentist",
		],
		href: `${ENDPOINTS.APPOINTMENTS}`,
		icon: MdSchedule,
		location: "appointments",
		title: "Appointments",
	},
	{
		allowed: [
			"authenticated",
			"dental_assistant",
			"dentist",
			"associate_dentist",
		],
		href: `${ENDPOINTS.CALENDAR}`,
		icon: MdOutlineCalendarToday,
		location: "appointments",
		title: "Calendar",
	},
	{
		allowed: [
			"authenticated",
			"dental_assistant",
			"dentist",
			"associate_dentist",
		],
		href: `${ENDPOINTS.RECORDS}`,
		icon: MdOutlineTopic,
		location: "records",
		title: "Records",
	},
	{
		allowed: [
			"authenticated",
			"dental_assistant",
			"dentist",
			"associate_dentist",
		],
		href: `${ENDPOINTS.TRANSACTION}`,
		icon: MdOutlineMultipleStop,
		location: "records",
		title: "Transactions",
	},
	{
		allowed: [
			"authenticated",
			"dental_assistant",
			"dentist",
			"associate_dentist",
		],
		icon: MdOutlineMultipleStop,
		location: "logout",
		title: "Logout",
	},
	{
		allowed: [
			"authenticated",
			"dental_assistant",
			"dentist",
			"associate_dentist",
		],
		href: `${ENDPOINTS.RECORD}`,
		icon: MdOutlineTopic,
		location: "navbar",
		title: "Record",
	},
];

export default Links;
