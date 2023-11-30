/* eslint-disable react/jsx-indent */
import React, { useState } from "react";
import {
	Box,
	Button,
	Heading,
	FormControl,
	FormLabel,
	Switch,
} from "@chakra-ui/react";
import spiels from "../../constants/spiels";
import InputLayout from "../globalComponents/Forms/InputLayout";

const LogInForm = ({ getStatus }) => {
	// Gets the email value typed from the InputLayout Component
	const [emailValue, setEmailValue] = useState("");
	const getEmailValue = (value) => {
		setEmailValue(value);
	};
	// Gets the email value typed from the InputLayout Component
	const [passValue, setpassValue] = useState("");
	const getPassValue = (value) => {
		setpassValue(value);
	};
	// Tests in the consolde if there are value fetched
	const onSignIn = () => {
		if (!emailValue || !passValue) {
			// eslint-disable-next-line no-alert
			alert("Empty fields detected!");
			return;
		}
		// eslint-disable-next-line no-console
		console.log(passValue, emailValue);
		getStatus(true);
	};
	// Styles
	const minW = "400px";
	const py = "16px";
	const colorTeal = spiels.COLOR_TEAR;
	return (
		<Box minW={minW}>
			<Heading color={colorTeal}> {spiels.EMPLOYEE_PORTAL}</Heading>
			<Box color="gray.300" py="8px">
				{spiels.EMPLOYEE_PORTAL_SUBTITLE}
			</Box>
			<InputLayout
				formLbl={spiels.LABEL_EMAIL}
				getValue={getEmailValue}
				inputType="email"
				placeholderVal={spiels.PLACEHOLDER_EMAIL}
			/>
			<InputLayout
				formLbl={spiels.LABEL_PASSWORD}
				getValue={getPassValue}
				inputType="password"
				placeholderVal={spiels.PLACEHOLDER_PASSWORD}
			/>
			<FormControl alignItems="center" display="flex" py={py}>
				<Switch colorScheme="teal" id="remember-me" />
				<FormLabel htmlFor="remember-me" mb="0" ml="4">
					{spiels.LABEL_REMEMBER}
				</FormLabel>
			</FormControl>
			<Button
				borderRadius={py}
				colorScheme="teal"
				my={py}
				onClick={onSignIn}
				size="lg"
				w="100%"
			>
				{spiels.LABEL_SIGNIN}
			</Button>
		</Box>
	);
};

export default LogInForm;
