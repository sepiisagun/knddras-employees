import { useQuery } from "react-query";

import { Card, CardBody, Divider, Stack, Text } from "@chakra-ui/react";

// import spiels from "../../../constants/spiels";

import StrapiTable from "../../../components/Table";

import { retrieveAppointments } from "../../appointment/engine/appointment.queries";

const AppointmentsTable = () => {
	const {
		data: { data },
	} = useQuery({
		initialData: [],
		queryFn: retrieveAppointments,
		queryKey: [
			"appointments-data",
			{
				populate: "*",
			},
		],
	});

	return (
		<Card borderRadius="3xl" mb={3} variant="outline">
			<CardBody px="5px">
				<Stack direction="row" h="100px" p={6}>
					<Text as="b" fontSize="3xl">
						Appointments
					</Text>
				</Stack>
				<StrapiTable
					action={[]}
					data={data}
					headerTitles={[
						"Patient",
						"Purpose",
						"Assigned To",
						"Schedule",
						"Status",
					]}
					limit={5}
				/>
			</CardBody>
		</Card>
	);
};

export default AppointmentsTable;
