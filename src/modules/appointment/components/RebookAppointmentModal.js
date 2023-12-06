import {
	Box,
	Button,
	Divider,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Select,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Tr,
	useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import spiels from "../../../constants/spiels";
import { APPOINTMENT_USERS } from "../../../constants/temporaryValues";

const RebookAppointmentModal = () => {
	const [date, setDate] = useState("");
	const handleDateChange = (e) => setDate(e.target.value);
	const isDateError = date === "";
	const { isOpen, onClose, onOpen } = useDisclosure();
	const patient = APPOINTMENT_USERS[0];
	return (
		<>
			<Button
				colorScheme="blue"
				float="right"
				mx={1}
				onClick={onOpen}
				size="md"
				variant="solid"
			>
				{spiels.BUTTON_RESCHEDULE}
			</Button>

			<Modal isCentered isOpen={isOpen} onClose={onClose} size="2xl">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{spiels.REBOOK_APPOINTMENT}</ModalHeader>
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
												Procedure: {patient.procedure}
											</Text>
											<FormControl my={5}>
												<Box>
													<FormLabel fontWeight="semibold">
														{
															spiels.FORM_ASSIGN_DENTIST
														}
													</FormLabel>
													<Select>
														{APPOINTMENT_USERS.map(
															(dentist) => (
																<option
																	key={
																		dentist.dentist
																	}
																	value={
																		dentist.dentist
																	}
																>
																	{
																		dentist.dentist
																	}
																</option>
															),
														)}
													</Select>
												</Box>
											</FormControl>
										</Td>

										<Td>
											<Text fontWeight="normal">
												Original Schedule:{" "}
											</Text>
											<Text fontWeight="normal">
												March 02, 2020 at {patient.time}
											</Text>
											<FormControl
												isInvalid={isDateError}
												my={5}
											>
												<FormLabel fontWeight="semibold">
													{spiels.FORM_DATE}
												</FormLabel>
												<Input
													borderRadius="md"
													fontSize="sm"
													ms="4px"
													onChange={handleDateChange}
													size="lg"
													type="datetime-local"
													value={date}
												/>
												{!isDateError ? (
													<FormHelperText />
												) : (
													<FormErrorMessage
														mb="24px"
														px={2}
													>
														Error Message
													</FormErrorMessage>
												)}
											</FormControl>
										</Td>
										<Divider borderWidth="4" color="red" />
									</Tr>
								</Tbody>
							</Table>
						</TableContainer>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="gray" mr={3} onClick={onClose}>
							{spiels.BUTTON_CANCEL}
						</Button>
						<Button colorScheme="blue" variant="solid">
							{spiels.BUTTON_UPDATE}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default RebookAppointmentModal;
