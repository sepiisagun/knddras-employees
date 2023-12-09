import { useFormikContext } from "formik";

import {
	Box,
	Checkbox,
	Divider,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Select,
	SimpleGrid,
	Stack,
} from "@chakra-ui/react";

import spiels from "../../../constants/spiels";

const AddPersonalInfoTab = () => {
	const { errors, handleBlur, handleChange, touched, values } =
		useFormikContext();

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
							placeholder="- Select Gender -"
							value={values.sex}
						>
							<option value="MALE">Male</option>
							<option value="FEMALE">Female</option>
							<option value="OTHER">Other</option>
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
						type="text"
						value={values.address}
					/>
					<FormErrorMessage>
						{touched.address && errors.address}
					</FormErrorMessage>
				</Box>
			</FormControl>

			<FormControl isInvalid={touched.email && errors.email}>
				<Box pt={2}>
					<FormLabel>{spiels.FORM_EMAIL_ADDRESS}</FormLabel>
					<Input
						data-testid="email"
						id="email"
						name="email"
						onBlur={handleBlur}
						onChange={handleChange}
						type="email"
						value={values.email}
					/>
					<FormErrorMessage>
						{touched.email && errors.email}
					</FormErrorMessage>
				</Box>
			</FormControl>
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
								<FormLabel>{spiels.FORM_OCCUPATION}</FormLabel>
								<Input
									data-testid="occupation"
									id="occupation"
									name="occupation"
									onBlur={handleBlur}
									onChange={handleChange}
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
