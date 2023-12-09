import { boolean, date, object, ref, string } from "yup";

export const phoneLength = /^[-]*(?:.[-]*){7,12}$/;
const lowerCaseRegex = /^(?=.*[a-z])/;
const upperCaseRegex = /^(?=.*[A-Z])/;
const numericRegex = "^(?=.*[0-9])";
const specialCharacterRegex = /^(?=.*[.!@#$%^&*])/;

export const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]?)|(\\([0-9]{2,3}\\)[ \\-]?)|([0-9]{2,4})[ \\-]?)*?[0-9]{3,4}?[ \\-]?[0-9]{3,4}?$/;

export const recordSchema = object().shape({
	address: string().required("Please enter your address"),
	birthdate: date().required("Please enter your birthdate"),
	email: string()
		.email("Please enter a valid email address")
		.required("Please enter your email address"),
	firstName: string().required("Please enter your first name"),
	guardianName: string().when("minor", {
		is: true,
		then: () => string().required("Please enter your Guardian's full name"),
	}),
	lastName: string().required("Please enter your first name"),
	middleInitial: string()
		.required("Please enter your middleInitial")
		.max(1, "Maximum of one letter only"),
	minor: boolean(),
	mobileNumber: string()
		.matches(phoneLength, "Contact Number must be 7 to 12 character length")
		.matches(phoneRegExp, "Invalid Contact Number")
		.required("Please enter your contact number"),
	nationality: string().nullable(),
	occupation: string().nullable(),
	relation: string().when("minor", {
		is: true,
		then: () =>
			string().required(
				"Please enter your relationship with your Guardian.",
			),
	}),
	religion: string().nullable(),
	sex: string()
		.oneOf(["MALE", "FEMALE", "OTHER"], "Invalid selection")
		.required("Please select your sex."),
});

export const medicalSchema = object().shape({
	bleedTime: string().nullable(),
	bloodType: string()
		.oneOf(["A", "B", "AB", "O"], "Invalid blood type")
		.required("Please select your blood type."),
	lastVisit: date().nullable(),
	physicianAddress: string().required(
		"Please enter your previous dentist's name",
	),
	physicianName: string().required(
		"Please enter your previous dentist's name",
	),
	previousDentist: string().required(
		"Please enter your previous dentist's name",
	),
});
