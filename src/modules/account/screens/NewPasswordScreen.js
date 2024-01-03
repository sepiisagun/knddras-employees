import { useSearchParams } from "next/navigation";
import { useMutation } from "react-query";
import { FormikProvider, useFormik } from "formik";

import {
	Button,
	Card,
	CardBody,
	Center,
	Container,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Heading,
	Image,
	Input,
	useToast,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { resetPassword } from "../../auth/engine/auth.mutations";
import { ChangePasswordSchema } from "../model/record.model";

import spiels from "../../../constants/spiels";
import { showSuccess } from "../../../utils/notification";
import {
	notifSpiels,
	toastUpdateMessage,
} from "../../../constants/notificationSpiels";

const NewPasswordScreen = () => {
	const searchParams = useSearchParams();
	const code = searchParams.get("code");
	const resetPasswordMutation = useMutation(resetPassword);
	const toast = useToast();
	const router = useRouter();

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			id: "",
		},
		onSubmit: async (data) => {
			const payload = {
				code,
				password: data.password,
				passwordConfirmation: data.passwordConfirmation,
			};
			resetPasswordMutation
				.mutateAsync({ ...payload })
				.then(() => {
					showSuccess(
						toast,
						toastUpdateMessage("password"),
						notifSpiels.SUCCESS,
					);
					router.push("/");
				})
				.catch((error) => {
					// display error
					// eslint-disable-next-line no-console
					console.log(error);
				});
		},
		validateOnBlur: true,
		validateOnMount: true,
		validationSchema: ChangePasswordSchema,
	});

	const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
		formik;

	return (
		<Container>
			<Center h="100vh">
				<Card w="lg">
					<CardBody>
						<Center>
							<Image
								alt="#"
								boxSize="20"
								rounded="lg"
								src="/Klinika ng Dentista Logo 2.png"
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

						<FormikProvider value={formik}>
							<FormControl
								isInvalid={touched.password && errors.password}
							>
								<FormLabel
									fontSize="md"
									fontWeight="normal"
									ms="4px"
								>
									{spiels.FORM_NEW_PASSWORD}
								</FormLabel>
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
							</FormControl>

							<FormControl
								isInvalid={
									touched.passwordConfirmation &&
									errors.passwordConfirmation
								}
								mt={1}
							>
								<FormLabel
									fontSize="md"
									fontWeight="normal"
									ms="4px"
								>
									{spiels.FORM_CONFIRM_PASSWORD}
								</FormLabel>
								<Input
									data-testid="passwordConfirmation"
									id="passwordConfirmation"
									name="passwordConfirmation"
									onBlur={handleBlur}
									onChange={handleChange}
									type="password"
									value={values.passwordConfirmation}
								/>
								<FormErrorMessage>
									{touched.passwordConfirmation &&
										errors.passwordConfirmation}
								</FormErrorMessage>
							</FormControl>
							<FormControl>
								<Button
									_active={{
										bg: "teal.400",
									}}
									_hover={{
										bg: "#3995EB",
									}}
									bg="#3182CE"
									color="white"
									fontSize="md"
									fontWeight="bold"
									h="45"
									mb="24px"
									mt={2}
									onClick={handleSubmit}
									type="submit"
									w="100%"
								>
									{spiels.BUTTON_SUBMIT}
								</Button>
							</FormControl>
						</FormikProvider>
					</CardBody>
				</Card>
			</Center>
		</Container>
	);
};

export default NewPasswordScreen;
