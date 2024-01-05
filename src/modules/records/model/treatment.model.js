import { object, string } from "yup";

const treatmentSchema = object().shape({
	appointment: string().required("Please select an appointment."),
	tooth: string().required("Please select a tooth number."),
	treatment: string().required("Please select a procedure."),
});

export default treatmentSchema;
