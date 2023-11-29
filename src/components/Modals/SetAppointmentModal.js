import {
	Box,
	Button,
	Card,
	CardHeader,
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
	useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import spiels from "../../constants/spiels";
import { APPOINTMENT_USERS } from "../../constants/temporaryValues";
import MiniStatistics from "../MiniStatisticsGlobalCount";
import WalletIcon from "../Icons/Icons";

const SetAppointmentModal = ({
	isOpenSetAppointment,
	onCloseSetAppointment,
	onOpenSetAppointment,
}) => {
	const [date, setDate] = useState("");
	const handleDateChange = (e) => setDate(e.target.value);
	const isDateError = date === "";

	const iconBoxInside = useColorModeValue("white", "white");

	return (
		<>
			<Card
				_hover={{
					bgColor: "gray.50",
				}}
				borderRadius="3xl"
				cursor="pointer"
				h="120px"
				onClick={onOpenSetAppointment}
				p="16px"
				variant="outline"
			>
				<CardHeader mb="1px">
					<MiniStatistics
						icon={
							<WalletIcon
								color={iconBoxInside}
								h="24px"
								w="24px"
							/>
						}
						title={spiels.COUNTER_ADD_APPOINTMENT}
					/>
				</CardHeader>
			</Card>

			<Modal
				isCentered
				isOpen={isOpenSetAppointment}
				onClose={onCloseSetAppointment}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{spiels.FORM_ADD_APPOINTMENT}</ModalHeader>
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
									{APPOINTMENT_USERS.map((patient) => (
										<option
											key={patient.name}
											value={patient.name}
										>
											{patient.name}
										</option>
									))}
								</Select>
							</Box>
						</FormControl>

						<FormControl mb={2}>
							<Box>
								<FormLabel>{spiels.FORM_PROCEDURE}</FormLabel>
								<Select>
									{APPOINTMENT_USERS.map((procedure) => (
										<option
											key={procedure.procedure}
											value={procedure.procedure}
										>
											{procedure.procedure}
										</option>
									))}
								</Select>
							</Box>
						</FormControl>

						<FormControl>
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
							colorScheme="blue"
							mr={3}
							onClick={onCloseSetAppointment}
							variant="solid"
						>
							{spiels.BUTTON_ADD}
						</Button>
						<Button
							colorScheme="blue"
							onClick={onCloseSetAppointment}
							variant="outline"
						>
							{spiels.BUTTON_CANCEL}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default SetAppointmentModal;
