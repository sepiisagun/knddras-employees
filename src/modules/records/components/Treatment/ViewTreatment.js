import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	StackDivider,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Tr,
	useDisclosure,
} from "@chakra-ui/react";
import spiels from "../../../../constants/spiels";
import { PATIENT_CHECKUP_HISTORY } from "../../../../constants/temporaryValues";
import StrapiTable from "../../../../components/Table";

const ViewTreatment = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const patient = PATIENT_CHECKUP_HISTORY[0];
	return (
		<>
			<Button
				colorScheme="blue"
				float="right"
				mx={1}
				onClick={onOpen}
				size="md"
				variant="link"
			>
				{spiels.BUTTON_VIEW}
			</Button>

			<Modal isCentered isOpen={isOpen} onClose={onClose} size="2xl">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{spiels.TABLE_CHECKUP_HISTORY}</ModalHeader>
					<ModalCloseButton mt={2} />
					<ModalBody>
						<TableContainer>
							<Table variant="simple">
								<Tbody>
									<Tr>
										<Td>
											<Text fontWeight="normal">
												Name: {patient.name}
											</Text>
											<Text fontWeight="normal">
												Date: {patient.dateOperated}
											</Text>
										</Td>

										<Td>
											<Text fontWeight="normal">
												Assigned To:{" "}
												{patient.operatedBy}
											</Text>
											<Text fontWeight="normal">
												Transaction #:{" "}
												{patient.transactionNumber}
											</Text>
										</Td>
									</Tr>
								</Tbody>
							</Table>
							<StrapiTable
								action={["View"]}
								headerTitles={[
									"Tooth No.",
									"Procedure",
									"Cost",
								]}
								title="ViewTreatment"
							/>
							<StackDivider />
							<Table variant="simple">
								<Tbody>
									<Tr>
										<Td>
											<Text fontWeight="normal">
												Total
											</Text>
										</Td>

										<Td>
											<Text
												fontWeight="normal"
												textAlign="right"
											>
												₱{patient.totalFee}
											</Text>
										</Td>
									</Tr>
								</Tbody>
							</Table>
						</TableContainer>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ViewTreatment;
