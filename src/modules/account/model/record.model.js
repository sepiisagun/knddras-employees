import { object, ref, string } from "yup";

export const phoneLength = /^[-]*(?:.[-]*){7,12}$/;
const lowerCaseRegex = /^(?=.*[a-z])/;
const upperCaseRegex = /^(?=.*[A-Z])/;
const numericRegex = "^(?=.*[0-9])";
const specialCharacterRegex = /^(?=.*[.!@#$%^&*])/;

export const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]?)|(\\([0-9]{2,3}\\)[ \\-]?)|([0-9]{2,4})[ \\-]?)*?[0-9]{3,4}?[ \\-]?[0-9]{3,4}?$/;

export const recordSchema = object().shape({
	email: string()
		.email("Please enter a valid email address")
		.required("Please enter your email address"),
	firstName: string().required("Please enter your first name"),

	lastName: string().required("Please enter your first name"),

	mobileNumber: string()
		.matches(phoneLength, "Contact Number must be 7 to 12 character length")
		.matches(phoneRegExp, "Invalid Contact Number")
		.required("Please enter your contact number"),
});

export const ChangePasswordSchema = object().shape({
	confirmPassword: string()
		.oneOf([ref("password"), null], "New passwords do not match.")
		.required("Please re-enter your new password."),
	currentPassword: string().required("Please enter your old password."),
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
		)
		.notOneOf(
			[ref("currentPassword")],
			"New Password cannot be the same as your old password.",
		)
		.required("Please enter your new password."),
});
