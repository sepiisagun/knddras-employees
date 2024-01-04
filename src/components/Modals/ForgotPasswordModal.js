import Link from "next/link";
import { useMutation } from "react-query";
import { FormikProvider, useFormik } from "formik";

import {
	Button,
	Center,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Stack,
	Text,
	useToast,
} from "@chakra-ui/react";

import { forgotPassword } from "../../modules/auth/engine/auth.mutations";
import { emailSchema } from "../../modules/account/model/record.model";

import spiels from "../../constants/spiels";
import { showInfo } from "../../utils/notification";
import {
	notifSpiels,
	toastSuccessfulRecoveryMessage,
} from "../../constants/notificationSpiels";

const ForgotPasswordModal = ({ isOpenForgot, onCloseForgot }) => {
	const forgotPasswordMutation = useMutation(forgotPassword);
	const toast = useToast();

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			email: "",
		},
		onSubmit: async (data) => {
			forgotPasswordMutation
				.mutateAsync(data)
				.then(() => {
					onCloseForgot();
					showInfo(
						toast,
						toastSuccessfulRecoveryMessage(),
						notifSpiels.SUCCESS,
					);
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
		validationSchema: emailSchema,
	});

	const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
		formik;

	return (
		<Modal isCentered isOpen={isOpenForgot} onClose={onCloseForgot}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{spiels.FORM_FORGOT_PASSWORD}</ModalHeader>
				<ModalCloseButton mt={3} />
				<ModalBody>
					<Center>
						<Image
							alt="#"
							boxSize="20"
							rounded="lg"
							src="Klinika ng Dentista Logo.png"
						/>
					</Center>
					<Center>
						<Heading
							fontSize={{ base: "lg", md: "md" }}
							lineHeight={1.1}
							mb={5}
						>
							{spiels.SHOP_NAME}
						</Heading>
					</Center>

					<Stack py={3}>
						{/* Not sure how to get the reset link for this */}
						<Text align="center">
							You&apos;ll get an email with a reset link
						</Text>
					</Stack>

					<FormikProvider>
						<FormControl isInvalid={touched.email && errors.email}>
							<FormLabel
								fontSize="md"
								fontWeight="normal"
								ms="4px"
							>
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

						<Stack>
							<Button
								_hover={{
									bg: "blue.500",
								}}
								bg="blue.400"
								color="white"
								mt={2}
								onClick={handleSubmit}
							>
								{spiels.BUTTON_SEND_RESET_REQUEST}
							</Button>
						</Stack>
					</FormikProvider>

					{/* Registration Screen Needed for this */}
					<Stack py={5}>
						<Text align="center">
							New employee?{" "}
							<Link
								href="/register"
								onClick={() => onCloseForgot()}
								style={{ color: "#3182CE" }}
							>
								Create an Account{" "}
							</Link>
							now.
						</Text>
					</Stack>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default ForgotPasswordModal;
