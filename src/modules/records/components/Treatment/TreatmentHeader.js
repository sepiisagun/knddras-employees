import { Table, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import React from "react";
import { PATIENT_CHECKUP_HISTORY } from "../../../../constants/temporaryValues";

const TreatmentHeader = () => {
	const patient = PATIENT_CHECKUP_HISTORY[0];
	return (
		<Table variant="simple">
			<Tbody>
				<Tr>
					<Td pb={4} pt={0} px={1}>
						<Text fontWeight="bold">
							Name:{" "}
							<Text as="b" fontWeight="normal">
								{patient.name}
							</Text>
						</Text>
						<Text fontWeight="bold">
							Date:{" "}
							<Text as="b" fontWeight="normal">
								{patient.dateOperated}
							</Text>
						</Text>
					</Td>

					<Td pb={4} pt={0} px={1}>
						<Text fontWeight="bold">
							Assigned To:{" "}
							<Text as="b" fontWeight="normal">
								{patient.operatedBy}
							</Text>
						</Text>
						<Text fontWeight="bold">
							Transaction #:{" "}
							<Text as="b" fontWeight="normal">
								{patient.transactionNumber}
							</Text>
						</Text>
					</Td>
				</Tr>
			</Tbody>
		</Table>
	);
};

export default TreatmentHeader;
