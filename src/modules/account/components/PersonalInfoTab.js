import { useSelector } from "react-redux";
import { useQueryClient, useMutation } from "react-query";
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
} from "@chakra-ui/react";

import { userDetailsSelector } from "../../auth/engine/auth.selectors";

import { updateUser } from "../../auth/engine/auth.mutations";

import { recordSchema } from "../model/record.model";

import spiels from "../../../constants/spiels";

const PersonalInfoTab = () => {
	const user = useSelector(userDetailsSelector);
	const queryClient = useQueryClient();

	const updateAccountMutation = useMutation(updateUser);

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			email: _.get(user, "email"),
			firstName: _.get(user, "firstName"),
			lastName: _.get(user, "lastName"),
			mobileNumber: _.get(user, "mobileNumber"),
		},
		onSubmit: async (data, { resetForm }) => {
			updateAccountMutation
				.mutateAsync({ data, id: _.get(user, "id") })
				.then(() => {
					queryClient.invalidateQueries({ queryKey: "record" });
					resetForm();
					// go to success page
				})
				.catch((error) => {
					// display error
					// eslint-disable-next-line no-console
					console.log(error);
				});
		},
		validateOnBlur: true,
		validateOnMount: true,
		validationSchema: recordSchema,
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
