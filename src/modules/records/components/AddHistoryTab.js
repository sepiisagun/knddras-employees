import { useFormikContext } from "formik";

import {
	Box,
	Checkbox,
	Divider,
	Flex,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Input,
	Select,
	SimpleGrid,
	Stack,
	Table,
	Td,
	Text,
} from "@chakra-ui/react";
import spiels from "../../../constants/spiels";

const AddHistoryTab = () => {
	const { errors, handleBlur, handleChange, touched, values } =
		useFormikContext();
	return (
		<>
			<FormControl
				isInvalid={touched.previousDentist && errors.previousDentist}
			>
				<Box pt={2}>
					<FormLabel>{spiels.FORM_PREV_DENTIST}</FormLabel>
					<Input
						data-testid="previousDentist"
						id="previousDentist"
						name="previousDentist"
						onBlur={handleBlur}
						onChange={handleChange}
						type="text"
						value={values.previousDentist}
					/>
					<FormErrorMessage>
						{touched.previousDentist && errors.previousDentist}
					</FormErrorMessage>
				</Box>
			</FormControl>

			<FormControl isInvalid={touched.lastVisit && errors.lastVisit}>
				<Box pt={2}>
					<FormLabel>{spiels.FORM_PREV_DENTIST}</FormLabel>
					<Input
						data-testid="lastVisit"
						id="lastVisit"
						name="lastVisit"
						onBlur={handleBlur}
						onChange={handleChange}
						type="date"
						value={values.lastVisit}
					/>
					<FormErrorMessage>
						{touched.lastVisit && errors.lastVisit}
					</FormErrorMessage>
				</Box>
			</FormControl>

			<FormControl
				isInvalid={touched.physicianName && errors.physicianName}
			>
				<Box pt={2}>
					<FormLabel>{spiels.FORM_PHYSICIAN_NAME}</FormLabel>
					<Input
						data-testid="physicianName"
						id="physicianName"
						name="physicianName"
						onBlur={handleBlur}
						onChange={handleChange}
						type="text"
						value={values.physicianName}
					/>
					<FormErrorMessage>
						{touched.physicianName && errors.physicianName}
					</FormErrorMessage>
				</Box>
			</FormControl>

			<FormControl
				isInvalid={touched.physicianAddress && errors.physicianAddress}
			>
				<Box pt={2}>
					<FormLabel>{spiels.FORM_OFFICE_ADDRESS}</FormLabel>
					<Input
						data-testid="physicianAddress"
						id="physicianAddress"
						name="physicianAddress"
						onBlur={handleBlur}
						onChange={handleChange}
						type="text"
						value={values.physicianAddress}
					/>
					<FormErrorMessage>
						{touched.physicianAddress && errors.physicianAddress}
					</FormErrorMessage>
				</Box>
			</FormControl>

			<SimpleGrid columns={2} pt={2} spacing={10}>
				<FormControl isInvalid={touched.bloodType && errors.bloodType}>
					<Box>
						<FormLabel>{spiels.FORM_BLOOD_TYPE}</FormLabel>
						<Select
							data-testid="bloodType"
							id="bloodType"
							name="bloodType"
							onBlur={handleBlur}
							onChange={handleChange}
							placeholder="- Select Blood Type -"
							value={values.bloodType}
						>
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
						<FormErrorMessage>
							{touched.bloodType && errors.bloodType}
						</FormErrorMessage>
					</Box>
				</FormControl>

				<FormControl isInvalid={touched.bleedTime && errors.bleedTime}>
					<Box>
						<FormLabel>{spiels.FORM_BLEEDING_TIME}</FormLabel>
						<Input
							data-testid="bleedTime"
							id="bleedTime"
							name="bleedTime"
							onBlur={handleBlur}
							onChange={handleChange}
							type="text"
							value={values.bleedTime}
						/>
						<FormErrorMessage>
							{touched.bleedTime && errors.bleedTime}
						</FormErrorMessage>
					</Box>
				</FormControl>
			</SimpleGrid>

			<Divider my={4} />
			<Heading as="h2" size="sm">
				Allergies
			</Heading>
			<Table>
				<Td pl={0}>
					<Stack>
						<FormControl
							isInvalid={
								touched.anesthetics && errors.anesthetics
							}
						>
							<Checkbox
								data-testid="anesthetics"
								id="anesthetics"
								isChecked={values.anesthetics}
								name="anesthetics"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.anesthetics}
							>
								{spiels.FORM_ALLERGIES_ANESTHETICS}
							</Checkbox>
							<FormErrorMessage>
								{touched.anesthetics && errors.anesthetics}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.antibiotics && errors.antibiotics
							}
						>
							<Flex align="center">
								<Checkbox
									data-testid="antibiotics"
									id="antibiotics"
									isChecked={values.antibiotics}
									name="antibiotics"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.antibiotics}
								>
									{spiels.FORM_ALLERGIES_ANTIBIOTICS}
								</Checkbox>
								<FormErrorMessage>
									{touched.antibiotics && errors.antibiotics}
								</FormErrorMessage>
							</Flex>
						</FormControl>

						<FormControl isInvalid={touched.latex && errors.latex}>
							<Flex align="center">
								<Checkbox
									data-testid="latex"
									id="latex"
									isChecked={values.latex}
									name="latex"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.latex}
								>
									{spiels.FORM_ALLERGIES_LATEX}
								</Checkbox>
								<FormErrorMessage>
									{touched.latex && errors.latex}
								</FormErrorMessage>
							</Flex>
						</FormControl>
					</Stack>
				</Td>

				<Td>
					<Stack>
						<FormControl isInvalid={touched.sulfa && errors.sulfa}>
							<Flex align="center">
								<Checkbox
									data-testid="sulfa"
									id="sulfa"
									isChecked={values.sulfa}
									mr={2}
									name="sulfa"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.sulfa}
								>
									{spiels.FORM_ALLERGIES_SULFA}
								</Checkbox>
								<FormErrorMessage>
									{touched.sulfa && errors.sulfa}
								</FormErrorMessage>
							</Flex>
						</FormControl>

						<FormControl
							isInvalid={touched.aspirin && errors.aspirin}
						>
							<Flex align="center">
								<Checkbox
									data-testid="aspirin"
									id="aspirin"
									isChecked={values.aspirin}
									mr={2}
									name="aspirin"
									onBlur={handleBlur}
									onChange={handleChange}
									value={values.aspirin}
								>
									{spiels.FORM_ALLERGIES_ASPIRIN}
								</Checkbox>
								<FormErrorMessage>
									{touched.aspirin && errors.aspirin}
								</FormErrorMessage>
							</Flex>
						</FormControl>

						<FormControl isInvalid={touched.other && errors.other}>
							<Text key="1">
								{spiels.FORM_OTHER}{" "}
								<Input
									data-testid="other"
									id="other"
									name="other"
									onBlur={handleBlur}
									onChange={handleChange}
									size="sm"
									type="text"
									value={values.other}
									width="auto"
								/>
								<FormErrorMessage>
									{touched.other && errors.other}
								</FormErrorMessage>
							</Text>
						</FormControl>
					</Stack>
				</Td>
			</Table>
		</>
	);
};

export default AddHistoryTab;
