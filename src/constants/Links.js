import {
	MdOutlineDashboardCustomize,
	MdOutlineCalendarToday,
	MdOutlinePhotoFilter,
	MdSchedule,
	MdOutlineTopic,
	MdOutlineMultipleStop,
} from "react-icons/md";
import ENDPOINTS from "./Endpoints";

const Links = [
	{
		allowed: [
			"authenticated",
			"dental_assistant",
			"doctor",
			"associate_dentist",
		],
		href: `${ENDPOINTS.DASHBOARD}`,
		icon: MdOutlineDashboardCustomize,
		key: 0,
		location: "navbar",
		title: "Dashboard",
	},
	{
		allowed: [
			"authenticated",
			"dental_assistant",
			"doctor",
			"associate_dentist",
		],
		href: `${ENDPOINTS.REQUEST}`,
		icon: MdOutlinePhotoFilter,
		key: 1,
		location: "navbar",
		title: "Requests",
	},
	{
		allowed: [
			"authenticated",
			"dental_assistant",
			"doctor",
			"associate_dentist",
		],
		href: `${ENDPOINTS.APPOINTMENTS}`,
		icon: MdSchedule,
		key: 1,
		location: "navbar",
		title: "Appointments",
	},
	{
		allowed: [
			"authenticated",
			"dental_assistant",
			"doctor",
			"associate_dentist",
		],
		href: `${ENDPOINTS.CALENDAR}`,
		icon: MdOutlineCalendarToday,
		key: 1,
		location: "navbar",
		title: "Calendar",
	},
	{
		allowed: [
			"authenticated",
			"dental_assistant",
			"doctor",
			"associate_dentist",
		],
		href: `${ENDPOINTS.RECORDS}`,
		icon: MdOutlineTopic,
		key: 2,
		location: "navbar",
		title: "Records",
	},
	{
		allowed: [
			"authenticated",
			"dental_assistant",
			"doctor",
			"associate_dentist",
		],
		href: `${ENDPOINTS.TRANSACTIONS}`,
		icon: MdOutlineMultipleStop,
		key: 2,
		location: "navbar",
		title: "Transactions",
	},
	{
		allowed: [
			"authenticated",
			"dental_assistant",
			"doctor",
			"associate_dentist",
		],
		href: `${ENDPOINTS.TRANSACTIONS}`,
		icon: MdOutlineMultipleStop,
		key: 3,
		location: "navbar",
		title: "Logout",
	},
	{
		allowed: [
			"authenticated",
			"dental_assistant",
			"doctor",
			"associate_dentist",
		],
		href: `/`,
		icon: MdOutlineTopic,
		key: 4,
		location: "navbar",
		title: "Record",
	},
];

export default Links;
