import _ from "lodash";

import { DateTime } from "luxon";

import { Table, Tbody, Td, Text, Tr } from "@chakra-ui/react";

const ViewTreatmentHeader = ({ data }) => {
	return (
		<Table variant="simple">
			<Tbody>
				<Tr>
					<Td pb={4} pt={0} px={1}>
						<Text fontWeight="bold">
							Name:{" "}
							<Text as="b" fontWeight="normal">
								{`${_.get(
									data,
									"record.data.firstName",
								)} ${_.get(data, "record.data.lastName")}`}
							</Text>
						</Text>
						<Text fontWeight="bold">
							Appointment Date:{" "}
							<Text as="b" fontWeight="normal">
								{DateTime.fromISO(
									_.get(data, "appointment.data.date"),
								).toFormat("MMMM d, yyyy")}
							</Text>
						</Text>
					</Td>

					<Td pb={4} pt={0} px={1}>
						<Text fontWeight="bold">
							Procedure:{" "}
							<Text as="b" fontWeight="normal">
								{_.get(data, "procedure.data.name")}
							</Text>
						</Text>
						<Text fontWeight="bold">
							Transaction #:{" "}
							<Text as="b" fontWeight="normal">
								{`TRANS0000${_.get(data, "id")}`}
							</Text>
						</Text>
					</Td>
				</Tr>
			</Tbody>
		</Table>
	);
};

export default ViewTreatmentHeader;
