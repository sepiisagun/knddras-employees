/* eslint-disable indent */
import { useState } from "react";
import { useFormikContext } from "formik";
import _ from "lodash";

import { DateTime } from "luxon";

import {
	FormControl,
	FormErrorMessage,
	Select,
	Table,
	Tbody,
	Td,
	Text,
	Tr,
} from "@chakra-ui/react";

const AddTreatmentHeader = ({ appointmentData, patientName }) => {
	const { errors, setFieldValue, touched, values } = useFormikContext();
	const [selectedAppointment, setSelectedAppointment] = useState({});
	return (
		<Table variant="simple">
			<Tbody>
				<Tr>
					<Td pb={4} pt={0} px={1}>
						<Text fontWeight="bold">
							Name:{" "}
							<Text as="b" fontWeight="normal">
								{patientName}
							</Text>
						</Text>
						<Text fontWeight="bold">Appointment: </Text>
						<FormControl
							isInvalid={
								touched.appointment && errors.appointment
							}
						>
							<Select
								data-testid="tooth"
								id="tooth"
								name="tooth"
								onChange={(e) => {
									setFieldValue(
										"appointment",
										e.target.value,
										false,
									);
									setSelectedAppointment(
										_.find(appointmentData, [
											"id",
											parseInt(e.target.value, 10),
										]),
									);
								}}
								placeholder="- Select Patient Appointment -"
								size="sm"
								value={values.appointment}
							>
								{appointmentData.sort().map((appointment) => (
									<option
										key={appointment.id}
										value={appointment.id}
									>
										{DateTime.fromISO(
											appointment.date,
										).toFormat("MMMM d, yyyy")}
									</option>
								))}
							</Select>
						</FormControl>
						<FormErrorMessage>
							{touched.appointment && errors.appointment}
						</FormErrorMessage>
					</Td>

					<Td pb={4} pt={0} px={1}>
						<Text fontWeight="bold">
							Assigned To:{" "}
							<Text as="b" fontWeight="normal">
								{!_.isEmpty(selectedAppointment)
									? `${_.get(
											selectedAppointment,
											"doctor.data.firstName",
										)} ${_.get(
											selectedAppointment,
											"doctor.data.lastName",
										)}`
									: "-"}
							</Text>
						</Text>
						<Text fontWeight="bold">
							Transaction #:{" "}
							<Text as="b" fontWeight="normal">
								{!_.isEmpty(selectedAppointment)
									? `TRANS0000${_.get(
											selectedAppointment,
											"id",
										)}`
									: "-"}
							</Text>
						</Text>
					</Td>
				</Tr>
			</Tbody>
		</Table>
	);
};

export default AddTreatmentHeader;
