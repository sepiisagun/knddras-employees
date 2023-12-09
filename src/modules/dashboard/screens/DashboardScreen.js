import { useQuery } from "react-query";
import { DateTime } from "luxon";

import { Box, Grid, GridItem } from "@chakra-ui/react";

import ProfileLayout from "../../../layout/ProfileLayout";
import AddAppointment from "../../../components/Counter/AddAppointment";
import CheckRequests from "../../../components/Counter/CheckRequests";
import AddRecord from "../../../components/Counter/AddRecord";
import AppointmentsTable from "../components/AppointmentsTable";
import RedirectBanner from "../components/RedirectBanner";
import Counters from "../../../components/Counter/Counters";

import { retrieveAppointments } from "../../appointment/engine/appointment.queries";
import { retrieveRequests } from "../../request/engine/request.queries";

const DashboardScreen = () => {
	const today = DateTime.now().toFormat("yyyy-MM-dd");
	const ago = DateTime.now().minus({ month: 1 }).toFormat("yyyy-MM-dd");

	const {
		data: { count: monthAppointment },
	} = useQuery({
		initialData: {},
		placeholderData: [],
		queryFn: retrieveAppointments,
		queryKey: [
			"month-appointments-count",
			{
				filters: {
					date: {
						$between: [`${ago}`, `${today}`],
					},
				},
			},
		],
	});
	const {
		data: { count: pendingRequestCount },
	} = useQuery({
		initialData: {},
		placeholderData: [],
		queryFn: retrieveRequests,
		queryKey: [
			"pending-requests-count",
			{
				filters: {
					status: "PENDING",
				},
			},
		],
	});
	const {
		data: { count: upcomingAppointmentCount },
	} = useQuery({
		initialData: {},
		placeholderData: [],
		queryFn: retrieveAppointments,
		queryKey: [
			"upcoming-appointments-count",
			{
				filters: {
					$and: [
						{
							status: "ACCEPTED",
						},
						{
							date: {
								$gt: `${today}`,
							},
						},
					],
				},
			},
		],
	});
	const DASHBOARD_COUNTERS = [
		{
			title: "Pending Requests",
			value: pendingRequestCount,
		},
		{
			title: "Total Appointment This Month",
			value: monthAppointment,
		},
		{
			title: "Upcoming Appointments",
			value: upcomingAppointmentCount,
		},
	];
	return (
		<ProfileLayout>
			<Box maxW="auto" p={{ base: 4, md: 5 }}>
				<Grid
					gap={3}
					pb={3}
					templateColumns={{ sm: "5fr", xl: "repeat(3, 1fr)" }}
				>
					<GridItem colEnd={2} colStart={1} maxW="auto">
						<AddAppointment />
					</GridItem>
					<GridItem colEnd={3} colStart={2} maxW="auto">
						<CheckRequests />
					</GridItem>
					<GridItem colStart={3} maxW="auto">
						<AddRecord />
					</GridItem>
				</Grid>
				<AppointmentsTable />
				<Grid
					gap={3}
					templateColumns={{ sm: "5fr", xl: "repeat(3, 1fr)" }}
				>
					<GridItem colEnd={3} colStart={1} maxW="auto">
						<RedirectBanner />
					</GridItem>
					<GridItem colStart={3} gap={1} maxW="auto">
						<Counters countersValue={DASHBOARD_COUNTERS} />
					</GridItem>
				</Grid>
			</Box>
		</ProfileLayout>
	);
};

export default DashboardScreen;
