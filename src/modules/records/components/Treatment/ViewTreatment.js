import _ from "lodash";

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
	Th,
	Thead,
	Tr,
	useDisclosure,
} from "@chakra-ui/react";
import spiels from "../../../../constants/spiels";
// import StrapiTable from "../../../../components/Table";
import TreatmentBreakdownFee from "./TreatmentBreakdownFee";
import ViewTreatmentHeader from "./ViewTreatmentHeader";

const ViewTreatment = ({ data }) => {
	const {
		isOpen: isOpenViewTreatment,
		onClose: onCloseViewTreatment,
		onOpen: onOpenViewTreatment,
	} = useDisclosure();

	return (
		<>
			<Button
				colorScheme="blue"
				mx={1}
				onClick={onOpenViewTreatment}
				size="md"
				variant="link"
			>
				{spiels.BUTTON_VIEW}
			</Button>

			<Modal
				isCentered
				isOpen={isOpenViewTreatment}
				onClose={onCloseViewTreatment}
				size="2xl"
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{spiels.TABLE_CHECKUP_HISTORY}</ModalHeader>
					<ModalCloseButton mt={2} />
					<ModalBody>
						<TableContainer>
							<ViewTreatmentHeader data={data} />
							<StackDivider />
							<TableContainer>
								<Table variant="simple">
									<Thead>
										<Tr>
											<Th>Tooth No.</Th>
											<Th>Procedure</Th>
											<Th isNumeric>Cost</Th>
										</Tr>
									</Thead>
									<Tbody>
										<Tr>
											<Td>
												<Text>
													{_.get(
														data,
														"toothOperated",
													)}
												</Text>
											</Td>
											<Td>
												<Text>
													{_.get(
														data,
														"procedure.data.name",
													)}
												</Text>{" "}
											</Td>
											<Td isNumeric>
												<Text>
													{`₱   ${_.get(
														data,
														"procedure.data.price",
													)}`}
												</Text>
											</Td>
										</Tr>
									</Tbody>
								</Table>
							</TableContainer>
							<StackDivider />
							<Table mt={6} size="sm">
								<TreatmentBreakdownFee
									amount={_.get(data, "procedure.data.price")}
								/>
							</Table>
						</TableContainer>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ViewTreatment;
