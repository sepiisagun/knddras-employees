import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import ProfileLayout from "../../../layout/ProfileLayout";
import AddAppointment from "../../../components/Counter/AddAppointment";
import CheckRequests from "../../../components/Counter/CheckRequests";
import AddRecord from "../../../components/Counter/AddRecord";

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
		</ProfileLayout>
	);
};

export default DashboardScreen;
