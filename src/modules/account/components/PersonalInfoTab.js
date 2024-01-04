import { useSelector, useDispatch } from "react-redux";
import { useMutation } from "react-query";
import { FormikProvider, useFormik } from "formik";
import _ from "lodash";

import {
	Avatar,
	AvatarBadge,
	Box,
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	SimpleGrid,
	useToast,
} from "@chakra-ui/react";

import { retrieveUserDetails } from "../../auth/engine/auth.queries";

import { userDetailsSelector } from "../../auth/engine/auth.selectors";

import { accountSchema } from "../model/record.model";

import spiels from "../../../constants/spiels";
import { updateUser } from "../../auth/engine/auth.mutations";
import { showSuccess } from "../../../utils/notification";
import {
	notifSpiels,
	toastUpdateMessage,
} from "../../../constants/notificationSpiels";
import { setUserDetails } from "../../auth/engine/auth.actions";

const PersonalInfoTab = () => {
	const user = useSelector(userDetailsSelector);
	const dispatch = useDispatch();
	const toast = useToast();

	const updateAccountMutation = useMutation(updateUser);

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			email: _.get(user, "email"),
			emergencyContactName: _.get(user, "emergencyContact.name", ""),
			emergencyContactNumber: _.get(
				user,
				"emergencyContact.mobileNumber",
				"",
			),
			firstName: _.get(user, "firstName"),
			lastName: _.get(user, "lastName"),
			mobileNumber: _.get(user, "mobileNumber"),
		},
		onSubmit: async (data, { resetForm }) => {
			updateAccountMutation
				.mutateAsync({ data, id: _.get(user, "id") })
				.then(() => {
					showSuccess(
						toast,
						toastUpdateMessage("info"),
						notifSpiels.SUCCESS,
					);
					return Promise.all([retrieveUserDetails()]).then(
						(result) => {
							return result;
						},
					);
				})
				.then(([details]) => {
					dispatch(setUserDetails(details));
					resetForm();
				})
				.catch((error) => {
					// display error
					// eslint-disable-next-line no-console
					console.log(error);
				});
		},
		validateOnBlur: true,
		validateOnMount: true,
		validationSchema: accountSchema,
	});

	const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
		formik;

	return (
		<FormikProvider value={formik}>
			<FormControl>
				<Avatar my={3} size="xl">
					<AvatarBadge bg="green.500" boxSize="1em" />
				</Avatar>
			</FormControl>
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

			<FormControl isInvalid={touched.email && errors.email}>
				<Box pt={2}>
					<FormLabel>{spiels.FORM_EMAIL_ADDRESS}</FormLabel>
					<Input
						data-testid="email"
						id="email"
						name="email"
						onBlur={handleBlur}
						onChange={handleChange}
						placeholder={spiels.PLACEHOLDER_EMAIL}
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
						placeholder={spiels.PLACEHOLDER_CONTACT_NUMBER}
						type="number"
						value={values.mobileNumber}
					/>
					<FormErrorMessage>
						{touched.mobileNumber && errors.mobileNumber}
					</FormErrorMessage>
				</Box>
			</FormControl>
			<Box fontWeight="bold" py={5} textAlign="left">
				Emergency Contact
			</Box>
			<SimpleGrid columns={2} spacing={10}>
				<FormControl
					isInvalid={
						touched.emergencyContactName &&
						errors.emergencyContactName
					}
				>
					<Box>
						<FormLabel>{spiels.FORM_NAME}</FormLabel>
						<Input
							data-testid="emergencyContactName"
							id="emergencyContactName"
							name="emergencyContactName"
							onBlur={handleBlur}
							onChange={handleChange}
							placeholder={spiels.PLACEHOLDER_EMERGENCY_CONTACT}
							type="text"
							value={values.emergencyContactName}
						/>
						<FormErrorMessage>
							{touched.emergencyContactName &&
								errors.emergencyContactName}
						</FormErrorMessage>
					</Box>
				</FormControl>

				<FormControl
					isInvalid={
						touched.emergencyContactNumber &&
						errors.emergencyContactNumber
					}
				>
					<Box>
						<FormLabel>{spiels.FORM_CONTACT_NO}</FormLabel>
						<Input
							data-testid="emergencyContactNumber"
							id="emergencyContactNumber"
							name="emergencyContactNumber"
							onBlur={handleBlur}
							onChange={handleChange}
							placeholder={spiels.PLACEHOLDER_CONTACT_NUMBER}
							type="text"
							value={values.emergencyContactNumber}
						/>
						<FormErrorMessage>
							{touched.emergencyContactNumber &&
								errors.emergencyContactNumber}
						</FormErrorMessage>
					</Box>
				</FormControl>
			</SimpleGrid>
			<SimpleGrid rows={2} spacing={4}>
				<Box>
					<Button
						colorScheme="blue"
						float="right"
						mt={8}
						size="sm"
						variant="outline"
					>
						{spiels.BUTTON_CANCEL}
					</Button>
					<Button
						colorScheme="blue"
						float="right"
						mr={2}
						mt={8}
						onClick={handleSubmit}
						size="sm"
						type="submit"
						variant="solid"
					>
						{spiels.BUTTON_SAVE}
					</Button>
				</Box>
			</SimpleGrid>
		</FormikProvider>
	);
};

export default PersonalInfoTab;
