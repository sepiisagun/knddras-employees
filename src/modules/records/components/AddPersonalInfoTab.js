import { useQuery } from "react-query";
import { useFormikContext } from "formik";
import _ from "lodash";

import {
	Box,
	Checkbox,
	Divider,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Select,
	SimpleGrid,
	Stack,
	Text,
	Tooltip,
} from "@chakra-ui/react";

import { retrieveUserAccounts } from "../engine/record.queries";

import spiels from "../../../constants/spiels";

const AddPersonalInfoTab = ({ formType }) => {
	const { errors, handleBlur, handleChange, setFieldValue, touched, values } =
		useFormikContext();

	const {
		data: { data = [] },
	} = useQuery({
		initialData: [],
		placeholderData: [],
		queryFn: retrieveUserAccounts,
		queryKey: ["users-email-data"],
	});

	return (
		<>
			<SimpleGrid columns={2} spacing={10}>
				<FormControl isInvalid={touched.firstName && errors.firstName}>
					<Box>
						<FormLabel>{spiels.FORM_FNAME}</FormLabel>
						<Input
							data-testid="firstName"
							id="firstName"
							name="firstName"
							onBlur={handleBlur}
							onChange={handleChange}
							placeholder={spiels.PLACEHOLDER_FIRST_NAME}
							type="text"
							value={values.firstName}
						/>
						<FormErrorMessage>
							{touched.firstName && errors.firstName}
						</FormErrorMessage>
					</Box>
				</FormControl>
				<FormControl isInvalid={touched.lastName && errors.lastName}>
					<Box>
						<FormLabel>{spiels.FORM_LNAME}</FormLabel>
						<Input
							data-testid="lastName"
							id="lastName"
							name="lastName"
							onBlur={handleBlur}
							onChange={handleChange}
							placeholder={spiels.PLACEHOLDER_LAST_NAME}
							type="text"
							value={values.lastName}
						/>
						<FormErrorMessage>
							{touched.lastName && errors.lastName}
						</FormErrorMessage>
					</Box>
				</FormControl>
			</SimpleGrid>

			<SimpleGrid columns={3} pt={2} spacing={10}>
				<FormControl
					isInvalid={touched.middleInitial && errors.middleInitial}
				>
					<Box>
						<FormLabel>{spiels.FORM_INITIAL}</FormLabel>
						<Input
							data-testid="middleInitial"
							id="middleInitial"
							name="middleInitial"
							onBlur={handleBlur}
							onChange={handleChange}
							placeholder={spiels.PLACEHOLDER_MIDDLE_INITIAL}
							type="text"
							value={values.middleInitial}
						/>
						<FormErrorMessage>
							{touched.middleInitial && errors.middleInitial}
						</FormErrorMessage>
					</Box>
				</FormControl>

				<FormControl isInvalid={touched.sex && errors.sex}>
					<Box>
						<FormLabel>{spiels.FORM_GENDER}</FormLabel>
						<Select
							data-testid="sex"
							id="sex"
							name="sex"
							onBlur={handleBlur}
							onChange={handleChange}
							placeholder="- Select Sex -"
							value={values.sex}
						>
							<option value="MALE">Male</option>
							<option value="FEMALE">Female</option>
						</Select>
					</Box>
					<FormErrorMessage>
						{touched.sex && errors.sex}
					</FormErrorMessage>
				</FormControl>

				<FormControl isInvalid={touched.birthdate && errors.birthdate}>
					<Box>
						<FormLabel>{spiels.FORM_BIRTHDATE}</FormLabel>
						<Input
							data-testid="birthdate"
							id="birthdate"
							name="birthdate"
							onBlur={handleBlur}
							onChange={handleChange}
							type="date"
							value={values.birthdate}
						/>
						<FormErrorMessage>
							{touched.birthdate && errors.birthdate}
						</FormErrorMessage>
					</Box>
				</FormControl>
			</SimpleGrid>

			<FormControl isInvalid={touched.address && errors.address}>
				<Box pt={2}>
					<FormLabel>{spiels.FORM_ADDRESS}</FormLabel>
					<Input
						data-testid="address"
						id="address"
						name="address"
						onBlur={handleBlur}
						onChange={handleChange}
						placeholder={spiels.PLACEHOLDER_ADDRESS}
						type="text"
						value={values.address}
					/>
					<FormErrorMessage>
						{touched.address && errors.address}
					</FormErrorMessage>
				</Box>
			</FormControl>

			{formType !== "Edit" && (
				<SimpleGrid columns={2} spacing={10}>
					<FormControl isInvalid={touched.patient && errors.patient}>
						<Box pt={2}>
							<FormLabel>{spiels.FORM_PATIENT}</FormLabel>
							<Select
								data-testid="patient"
								id="patient"
								name="patient"
								onBlur={handleBlur}
								onChange={(e) => {
									const user = _.find(
										data,
										// eslint-disable-next-line eqeqeq
										(item) => item.id == e.target.value,
									);
									setFieldValue("patient", _.get(user, "id"));
									setFieldValue(
										"email",
										_.get(user, "email"),
									);
								}}
								placeholder="- Select Patient -"
								value={values.patient}
							>
								{data.map((patient) => (
									<option key={patient.id} value={patient.id}>
										{_.get(patient, "firstName")}{" "}
										{_.get(patient, "lastName")}
									</option>
								))}
							</Select>
							<FormErrorMessage>
								{touched.patient && errors.patient}
							</FormErrorMessage>
						</Box>
					</FormControl>
					<FormControl isInvalid={touched.email && errors.email}>
						<Box pt={2}>
							<FormLabel>{spiels.FORM_EMAIL_ADDRESS}</FormLabel>
							<Tooltip hasArrow label="Automatically filled">
								<Input
									data-testid="email"
									id="email"
									isReadOnly
									name="email"
									placeholder={spiels.PLACEHOLDER_EMAIL}
									type="email"
									value={values.email}
								/>
							</Tooltip>
							<FormErrorMessage>
								{touched.email && errors.email}
							</FormErrorMessage>
						</Box>
					</FormControl>
				</SimpleGrid>
			)}

			<FormControl
				isInvalid={touched.mobileNumber && errors.mobileNumber}
			>
				<Box pt={2}>
					<FormLabel>{spiels.FORM_CONTACT_NO}</FormLabel>
					<Input
						data-testid="mobileNumber"
						id="mobileNumber"
						name="mobileNumber"
						onBlur={handleBlur}
						onChange={handleChange}
						placeholder={spiels.PLACEHOLDER_CONTACT_NUMBER}
						type="number"
						value={values.mobileNumber}
					/>
					<FormErrorMessage>
						{touched.mobileNumber && errors.mobileNumber}
					</FormErrorMessage>
				</Box>
			</FormControl>

			<Divider mt={4} />
			<Stack direction="row">
				<Checkbox
					data-testid="minor"
					id="minor"
					isChecked={values.minor}
					name="minor"
					onChange={handleChange}
					pt={2}
					value={values.minor}
				>
					Minor?
				</Checkbox>
			</Stack>

			{values.minor && (
				<>
					<FormControl
						isInvalid={touched.guardianName && errors.guardianName}
					>
						<Box pt={2}>
							<FormLabel>{spiels.FORM_GUARDIAN}</FormLabel>
							<Input
								data-testid="guardianName"
								id="guardianName"
								name="guardianName"
								onBlur={handleBlur}
								onChange={handleChange}
								placeholder={spiels.PLACEHOLDER_EMERGENCY_CONTACT}
								type="text"
								value={values.guardianName}
							/>
							<FormErrorMessage>
								{touched.guardianName && errors.guardianName}
							</FormErrorMessage>
						</Box>
					</FormControl>
					<SimpleGrid columns={2} py={2} spacing={10}>
						<FormControl
							isInvalid={touched.occupation && errors.occupation}
						>
							<Box>
								<FormLabel><Flex>{spiels.FORM_OCCUPATION} <Text fontWeight="normal" color="gray" px={1}>(Optional)</Text></Flex> </FormLabel>
								<Input
									data-testid="occupation"
									id="occupation"
									name="occupation"
									onBlur={handleBlur}
									onChange={handleChange}
									placeholder={spiels.PLACEHOLDER_OCCUPATION}
									type="text"
									value={values.occupation}
								/>
								<FormErrorMessage>
									{touched.occupation && errors.occupation}
								</FormErrorMessage>
							</Box>
						</FormControl>
						<FormControl
							isInvalid={touched.relation && errors.relation}
						>
							<Box>
								<FormLabel>
									{spiels.FORM_RELATIONSHIP}
								</FormLabel>
								<Input
									data-testid="relation"
									id="relation"
									name="relation"
									onBlur={handleBlur}
									onChange={handleChange}
									placeholder={spiels.PLACEHOLDER_RELATIONSHIP}
									type="text"
									value={values.relation}
								/>
								<FormErrorMessage>
									{touched.relation && errors.relation}
								</FormErrorMessage>
							</Box>
						</FormControl>
					</SimpleGrid>
				</>
			)}
		</>
	);
};

export default AddPersonalInfoTab;
