import React from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import ProfileLayout from "../../../layout/ProfileLayout";
import AddAppointment from "../../../components/Counter/AddAppointment";
import CheckRequests from "../../../components/Counter/CheckRequests";
import AddRecord from "../../../components/Counter/AddRecord";
import AppointmentsTable from "../components/AppointmentsTable";
import RedirectBanner from "../components/RedirectBanner";
import Counters from "../../../components/Counter/Counters";
import SearchBar from "../../../components/Search/SearchBar";

const DashboardScreen = () => {
	return (
		<ProfileLayout>
			<Grid
				gap="1px"
				templateColumns={{ sm: "5fr", xl: "repeat(3, 3fr)" }}
			>
				<Box maxW="auto" p={{ base: 4, md: 5 }}>
					<AddAppointment />
				</Box>
				<Box maxW="auto" p={{ base: 4, md: 5 }}>
					<CheckRequests />
				</Box>
				<Box maxW="auto" p={{ base: 4, md: 5 }}>
					<AddRecord />
				</Box>
			</Grid>
			<Box maxW="auto" p={{ base: 4, md: 5 }}>
				<AppointmentsTable />
			</Box>
			<Grid gap="1px" templateColumns="repeat(5, 1fr)">
				<GridItem colSpan={3} h="10" p={{ base: 4, md: 5 }}>
					<RedirectBanner />
				</GridItem>
				<GridItem
					colEnd={6}
					colStart={4}
					gap="1px"
					p={{ base: 4, md: 5 }}
				>
					<Counters />
				</GridItem>
			</Grid>
			<Grid>
				<GridItem>
					<SearchBar />
				</GridItem>
			</Grid>
		</ProfileLayout>
	);
};

export default DashboardScreen;
