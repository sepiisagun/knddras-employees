import {
	HStack,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Tfoot,
	Thead,
	Tr,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import spiels from "../../constants/spiels";
import {
	PATIENT_CHECKUP_HISTORY,
	VIEW_TREATMENT,
} from "../../constants/temporaryValues";

const CheckUpTreatmentModal = ({ id, isOpen, onClose }) => {
	const totalCost = VIEW_TREATMENT.reduce((acc, item) => acc + item.cost, 0);
	return (
		<Modal isCentered isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent maxW="fit-content">
				<ModalHeader>{spiels.TABLE_CHECKUP_HISTORY}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					{PATIENT_CHECKUP_HISTORY.map((item) => {
						if (item.id === id) {
							return (
								<HStack key={id} borderBottomWidth={1} py={4}>
									<VStack
										alignItems="start"
										paddingRight={16}
									>
										<HStack>
											<Text>{spiels.LABEL_NAME}</Text>
											<Text whiteSpace="nowrap">
												{item.name}
											</Text>
										</HStack>
										<HStack>
											<Text>{spiels.LABEL_DATE}</Text>
											<Text>{item.dateOperated}</Text>
										</HStack>
									</VStack>
									<VStack
										alignItems="start"
										width="fit-content"
									>
										<HStack>
											<Text whiteSpace="nowrap">
												{spiels.LABEL_ASSIGNED_TO}
											</Text>
											<Text whiteSpace="nowrap">
												{item.operatedBy}
											</Text>
										</HStack>
										<HStack>
											<Text>
												{
													spiels.LABEL_TRANSACTION_NUMBER
												}
											</Text>
											<Text>
												{item.transactionNumber}
											</Text>
										</HStack>
									</VStack>
								</HStack>
							);
						}
						return null;
					})}
					<TableContainer>
						<Table variant="simple">
							<Thead>
								<Tr>
									{spiels.TABLE_COLUMNS_TREATMENT_VIEW.map(
										(title, index) => {
											if (
												index ===
												spiels
													.TABLE_COLUMNS_TREATMENT_VIEW
													.length -
													1
											) {
												return (
													<Td
														key={title}
														px={0}
														textAlign="end"
													>
														{title.title}
													</Td>
												);
											}
											return (
												<Td
													key={title}
													px={0}
													width="fit-content"
												>
													{title.title}
												</Td>
											);
										},
									)}
								</Tr>
							</Thead>
							<Tbody>
								{VIEW_TREATMENT.map((item) => (
									<Tr key={item.key}>
										<Td borderWidth={0}>
											{item.toothNumber}
										</Td>
										<Td borderWidth={0} p={0}>
											{item.procedure}
										</Td>
										<Td
											borderWidth={0}
											p={0}
											textAlign="end"
										>
											{item.cost}
										</Td>
									</Tr>
								))}
							</Tbody>
							<Tfoot>
								<Tr borderTopWidth={1}>
									<Td borderWidth={0} px={0}>
										{spiels.LABEL_VIEW_TREATMENT_TOTAL}
									</Td>
									<Td borderWidth={0} />
									<Td borderWidth={0} px={0} textAlign="end">
										{totalCost}
									</Td>
								</Tr>
							</Tfoot>
						</Table>
					</TableContainer>
				</ModalBody>

				{/* <ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={onClose}>
						Close
					</Button>
					<Button variant="ghost">Secondary Action</Button>
				</ModalFooter> */}
			</ModalContent>
		</Modal>
	);
};

export default CheckUpTreatmentModal;
