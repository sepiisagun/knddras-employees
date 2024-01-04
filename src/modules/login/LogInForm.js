import { useMutation } from "react-query";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import _ from "lodash";

import {
	Box,
	Button,
	Heading,
	useToast,
	useDisclosure,
	Stack,
	Checkbox,
} from "@chakra-ui/react";

import { login } from "../auth/engine/auth.mutations";
import {
	login as loginAction,
	setUserDetails,
} from "../auth/engine/auth.actions";
import { attachToken, detachToken } from "../../utils/api";

import { retrieveUserDetails } from "../auth/engine/auth.queries";

import loginValidator from "../auth/models/auth.model";

import { ENDPOINTS } from "../../constants/Endpoints";
import spiels from "../../constants/spiels";
import InputLayout from "../globalComponents/Forms/InputLayout";
import { loginErrorHandler, showSuccess } from "../../utils/notification";
import {
	notifSpiels,
	toastSuccessfulLoginMessage,
} from "../../constants/notificationSpiels";
import ForgotPasswordModal from "../../components/Modals/ForgotPasswordModal";

const LogInForm = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const loginMutation = useMutation(login);
	const toast = useToast();
	const {
		isOpen: isOpenForgot,
		onClose: onCloseForgot,
		onOpen: onOpenForgot,
	} = useDisclosure();

	const onSubmit = (values) => {
		loginMutation
			.mutateAsync(values)
			.then((data) => {
				attachToken(data.jwt);
				return Promise.all([retrieveUserDetails()]).then((result) => {
					dispatch(loginAction({ jwt: data.jwt, result: data }));

					return result;
				});
			})
			.then(([details]) => {
				dispatch(setUserDetails(details));
				const {
					data: { role },
				} = details;
				showSuccess(
					toast,
					toastSuccessfulLoginMessage("Logged in"),
					notifSpiels.SUCCESS,
				);
				if (_.get(role, "type") === "admin") {
					router.push(`${ENDPOINTS.EMPLOYEES}`);
				} else router.push(`${ENDPOINTS.DASHBOARD}`);
			})
			.catch((error) => {
				detachToken();
				loginErrorHandler(toast);
				// eslint-disable-next-line no-console
				console.log(error);
			});
	};

	const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
		useFormik({
			initialValues: {
				identifier: "",
				password: "",
			},
			onSubmit,
			validateOnChange: false,
			validationSchema: loginValidator,
		});

	const handleOpenForgot = () => {
		onOpenForgot();
	};

	return (
		<Box minW="400px">
			<Heading color={spiels.COLOR_TEAR}>
				{" "}
				{spiels.EMPLOYEE_PORTAL}
			</Heading>
			<Box color="gray.300" py="8px">
				{spiels.EMPLOYEE_PORTAL_SUBTITLE}
			</Box>
			<InputLayout
				errorMessage={touched.identifier && errors.identifier}
				formLbl={spiels.LABEL_EMAIL}
				handleBlur={handleBlur}
				handleChange={handleChange}
				invalid={touched.identifier && errors.identifier}
				name="identifier"
				placeholder={spiels.PLACEHOLDER_EMAIL}
				type="email"
				value={values.identifier}
			/>
			<InputLayout
				errorMessage={touched.password && errors.password}
				formLbl={spiels.LABEL_PASSWORD}
				handleBlur={handleBlur}
				handleChange={handleChange}
				invalid={touched.password && errors.password}
				name="password"
				placeholder={spiels.PLACEHOLDER_PASSWORD}
				type="password"
				value={values.password}
			/>
			<Stack spacing={5}>
				<Stack
					align="start"
					direction={{ base: "column", sm: "row" }}
					justify="space-between"
					pt={1}
					px={2}
				>
					<Checkbox>Remember me</Checkbox>
					<Button
						onClick={() => handleOpenForgot()}
						style={{
							background: "none",
							border: "none",
							color: "#3182CE",
							cursor: "pointer",
							fontWeight: "normal",
						}}
						variant="link"
					>
						{spiels.FORM_FORGOT_PASSWORD}?
					</Button>
				</Stack>
			</Stack>
			<ForgotPasswordModal
				isOpenForgot={isOpenForgot}
				onCloseForgot={onCloseForgot}
			/>
			<Button
				borderRadius="16px"
				colorScheme="teal"
				my="16px"
				onClick={handleSubmit}
				size="lg"
				w="100%"
			>
				{spiels.LABEL_SIGNIN}
			</Button>
		</Box>
	);
};

export default LogInForm;
