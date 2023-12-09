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
	useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import spiels from "../../../constants/spiels";
import {
	APPOINTMENT_USERS,
	PATIENT_INFORMATION_VIEW_REQUEST,
} from "../../../constants/temporaryValues";
import AppointmentRequestHeader from "../../../components/Modals/AppointmentRequestHeader";

const ViewRequestModal = () => {
	const [date, setDate] = useState("");
	const handleDateChange = (e) => setDate(e.target.value);
	const isDateError = date === "";
	const { isOpen, onClose, onOpen } = useDisclosure();
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

			<Modal isCentered isOpen={isOpen} onClose={onClose} size="lg">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{spiels.APPOINTMENT_REQUEST}</ModalHeader>
					<ModalCloseButton mt={2} />
					<ModalBody>
						<AppointmentRequestHeader
							patient={PATIENT_INFORMATION_VIEW_REQUEST}
						/>
						<FormControl my={5}>
							<Box>
								<FormLabel fontWeight="semibold">
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

						<FormControl isInvalid={isDateError} my={5}>
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
								<FormErrorMessage mb="24px" px={2}>
									Error Message
								</FormErrorMessage>
							)}
						</FormControl>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue" mx={1} variant="solid">
							{spiels.BUTTON_ACCEPT}
						</Button>
						<Button colorScheme="red" mx={1} variant="solid">
							{spiels.BUTTON_REJECT}
						</Button>
						<Button colorScheme="gray" mx={1} onClick={onClose}>
							{spiels.BUTTON_CANCEL}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ViewRequestModal;
