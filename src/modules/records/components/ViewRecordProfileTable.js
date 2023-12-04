import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Tr,
} from "@chakra-ui/react";
import {
	PATIENT_INFORMATION,
	PATIENT_INFORMATION_LABEL_LEFT,
	PATIENT_INFORMATION_LABEL_RIGHT,
} from "../../../constants/temporaryValues";
import PrintModal from "./PrintModal";

const ViewRecordProfileTable = () => {
	return (
		<Card borderRadius="3xl" mb={1} variant="outline">
			<CardHeader mb="1px" p="12px 2px">
				{/* Not sure why the buttons are glitching when hovering over them */}
				{/* The logo on the navbar also disappears */}
				<Button
					colorScheme="blue"
					float="right"
					mr={4}
					mt={3}
					p={5}
					size="md"
					variant="solid"
				>
					Edit
				</Button>

				<PrintModal />
				<Button
					colorScheme="teal"
					float="right"
					mt={3}
					mx={1}
					size="md"
					variant="solid"
				>
					New Procedure
				</Button>

				{PATIENT_INFORMATION.map((patient) => (
					<Text
						key={patient.name}
						color="black"
						fontSize="4xl"
						fontWeight="bold"
						px={8}
						py={2}
					>
						{patient.name}
					</Text>
				))}
			</CardHeader>
			<CardBody px="10px" py={0}>
				<TableContainer pt={0}>
					<Table variant="simple">
						<Tbody>
							<Tr>
								{PATIENT_INFORMATION_LABEL_LEFT.map(
									(patientInfoLeft) => (
										<Td
											key={patientInfoLeft.label}
											textAlign="left"
										>
											<Text
												as="b"
												color="gray.500"
												fontWeight="semibold"
											>
												{patientInfoLeft.label}
											</Text>
											{patientInfoLeft.value}
										</Td>
									),
								)}
							</Tr>
							<Tr>
								{PATIENT_INFORMATION_LABEL_RIGHT.map(
									(patientInfoRight) => (
										<Td
											key={patientInfoRight.label}
											textAlign="left"
										>
											<Text
												as="b"
												color="gray.500"
												fontWeight="semibold"
											>
												{patientInfoRight.label}
											</Text>
											{patientInfoRight.value}
										</Td>
									),
								)}
							</Tr>
						</Tbody>
					</Table>
				</TableContainer>
			</CardBody>
		</Card>
	);
};

export default ViewRecordProfileTable;
