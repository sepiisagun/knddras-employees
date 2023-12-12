import { boolean, date, number, object, string } from "yup";

export const phoneLength = /^[-]*(?:.[-]*){7,12}$/;

export const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]?)|(\\([0-9]{2,3}\\)[ \\-]?)|([0-9]{2,4})[ \\-]?)*?[0-9]{3,4}?[ \\-]?[0-9]{3,4}?$/;

const recordSchema = {
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
	lastName: string().required("Please enter your last name"),
	middleInitial: string()
		.required("Please enter your middle initial")
		.max(1, "Maximum of one letter only"),
	minor: boolean(),
	mobileNumber: string()
		.matches(phoneLength, "Contact Number must be 7 to 12 character length")
		.matches(phoneRegExp, "Invalid Contact Number")
		.required("Please enter your contact number"),
	nationality: string().nullable(),
	occupation: string().nullable(),
	patient: number().required("Please select patient account."),
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
		.required("Please select your sex"),
};

const medicalSchema = {
	bleedTime: string().nullable(),
	bloodType: string()
		.oneOf(["A", "B", "AB", "O"], "Invalid blood type")
		.required("Please select your blood type."),
	lastVisit: date().nullable(),
	physicianAddress: string().required(
		"Please enter your previous physician's office address",
	),
	physicianName: string().required(
		"Please enter your previous physician's name",
	),
	previousDentist: string().required(
		"Please enter your previous dentist's name",
	),
};

export const fullRecordSchema = object().shape({
	...medicalSchema,
	...recordSchema,
});

export const initialValues = {
	address: "",
	advancedPeriodontitis: false,
	aidsHiv: false,
	anemia: false,
	anesthetics: false,
	angina: false,
	antibiotics: false,
	arthritisRheumatism: false,
	aspirin: false,
	asthma: false,
	birthdate: "",
	bleedTime: "",
	bleedingProblems: false,
	bloodDiseases: false,
	bloodType: "",
	cancerTumors: false,
	cephalometric: false,
	chestPain: false,
	clenching: false,
	clicking: false,
	crossbite: false,
	diabetes: false,
	earlyPeriodontitis: false,
	email: "",
	emphysema: false,
	epilepsyConvulsions: false,
	faintingSeizure: false,
	firstName: "",
	gingivitis: false,
	guardianName: "",
	hayFever: false,
	headInjuries: false,
	heartAttack: false,
	heartDisease: false,
	heartMurmur: false,
	heartSurgery: false,
	hepatitisJaundice: false,
	hepatitisLiverDisease: false,
	highBloodPressure: false,
	jointReplacementImplant: false,
	kidneyDisease: false,
	lastName: "",
	lastVisit: "",
	latex: false,
	lowBloodPressure: false,
	middleInitial: "",
	midlineDeviation: false,
	minor: false,
	mobileNumber: "",
	moderatePeriodontitis: false,
	molar: false,
	muscleSpasm: false,
	occlusal: false,
	occupation: "",
	orthodontic: false,
	other: "",
	overbite: false,
	overjet: false,
	panoramic: false,
	patient: "",
	periapical: false,
	physicianAddress: "",
	physicianName: "",
	previousDentist: "",
	radiationTheraphy: false,
	rapidWeightLoss: false,
	relation: "",
	respiratoryProblems: false,
	rheumaticFever: false,
	sex: "",
	stayplate: false,
	std: false,
	stomachTroublesUlcers: false,
	stroke: false,
	sulfa: false,
	swollenAnkles: false,
	thyroidProblem: false,
	trismus: false,
	tuberculosis: false,
};
