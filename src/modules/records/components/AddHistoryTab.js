import {
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
	Select,
	SimpleGrid,
} from "@chakra-ui/react";
import React, { useState } from "react";
import spiels from "../../../constants/spiels";

const AddHistoryTab = ({ switchToNextTab, switchToPreviousTab }) => {
	const [prevDentistInput, setPrevDentistInput] = useState("");
	const [dentalVisitInput, setDentalVisitInput] = useState("");
	const [physicianNameInput, setPhysicianNameInput] = useState("");
	const [officeAddressInput, setOfficeAddressInput] = useState("");
	const [bleedingTimeInput, setBleedingTimeInput] = useState("");

	const handlePrevDentistInputChange = (e) =>
		setPrevDentistInput(e.target.value);
	const handleDentalVisitInputChange = (e) =>
		setDentalVisitInput(e.target.value);
	const handlePhysicianNameInputChange = (e) =>
		setPhysicianNameInput(e.target.value);
	const handleOfficeAddressInputChange = (e) =>
		setOfficeAddressInput(e.target.value);
	const handleBleedingTimeInputChange = (e) =>
		setBleedingTimeInput(e.target.value);

	const isPrevDentistError = prevDentistInput === "";
	const isDentalVisitError = dentalVisitInput === "";
	const isPhysicianNameError = physicianNameInput === "";
	const isOfficeAddressError = officeAddressInput === "";
	const isBleedingTimeError = bleedingTimeInput === "";

	return (
		<>
			<FormControl isInvalid={isPrevDentistError}>
				<Box pt={2}>
					<FormLabel>{spiels.FORM_PREV_DENTIST}</FormLabel>
					<Input
						onChange={handlePrevDentistInputChange}
						type="text"
						value={prevDentistInput}
					/>
					{!isPrevDentistError ? (
						<FormHelperText />
					) : (
						<FormErrorMessage>Error Message</FormErrorMessage>
					)}
				</Box>
			</FormControl>

			<FormControl isInvalid={isDentalVisitError}>
				<Box pt={2}>
					<FormLabel>{spiels.FORM_DENTAL_VISIT}</FormLabel>
					<Input
						onChange={handleDentalVisitInputChange}
						type="date"
						value={dentalVisitInput}
					/>
					{!isDentalVisitError ? (
						<FormHelperText />
					) : (
						<FormErrorMessage>Error Message</FormErrorMessage>
					)}
				</Box>
			</FormControl>

			<FormControl isInvalid={isPhysicianNameError}>
				<Box pt={2}>
					<FormLabel>{spiels.FORM_PHYSICIAN_NAME}</FormLabel>
					<Input
						onChange={handlePhysicianNameInputChange}
						type="text"
						value={physicianNameInput}
					/>
					{!isPhysicianNameError ? (
						<FormHelperText />
					) : (
						<FormErrorMessage>Error Message</FormErrorMessage>
					)}
				</Box>
			</FormControl>

			<FormControl isInvalid={isOfficeAddressError}>
				<Box pt={2}>
					<FormLabel>{spiels.FORM_OFFICE_ADDRESS}</FormLabel>
					<Input
						onChange={handleOfficeAddressInputChange}
						type="text"
						value={officeAddressInput}
					/>
					{!isOfficeAddressError ? (
						<FormHelperText />
					) : (
						<FormErrorMessage>Error Message</FormErrorMessage>
					)}
				</Box>
			</FormControl>

			<SimpleGrid columns={2} pt={2} spacing={10}>
				<FormControl>
					<Box>
						<FormLabel>{spiels.FORM_BLOOD_TYPE}</FormLabel>
						<Select>
							{spiels.FORM_BLOOD_TYPE_LIST.map(
								(bloodTypeItem) => (
									<option
										key={bloodTypeItem.value}
										value={bloodTypeItem.value}
									>
										{bloodTypeItem.value}
									</option>
								),
							)}
						</Select>
					</Box>
				</FormControl>

				<FormControl isInvalid={isBleedingTimeError}>
					<Box>
						<FormLabel>{spiels.FORM_BLEEDING_TIME}</FormLabel>
						<Input
							onChange={handleBleedingTimeInputChange}
							type="text"
							value={bleedingTimeInput}
						/>
						{!isBleedingTimeError ? (
							<FormHelperText />
						) : (
							<FormErrorMessage>Error Message</FormErrorMessage>
						)}
					</Box>
				</FormControl>
			</SimpleGrid>

			<Button
				colorScheme="blue"
				float="right"
				mt={10}
				onClick={switchToNextTab}
				size="sm"
				variant="solid"
			>
				{spiels.BUTTON_NEXT}
			</Button>
			<Button
				colorScheme="blue"
				float="right"
				mr={2}
				mt={10}
				onClick={switchToPreviousTab}
				size="sm"
				variant="outline"
			>
				{spiels.BUTTON_BACK}
			</Button>
		</>
	);
};

export default AddHistoryTab;
