import { useMutation, useQueryClient } from "react-query";
import { FormikProvider, useFormik } from "formik";
import _ from "lodash";

import {
	Box,
	Button,
	Divider,
	FormControl,
	FormErrorMessage,
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
	SimpleGrid,
	Stack,
	Switch,
	Text,
	useDisclosure,
} from "@chakra-ui/react";

import spiels from "../../constants/spiels";
// import { APPOINTMENT_USERS } from "../../constants/temporaryValues";

import {
	createUser,
	updateUser,
} from "../../modules/auth/engine/auth.mutations";

const EmployeeModal = ({ location, userData = {} }) => {
	const queryClient = useQueryClient();
	const createEmployeeMutation = useMutation(createUser);
	const updateEmployeeMutation = useMutation(updateUser);

	const {
		isOpen: isOpenSetAppointment,
		onClose: onCloseSetAppointment,
		onOpen: onOpenSetAppointment,
	} = useDisclosure();

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			blocked: _.get(userData, "blocked", false),
			email: _.get(userData, "email", ""),
			firstName: _.get(userData, "firstName", ""),
			lastName: _.get(userData, "lastName", ""),
			mobileNumber: _.get(userData, "mobileNumber", ""),
			role: _.get(userData, "role.id", ""),
		},
		onSubmit: async (data, { resetForm }) => {
			const creteaPayload = {
				email: data.email,
				firstName: data.firstName,
				lastName: data.lastName,
				mobileNumber: data.mobileNumber,
				role: data.role,
			};
			if (location === "Add") {
				createEmployeeMutation
					.mutateAsync({ data: creteaPayload })
					.then(() => {
						queryClient.invalidateQueries({
							queryKey: ["employees-data"],
						});
						resetForm();
						onCloseSetAppointment();

						// go to success page
					})
					.catch((error) => {
						// display error
						// eslint-disable-next-line no-console
						console.log(error);
					});
			} else {
				updateEmployeeMutation
					.mutateAsync({ data, id: _.get(userData, "id") })
					.then(() => {
						queryClient.invalidateQueries({
							queryKey: ["employees-data"],
						});
						resetForm();
						onCloseSetAppointment();

						// go to success page
					})
					.catch((error) => {
						// display error
						// eslint-disable-next-line no-console
						console.log(error);
					});
			}
		},
	});

	const {
		errors,
		handleBlur,
		handleChange,
		handleSubmit,
		resetForm,
		touched,
		values,
	} = formik;

	return (
		<>
			{location === "Add" ? (
				<Button
					colorScheme="teal"
					onClick={onOpenSetAppointment}
					px={5}
					w="fit-content"
				>
					{spiels.BUTTON_ADD_EMPLOYEE}
				</Button>
			) : (
				<Button bg="transparent" p="0px" variant="no-hover">
					<Text
						color="gray.400"
						cursor="pointer"
						fontSize="md"
						fontWeight="bold"
						onClick={onOpenSetAppointment}
					>
						Edit
					</Text>
				</Button>
			)}

			<Modal
				isCentered
				isOpen={isOpenSetAppointment}
				onClose={onCloseSetAppointment}
				size="xl"
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{spiels.FORM_ADD_EMPLOYEE}</ModalHeader>
					<ModalCloseButton mt={3} />
					<ModalBody>
						<FormikProvider value={formik}>
							<SimpleGrid columns={2} spacing={10}>
								<FormControl
									isInvalid={
										touched.firstName && errors.firstName
									}
								>
									<Box>
										<FormLabel>
											{spiels.FORM_FNAME}
										</FormLabel>
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
											{touched.firstName &&
												errors.firstName}
										</FormErrorMessage>
									</Box>
								</FormControl>
								<FormControl
									isInvalid={
										touched.lastName && errors.lastName
									}
								>
									<Box>
										<FormLabel>
											{spiels.FORM_LNAME}
										</FormLabel>
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
											{touched.lastName &&
												errors.lastName}
										</FormErrorMessage>
									</Box>
								</FormControl>
							</SimpleGrid>
							<FormControl
								isInvalid={touched.email && errors.email}
							>
								<FormLabel>
									{spiels.FORM_EMAIL_ADDRESS}
								</FormLabel>
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
							</FormControl>
							<SimpleGrid columns={2} spacing={10}>
								<FormControl
									isInvalid={touched.role && errors.role}
									mb={2}
								>
									<Box>
										<FormLabel>
											{spiels.FORM_SELECT_ROLE}
										</FormLabel>
										<Select
											data-testid="role"
											id="role"
											name="role"
											onBlur={handleBlur}
											onChange={handleChange}
											placeholder="- Select Role -"
											value={values.role}
										>
											{spiels.FORM_EMPLOYEE_ROLES.map(
												(role) => (
													<option
														key={role.value}
														value={role.value}
													>
														{_.get(role, "label")}
													</option>
												),
											)}
										</Select>
									</Box>
									<FormErrorMessage>
										{touched.role && errors.role}
									</FormErrorMessage>
								</FormControl>

								<FormControl
									isInvalid={
										touched.mobileNumber &&
										errors.mobileNumber
									}
								>
									<Box>
										<FormLabel>
											{spiels.FORM_CONTACT_NO}
										</FormLabel>
										<Input
											data-testid="mobileNumber"
											id="mobileNumber"
											name="mobileNumber"
											onBlur={handleBlur}
											onChange={handleChange}
											type="text"
											value={values.mobileNumber}
										/>
										<FormErrorMessage>
											{touched.mobileNumber &&
												errors.mobileNumber}
										</FormErrorMessage>
									</Box>
								</FormControl>
							</SimpleGrid>
							<Divider mt={4} />
							<Stack direction="row">
								<Switch
									data-testid="blocked"
									id="blocked"
									isChecked={values.blocked}
									name="blocked"
									onChange={handleChange}
									pt={2}
									value={values.blocked}
								>
									Block User?
								</Switch>
							</Stack>
						</FormikProvider>
					</ModalBody>
					<ModalFooter>
						<Button
							colorScheme="blue"
							mr={3}
							onClick={handleSubmit}
							variant="solid"
						>
							{spiels.BUTTON_ADD}
						</Button>
						<Button
							colorScheme="blue"
							onClick={() => {
								resetForm();
								onCloseSetAppointment();
							}}
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

export default EmployeeModal;
