import { useMutation } from "react-query";
import { FormikProvider, useFormik } from "formik";

import {
	Avatar,
	AvatarBadge,
	Box,
	Button,
	// eslint-disable-next-line no-unused-vars
	Divider,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Stack,
	Tabs,
	useToast,
} from "@chakra-ui/react";

import { changePassword } from "../../auth/engine/auth.mutations";
import { showSuccess } from "../../../utils/notification";
import spiels from "../../../constants/spiels";
import { ChangePasswordSchema } from "../model/record.model";
// eslint-disable-next-line no-unused-vars
import DeactivateAccountModal from "../../../components/Modals/DeactivateAccountModal";
import {
	notifSpiels,
	toastUpdateMessage,
} from "../../../constants/notificationSpiels";

const PasswordTab = () => {
	const updatePasswordMutation = useMutation(changePassword);
	const toast = useToast();
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			confirmPassword: "",
			currentPassword: "",
			password: "",
		},
		onSubmit: async (data, { resetForm }) => {
			const payload = {
				currentPassword: data.currentPassword,
				password: data.password,
				passwordConfirmation: data.confirmPassword,
			};
			updatePasswordMutation
				.mutateAsync(payload)
				.then(() => {
					resetForm();
					showSuccess(
						toast,
						toastUpdateMessage("password"),
						notifSpiels.SUCCESS,
					);
				})
				.catch((error) => {
					// display error
					// eslint-disable-next-line no-console
					console.log(error);
				});
		},
		validateOnBlur: true,
		validationSchema: ChangePasswordSchema,
	});

	const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
		formik;

	return (
		<Tabs>
			<FormControl>
				<Avatar mt={3} size="xl">
					<AvatarBadge bg="green.500" boxSize="1em" />
				</Avatar>
			</FormControl>

			<FormikProvider value={formik}>
				<FormControl
					isInvalid={
						touched.currentPassword && errors.currentPassword
					}
					isRequired
				>
					<Box pt={2}>
						<FormLabel>{spiels.FORM_OLD_PASSWORD}</FormLabel>
						<Input
							data-testid="currentPassword"
							id="currentPassword"
							name="currentPassword"
							onBlur={handleBlur}
							onChange={handleChange}
							type="password"
							value={values.currentPassword}
						/>
						<FormErrorMessage>
							{touched.currentPassword && errors.currentPassword}
						</FormErrorMessage>
					</Box>
				</FormControl>

				<FormControl
					isInvalid={touched.password && errors.password}
					isRequired
				>
					<Box pt={2}>
						<FormLabel>{spiels.FORM_NEW_PASSWORD}</FormLabel>
						<Input
							data-testid="password"
							id="password"
							name="password"
							onBlur={handleBlur}
							onChange={handleChange}
							type="password"
							value={values.password}
						/>
						<FormErrorMessage>
							{touched.password && errors.password}
						</FormErrorMessage>
					</Box>
				</FormControl>

				<FormControl
					isInvalid={
						touched.confirmPassword && errors.confirmPassword
					}
					isRequired
				>
					<Box pt={2}>
						<FormLabel>{spiels.FORM_CONFIRM_PASSWORD}</FormLabel>
						<Input
							data-testid="confirmPassword"
							id="confirmPassword"
							name="confirmPassword"
							onBlur={handleBlur}
							onChange={handleChange}
							type="password"
							value={values.confirmPassword}
						/>
						<FormErrorMessage>
							{touched.confirmPassword && errors.confirmPassword}
						</FormErrorMessage>
					</Box>
				</FormControl>

				<Stack>
					<FormControl>
						<Button
							colorScheme="blue"
							float="right"
							mt={5}
							size="sm"
							variant="outline"
						>
							{spiels.BUTTON_CANCEL}
						</Button>
						<Button
							colorScheme="blue"
							float="right"
							mr={2}
							mt={5}
							onClick={handleSubmit}
							size="sm"
							type="submit"
							variant="solid"
						>
							{spiels.BUTTON_SAVE}
						</Button>
					</FormControl>
				</Stack>
			</FormikProvider>
			{/* 
			<Divider my={4} />
			<DeactivateAccountModal /> */}
		</Tabs>
	);
};

export default PasswordTab;
