import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import ProfileLayout from "../../../layout/ProfileLayout";
import AddAppointment from "../../../components/Counter/AddAppointment";
import CheckRequests from "../../../components/Counter/CheckRequests";
import AddRecord from "../../../components/Counter/AddRecord";
import AppointmentsTable from "../components/AppointmentsTable";
import RedirectBanner from "../components/RedirectBanner";
import Counters from "../../../components/Counter/Counters";

const DashboardScreen = () => {
	const DASHBOARD_COUNTERS = [
		{
			title: "Pending Requests",
			value: "25",
		},
		{
			title: "Total Appointment This Month",
			value: "350",
		},
		{
			title: "Upcoming Appointments",
			value: "12",
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
