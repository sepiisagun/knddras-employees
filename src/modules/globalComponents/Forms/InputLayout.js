import {
	FormControl,
	FormLabel,
	Input,
	FormErrorMessage,
} from "@chakra-ui/react";
import React, { useState } from "react";
import spiels from "../../../constants/spiels";

const InputLayout = ({ formLbl, getValue, inputType, placeholderVal }) => {
	const [errMessage, setErrMessage] = useState("");
	const [input, setInput] = useState("");
	const [isValid, setIsValid] = useState(false);
	const handleInput = (e) => {
		const { value } = e.target;
		setInput(value);
		getValue(value);
	};
	const validateEmail = (value) => {
		// Regular expression for basic email validation
		const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

		// Check if the input value matches the email pattern
		const isValidEmail = emailRegex.test(value);

		// Update the state to reflect email validity
		setIsValid(!isValidEmail);
	};
	const errorIdentifier = () => {
		if (inputType === "email") {
			if (input === "") {
				setErrMessage(spiels.REQ_EMAIL);
				setIsValid(input === "");
			} else {
				validateEmail(input);
				setErrMessage(spiels.INCORRECT_EMAIL);
			}
		}
		if (inputType === "password") {
			if (input === "") {
				setErrMessage(spiels.REQ_PASSWORD);
				setIsValid(input === "");
			} else {
				setErrMessage(spiels.INCORRECT_PASSWORD);
				// Code here if the password does not match
				setIsValid(input === "");
			}
		}
	};
	// Styling
	const py = "16px";
	return (
		<FormControl isInvalid={isValid} py={py}>
			<FormLabel>{formLbl}</FormLabel>
			<Input
				onBlur={errorIdentifier}
				onChange={handleInput}
				placeholder={placeholderVal}
				type={inputType}
				value={input}
			/>
			{!isValid ? (
				<span />
			) : (
				<FormErrorMessage>{errMessage}</FormErrorMessage>
			)}
		</FormControl>
	);
};

export default InputLayout;
