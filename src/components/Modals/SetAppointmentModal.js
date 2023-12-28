import { useMutation, useQuery, useQueryClient } from "react-query";
import { FormikProvider, useFormik } from "formik";
import _ from "lodash";
import { usePathname } from "next/navigation";

import {
	Box,
	Button,
	Card,
	CardHeader,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Select,
	useColorModeValue,
	useToast,
} from "@chakra-ui/react";
import { DateTime } from "luxon";

import spiels from "../../constants/spiels";
// import { APPOINTMENT_USERS } from "../../constants/temporaryValues";
import MiniStatistics from "../MiniStatisticsGlobalCount";
import WalletIcon from "../Icons/Icons";

import {
	retrieveDoctorAccounts,
	retrievePatientAccounts,
} from "../../modules/auth/engine/auth.queries";

// import { retrieveProcedures } from "../../utils/engine/procedure.queries";
import { createAppointment } from "../../modules/appointment/engine/appointment.mutations";
import { showSuccess } from "../../utils/notification";
import {
	notifSpiels,
	toastCreateMessage,
} from "../../constants/notificationSpiels";

const SetAppointmentModal = ({
	isOpenSetAppointment,
	onCloseSetAppointment,
	onOpenSetAppointment,
}) => {
	const iconBoxInside = useColorModeValue("white", "white");
	const currentPath = usePathname();
	const toast = useToast();

	const queryClient = useQueryClient();
	const {
		data: { data: doctorData = [] },
	} = useQuery({
		initialData: [],
		placeholderData: [],
		queryFn: retrieveDoctorAccounts,
		queryKey: ["doctor-data"],
	});

	const {
		data: { data: patientData = [] },
	} = useQuery({
		initialData: [],
		placeholderData: [],
		queryFn: retrievePatientAccounts,
		queryKey: ["patient-data"],
	});

	// const {
	// 	data: { data: procedureData = [] },
	// } = useQuery({
	// 	initialData: [],
	// 	placeholderData: [],
	// 	queryFn: retrieveProcedures,
	// 	queryKey: ["procedure-data"],
	// });

	const createAppointmentMutation = useMutation(createAppointment);
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			date: "",
			doctor: "",
			patient: "",
			purpose: "",
			time: "",
		},
		onSubmit: async (data, { resetForm }) => {
			const date = DateTime.fromISO(data.date).toFormat("yyyy-MM-dd");
			const time = DateTime.fromISO(data.date).toFormat("HH:mm:ss");
			const payload = {
				date,
				doctor: data.doctor,
				patient: data.patient,
				purpose: data.purpose,
				time,
			};
			createAppointmentMutation
				.mutateAsync({ data: payload })
				.then(() => {
					queryClient.invalidateQueries({
						queryKey: [
							"appointments-data",
							"total-appointments-count",
							"upcoming-appointments-count",
						],
					});
					resetForm();
					onCloseSetAppointment();
					showSuccess(
						toast,
						toastCreateMessage("appointment"),
						notifSpiels.SUCCESS,
					);

					// go to success page
				})
				.catch((error) => {
					// display error
					// eslint-disable-next-line no-console
					console.log(error);
				});
		},
	});

	const {
		errors,
		handleBlur,
		handleChange,
		handleSubmit,
		resetForm,
		touched,
		values,
	} = formik;

	return (
		<>
			{currentPath === "/dashboard" ? (
				<Card
					_hover={{
						bgColor: "gray.50",
					}}
					borderRadius="3xl"
					cursor="pointer"
					h="80px"
					onClick={onOpenSetAppointment}
					variant="outline"
				>
					<CardHeader mb="1px">
						<MiniStatistics
							icon={
								<WalletIcon
									color={iconBoxInside}
									h="24px"
									w="24px"
								/>
							}
							title={spiels.COUNTER_ADD_APPOINTMENT}
						/>
					</CardHeader>
				</Card>
			) : (
				<Button
					colorScheme="teal"
					onClick={onOpenSetAppointment}
					px={5}
					w="fit-content"
				>
					{spiels.BUTTON_ADD_APPOINTMENT}
				</Button>
			)}

			<Modal
				isCentered
				isOpen={isOpenSetAppointment}
				onClose={onCloseSetAppointment}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{spiels.FORM_ADD_APPOINTMENT}</ModalHeader>
					<ModalCloseButton mt={3} />
					<ModalBody>
						<FormikProvider value={formik}>
							<FormControl
								isInvalid={touched.date && errors.date}
							>
								<FormLabel>{spiels.FORM_DATE}</FormLabel>
								<Input
									borderRadius="md"
									data-testid="date"
									fontSize="sm"
									id="date"
									ms="4px"
									name="date"
									onBlur={handleBlur}
									onChange={handleChange}
									size="lg"
									type="datetime-local"
									value={values.date}
								/>
								<FormErrorMessage mb="24px" px={2}>
									{touched.date && errors.date}
								</FormErrorMessage>
							</FormControl>
							<FormControl
								isInvalid={touched.patient && errors.patient}
								mb={2}
							>
								<Box>
									<FormLabel>
										{spiels.FORM_SELECT_PATIENT}
									</FormLabel>
									<Select
										data-testid="patient"
										id="patient"
										name="patient"
										onBlur={handleBlur}
										onChange={handleChange}
										placeholder="- Select Patient -"
										value={values.patient}
									>
										{patientData.map((patient) => (
											<option
												key={patient.id}
												value={patient.id}
											>
												{_.get(patient, "firstName")}{" "}
												{_.get(patient, "lastName")}
											</option>
										))}
									</Select>
								</Box>
								<FormErrorMessage mb="24px" px={2}>
									{touched.patient && errors.patient}
								</FormErrorMessage>
							</FormControl>

							{/* <FormControl
								isInvalid={touched.purpose && errors.purpose}
								mb={2}
							>
								<Box>
									<FormLabel>
										{spiels.FORM_PROCEDURE}
									</FormLabel>
									<Select
										data-testid="purpose"
										id="purpose"
										name="purpose"
										onBlur={handleBlur}
										onChange={handleChange}
										placeholder="- Select Procedure -"
										value={values.purpose}
									>
										{procedureData.map((procedure) => (
											<option
												key={procedure.id}
												value={procedure.id}
											>
												{_.get(
													procedure,
													"readableName",
												)}
											</option>
										))}
									</Select>
								</Box>
								<FormErrorMessage mb="24px" px={2}>
									{touched.purpose && errors.purpose}
								</FormErrorMessage>
							</FormControl> */}

							<FormControl
								isInvalid={touched.doctor && errors.doctor}
							>
								<Box>
									<FormLabel>
										{spiels.FORM_ASSIGN_DENTIST}
									</FormLabel>
									<Select
										data-testid="doctor"
										id="doctor"
										name="doctor"
										onBlur={handleBlur}
										onChange={handleChange}
										placeholder="- Select Dentist -"
										value={values.doctor}
									>
										{doctorData.map((dentist) => {
											return (
												<option
													key={dentist.id}
													value={dentist.id}
												>
													Dr.{" "}
													{_.get(
														dentist,
														"firstName",
													)}{" "}
													{_.get(dentist, "lastName")}
												</option>
											);
										})}
									</Select>
								</Box>
								<FormErrorMessage mb="24px" px={2}>
									{touched.doctor && errors.doctor}
								</FormErrorMessage>
							</FormControl>
						</FormikProvider>
					</ModalBody>
					<ModalFooter>
						<Button
							colorScheme="blue"
							mr={3}
							onClick={handleSubmit}
							variant="solid"
						>
							{spiels.BUTTON_ADD}
						</Button>
						<Button
							colorScheme="blue"
							onClick={() => {
								resetForm();
								onCloseSetAppointment();
							}}
							variant="outline"
						>
							{spiels.BUTTON_CANCEL}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default SetAppointmentModal;
