import { date, object, string } from "yup";
import { DateTime } from "luxon";

const appointmentSchema = object().shape({
	date: date()
		.min(DateTime.now(), "Appointment date must be at least 1 day from now")
		.required("Please select a date and time for the appointment."),
	doctor: string().required("Please select a dentist."),
	patient: string().required("Please select a patient."),
});

export default appointmentSchema;
