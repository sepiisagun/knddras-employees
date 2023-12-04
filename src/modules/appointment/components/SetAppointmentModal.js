import {
	Box,
	Button,
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
} from "@chakra-ui/react";
import React, { useState } from "react";
import spiels from "../../../constants/spiels";
import {
	APPOINTMENT_USERS,
	PROCEDURE,
} from "../../../constants/temporaryValues";

const SetAppointmentModal = ({ isOpenModal, onCloseModal, onOpenModal }) => {
	const [date, setDate] = useState("");

	const handleDateChange = (e) => setDate(e.target.value);

	const isDateError = date === "";

	return (
		<>
			<Button
				colorScheme="teal"
				onClick={onOpenModal}
				px={5}
				w="fit-content"
			>
				{spiels.BUTTON_ADD_APPOINTMENT}
			</Button>

			<Modal isCentered isOpen={isOpenModal} onClose={onCloseModal}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{spiels.BUTTON_ADD_APPOINTMENT}</ModalHeader>
					<ModalCloseButton mt={3} />
					<ModalBody>
						<FormControl isInvalid={isDateError}>
							<FormLabel>{spiels.FORM_DATE}</FormLabel>
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
								<FormErrorMessage mb="24px" px={2}>
									Error Message
								</FormErrorMessage>
							)}
						</FormControl>
						<FormControl mb={2}>
							<Box>
								<FormLabel>
									{spiels.FORM_SELECT_PATIENT}
								</FormLabel>
								<Select>
									{APPOINTMENT_USERS.map((user) => (
										<option
											key={user.name}
											value={user.name}
										>
											{user.name}
										</option>
									))}
								</Select>
							</Box>
						</FormControl>
						<FormControl mb={2}>
							<Box>
								<FormLabel>{spiels.FORM_PROCEDURE}</FormLabel>
								<Select>
									{PROCEDURE.map((procedureItem) => (
										<option
											key={procedureItem.procedure}
											value={procedureItem.procedure}
										>
											{procedureItem.procedure}
										</option>
									))}
								</Select>
							</Box>
						</FormControl>
						<FormControl mb={2}>
							<Box>
								<FormLabel>
									{spiels.FORM_ASSIGN_DENTIST}
								</FormLabel>
								<Select>
									{APPOINTMENT_USERS.map((dentist) => (
										<option
											key={dentist.dentist}
											value={dentist.dentist}
										>
											{dentist.dentist}
										</option>
									))}
								</Select>
							</Box>
						</FormControl>
					</ModalBody>
					<ModalFooter>
						<Button
							colorScheme="gray"
							mr={3}
							onClick={onCloseModal}
						>
							{spiels.BUTTON_CANCEL}
						</Button>
						<Button colorScheme="blue" variant="solid">
							{spiels.BUTTON_SUBMIT}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default SetAppointmentModal;
