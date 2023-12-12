import _ from "lodash";
import { DateTime } from "luxon";

import { Table, Tbody, Td, Text, Tr } from "@chakra-ui/react";

const AppointmentRequestHeader = ({ data }) => {
	const { data: patient } = data;
	return (
		<Table variant="simple">
			<Tbody>
				<Tr>
					<Td pb={4} pt={0} px={1}>
						<Text fontWeight="bold">
							Name:{" "}
							<Text as="b" fontWeight="normal">
								{_.get(patient, "patient.data.firstName")}{" "}
								{_.get(patient, "patient.data.lastName")}
							</Text>
						</Text>
						<Text fontWeight="bold">
							Contact Number:{" "}
							<Text as="b" fontWeight="normal">
								{_.get(patient, "patient.data.mobileNumber")}
							</Text>
						</Text>
						<Text fontWeight="bold">
							Prospect Schedule:{" "}
							<Text as="b" fontWeight="normal">
								{DateTime.fromSQL(
									_.get(patient, "date"),
								).toFormat("MMMM d, yyyy")}
								{", "}
								{_.get(patient, "slot")}
							</Text>
						</Text>
						<Text fontWeight="bold">
							Reason:{" "}
							<Text as="b" fontWeight="normal">
								{_.get(patient, "notes")}
							</Text>
						</Text>
					</Td>
				</Tr>
			</Tbody>
		</Table>
	);
};

export default AppointmentRequestHeader;
