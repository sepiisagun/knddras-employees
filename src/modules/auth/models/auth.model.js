import { object, ref, string } from "yup";

const lowerCaseRegex = /^(?=.*[a-z])/;
const upperCaseRegex = /^(?=.*[A-Z])/;
const numericRegex = "^(?=.*[0-9])";
const specialCharacterRegex = /^(?=.*[.!@#$%^&*])/;

const commonSchema = {
	emailAddress: string()
		.email("Please enter a valid email address")
		.required("Please enter your email address"),
	password: string()
		.min(8, "The password must be at least eight (8) characters")
		.matches(
			lowerCaseRegex,
			"The password must contain at least one (1) lowercase alphabetical character",
		)
		.matches(
			upperCaseRegex,
			"The password must contain at least one (1) uppercase alphabetical character",
		)
		.matches(
			numericRegex,
			"The password must contain at least one (1) numeric character",
		)
		.matches(
			specialCharacterRegex,
			"The password must contain at least one (1) special character",
		),
};

export const userSchema = object().shape({
	...commonSchema,
	confirmPassword: string()
		.oneOf([ref("password"), null], "Passwords don't match")
		.required("Password must match"),
});

const schema = object().shape({
	identifier: string()
		.required("Please enter your email address")
		.email("Please enter a valid email address"),
	password: string().required("Please enter your password"),
});

export default schema;
