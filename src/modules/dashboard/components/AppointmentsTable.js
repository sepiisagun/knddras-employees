import {
	Card,
	CardBody,
	Divider,
	Stack,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import React from "react";
import spiels from "../../../constants/spiels";
import { APPOINTMENT_USERS } from "../../../constants/temporaryValues";

const AppointmentsTable = () => {
	return (
		<Card borderRadius="3xl" variant="outline">
			<CardBody px="5px">
				<Stack direction="row" h="100px" p={6}>
					<Divider orientation="vertical" />
					<Text as="b" fontSize="3xl">
						Appointments
					</Text>
				</Stack>

				<TableContainer p={4}>
					<Table variant="simple">
						<Thead>
							<Tr>
								{spiels.TABLE_COLUMNS.map((title) => (
									<Th key={title} textAlign="center">
										{title.title}
									</Th>
								))}
							</Tr>
						</Thead>
						<Tbody>
							{APPOINTMENT_USERS.map((appointmentUser) => (
								<Tr key={appointmentUser}>
									<Td textAlign="center">
										{appointmentUser.name}
									</Td>
									<Td textAlign="center">
										{appointmentUser.procedure}
									</Td>
									<Td textAlign="center">
										{appointmentUser.dentist}
									</Td>
									<Td textAlign="center">
										<Text>{appointmentUser.date}</Text>
										<Text>{appointmentUser.time}</Text>
									</Td>
									<Td textAlign="center">
										{appointmentUser.status}
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</TableContainer>
			</CardBody>
		</Card>
	);
};

export default AppointmentsTable;
