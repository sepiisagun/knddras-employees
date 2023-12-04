import {
	Box,
	Button,
	Checkbox,
	Divider,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	FormLabel,
	Input,
	Select,
	SimpleGrid,
	Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import spiels from "../../../constants/spiels";
import { PATIENT_ACCOUNT } from "../../../constants/temporaryValues";

const AddPersonalInfoTab = ({ currentTab, switchToNextTab }) => {
	const [fnameInput, setFNameInput] = useState("");
	const [lnameInput, setLNameInput] = useState("");
	const [initialInput, setInitialInput] = useState("");
	const [birthdateInput, setBirthdateInput] = useState("");
	const [addressInput, setAddressInput] = useState("");
	const [guardianInput, setGuardianInput] = useState("");
	const [occupationInput, setOccupationInput] = useState("");
	const [relationshipInput, setRelationshipInput] = useState("");

	const handleFNameInputChange = (e) => setFNameInput(e.target.value);
	const handleLNameInputChange = (e) => setLNameInput(e.target.value);
	const handleInitialInputChange = (e) => setInitialInput(e.target.value);
	const handleBirthdateInputChange = (e) => setBirthdateInput(e.target.value);
	const handleAddressInputChange = (e) => setAddressInput(e.target.value);
	const handleGuardianInputChange = (e) => setGuardianInput(e.target.value);
	const handleOccupationInputChange = (e) =>
		setOccupationInput(e.target.value);
	const handleRelationshipInputChange = (e) =>
		setRelationshipInput(e.target.value);

	const isFNameError = fnameInput === "";
	const isLNameError = lnameInput === "";
	const isInitialError = initialInput === "";
	const isBirthdateError = birthdateInput === "";
	const isAddressError = addressInput === "";
	const isGuardianError = guardianInput === "";
	const isOccupationError = occupationInput === "";
	const isRelationshipError = relationshipInput === "";

	return (
		<>
			<SimpleGrid columns={2} spacing={10}>
				<FormControl isInvalid={isFNameError}>
					<Box>
						<FormLabel>{spiels.FORM_FNAME}</FormLabel>
						<Input
							onChange={handleFNameInputChange}
							type="text"
							value={fnameInput}
						/>
						{!isFNameError ? (
							<FormHelperText />
						) : (
							<FormErrorMessage>Error Message</FormErrorMessage>
						)}
					</Box>
				</FormControl>
				<FormControl isInvalid={isLNameError}>
					<Box>
						<FormLabel>{spiels.FORM_LNAME}</FormLabel>
						<Input
							onChange={handleLNameInputChange}
							type="text"
							value={lnameInput}
						/>
						{!isLNameError ? (
							<FormHelperText />
						) : (
							<FormErrorMessage>Error Message</FormErrorMessage>
						)}
					</Box>
				</FormControl>
			</SimpleGrid>

			<SimpleGrid columns={3} pt={2} spacing={10}>
				<FormControl isInvalid={isInitialError}>
					<Box>
						<FormLabel>{spiels.FORM_INITIAL}</FormLabel>
						<Input
							onChange={handleInitialInputChange}
							type="text"
							value={initialInput}
						/>
						{!isInitialError ? (
							<FormHelperText />
						) : (
							<FormErrorMessage>Error Message</FormErrorMessage>
						)}
					</Box>
				</FormControl>

				<FormControl>
					<Box>
						<FormLabel>{spiels.FORM_GENDER}</FormLabel>
						<Select>
							<option value="male">Male</option>
							<option value="female">Female</option>
						</Select>
					</Box>
				</FormControl>

				<FormControl isInvalid={isBirthdateError}>
					<Box>
						<FormLabel>{spiels.FORM_BIRTHDATE}</FormLabel>
						<Input
							onChange={handleBirthdateInputChange}
							type="date"
							value={birthdateInput}
						/>
						{!isBirthdateError ? (
							<FormHelperText />
						) : (
							<FormErrorMessage>Error Message</FormErrorMessage>
						)}
					</Box>
				</FormControl>
			</SimpleGrid>

			<FormControl>
				<Box>
					<FormLabel>{spiels.FORM_PATIENT_ACCOUNT}</FormLabel>
					<Select>
						{PATIENT_ACCOUNT.map((account) => (
							<option key={account.email} value={account.email}>
								{account.email}
							</option>
						))}
					</Select>
				</Box>
			</FormControl>
			<FormControl isInvalid={isAddressError}>
				<Box pt={2}>
					<FormLabel>{spiels.FORM_ADDRESS}</FormLabel>
					<Input
						onChange={handleAddressInputChange}
						type="text"
						value={addressInput}
					/>
					{!isAddressError ? (
						<FormHelperText />
					) : (
						<FormErrorMessage>Error Message</FormErrorMessage>
					)}
				</Box>
			</FormControl>

			<Divider mt={4} />
			<Stack direction="row">
				<Checkbox defaultChecked pt={2}>
					Is the patient minor?
				</Checkbox>
			</Stack>

			<FormControl isInvalid={isGuardianError}>
				<Box pt={2}>
					<FormLabel>{spiels.FORM_GUARDIAN}</FormLabel>
					<Input
						onChange={handleGuardianInputChange}
						type="text"
						value={guardianInput}
					/>
					{!isGuardianError ? (
						<FormHelperText />
					) : (
						<FormErrorMessage>Error Message</FormErrorMessage>
					)}
				</Box>
			</FormControl>

			<SimpleGrid columns={2} py={2} spacing={10}>
				<FormControl isInvalid={isOccupationError}>
					<Box>
						<FormLabel>{spiels.FORM_OCCUPATION}</FormLabel>
						<Input
							onChange={handleOccupationInputChange}
							type="text"
							value={occupationInput}
						/>
						{!isOccupationError ? (
							<FormHelperText />
						) : (
							<FormErrorMessage>Error Message</FormErrorMessage>
						)}
					</Box>
				</FormControl>
				<FormControl isInvalid={isRelationshipError}>
					<Box>
						<FormLabel>{spiels.FORM_RELATIONSHIP}</FormLabel>
						<Input
							onChange={handleRelationshipInputChange}
							type="text"
							value={relationshipInput}
						/>
						{!isRelationshipError ? (
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
				isDisabled={currentTab !== 0}
				mt={10}
				onClick={switchToNextTab}
				size="sm"
				variant="solid"
			>
				{spiels.BUTTON_NEXT}
			</Button>
		</>
	);
};

export default AddPersonalInfoTab;
