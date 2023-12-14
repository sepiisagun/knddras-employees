import { FormikProvider, useFormik } from "formik";
import { useMutation, useQuery, useQueryClient } from "react-query";
import _ from "lodash";

import {
	Box,
	Button,
	Checkbox,
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
	Stack,
	Textarea,
	useToast,
} from "@chakra-ui/react";

import spiels from "../../../constants/spiels";
// to be removed
// import { APPOINTMENT_USERS } from "../../../constants/temporaryValues";

import AppointmentRequestHeader from "../../../components/Modals/AppointmentRequestHeader";

import { acceptRequest, rejectRequest } from "../engine/request.mutations";
import { retrieveDoctorAccounts } from "../../auth/engine/auth.queries";
import { retrieveProcedures } from "../../../utils/engine/procedure.queries";
import { retrieveRequest } from "../engine/request.queries";
import { showSuccess } from "../../../utils/notification";
import {
	notifSpiels,
	toastAcceptMessage,
	toastRejectedMessage,
} from "../../../constants/notificationSpiels";

const ViewRequestModal = ({ id, isOpen, onClose, onOpen }) => {
	const queryClient = useQueryClient();
	const acceptRequestMutation = useMutation(acceptRequest);
	const rejectRequestMutation = useMutation(rejectRequest);
	const toast = useToast();

	const {
		data: { data: requestData = [] },
	} = useQuery({
		initialData: [],
		placeholderData: [],
		queryFn: retrieveRequest,
		queryKey: [
			"request-data",
			id,
			{
				populate: "patient",
			},
		],
	});

	const {
		data: { data: procedureData = [] },
	} = useQuery({
		initialData: [],
		placeholderData: [],
		queryFn: retrieveProcedures,
		queryKey: ["procedure-data"],
	});

	const {
		data: { data: doctorData = [] },
	} = useQuery({
		initialData: [],
		placeholderData: [],
		queryFn: retrieveDoctorAccounts,
		queryKey: ["doctor-data"],
	});

	const formikAccept = useFormik({
		enableReinitialize: true,
		initialValues: {
			date: "",
			doctor: "",
			patient: "",
			purpose: "",
			time: "",
		},
		onSubmit: async (data, { resetForm }) => {
			const payload = {
				date: data.date,
				doctor: data.doctor,
				patient: _.get(requestData, "data.patient.data.id"),
				purpose: data.purpose,
				time: data.date,
			};
			acceptRequestMutation
				.mutateAsync({ data: payload, id: requestData.data.id })
				.then(() => {
					queryClient.invalidateQueries({
						queryKey: "requests",
					});
					resetForm();
					onClose();
					showSuccess(
						toast,
						toastAcceptMessage("Appointment"),
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
	} = formikAccept;

	const formikReject = useFormik({
		enableReinitialize: true,
		initialValues: {
			reason: "",
			reject: false,
		},
		onSubmit: async (data, { resetForm: resetFormReject }) => {
			const payload = {
				reason: data.reason,
			};
			rejectRequestMutation
				.mutateAsync({ data: payload, id: requestData.data.id })
				.then(() => {
					queryClient.invalidateQueries({
						queryKey: "requests",
					});
					resetFormReject();
					onClose();
					showSuccess(
						toast,
						toastRejectedMessage("Appointment"),
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
		errors: errorsReject,
		handleBlur: handleBlurReject,
		handleChange: handleChangeReject,
		handleSubmit: handleSubmitReject,
		resetForm: resetFormReject,
		touched: touchedReject,
		values: valuesReject,
	} = formikReject;

	return (
		<>
			<Button
				colorScheme="blue"
				onClick={onOpen}
				size="md"
				variant="link"
			>
				{spiels.BUTTON_VIEW}
			</Button>

			<Modal isCentered isOpen={isOpen} onClose={onClose} size="lg">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{spiels.APPOINTMENT_REQUEST}</ModalHeader>
					<ModalCloseButton mt={2} />
					<ModalBody>
						<AppointmentRequestHeader data={requestData} />
						<FormikProvider value={formikAccept}>
							<FormControl
								isInvalid={touched.date && errors.date}
							>
								<FormLabel>{spiels.FORM_DATE}</FormLabel>
								<Input
									borderRadius="md"
									data-testid="date"
									disabled={valuesReject.reject}
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
								isInvalid={touched.purpose && errors.purpose}
								mb={2}
							>
								<Box>
									<FormLabel>
										{spiels.FORM_PROCEDURE}
									</FormLabel>
									<Select
										data-testid="purpose"
										disabled={valuesReject.reject}
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
							</FormControl>

							<FormControl
								isInvalid={touched.doctor && errors.doctor}
							>
								<Box>
									<FormLabel>
										{spiels.FORM_ASSIGN_DENTIST}
									</FormLabel>
									<Select
										data-testid="doctor"
										disabled={valuesReject.reject}
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
						<FormikProvider value={formikReject}>
							<Stack direction="row">
								<Checkbox
									data-testid="reject"
									id="reject"
									isChecked={values.reject}
									name="reject"
									onChange={handleChangeReject}
									pt={2}
									value={values.reject}
								>
									Rejected?
								</Checkbox>
							</Stack>
							{valuesReject.reject && (
								<FormControl
									isInvalid={
										touchedReject.reason &&
										errorsReject.reason
									}
									isRequired
									mb={2}
								>
									<Box>
										<FormLabel>
											{spiels.FORM_REASON}
										</FormLabel>
										<Textarea
											data-testid="reason"
											id="reason"
											name="reason"
											onBlur={handleBlurReject}
											onChange={handleChangeReject}
											placeholder=". . . "
											value={valuesReject.reason}
										/>
									</Box>
									<FormErrorMessage>
										{touchedReject.reason &&
											errorsReject.reason}
									</FormErrorMessage>
								</FormControl>
							)}
						</FormikProvider>
					</ModalBody>
					<ModalFooter>
						<Button
							colorScheme="blue"
							isDisabled={valuesReject.reject}
							mx={1}
							onClick={handleSubmit}
							variant="solid"
						>
							{spiels.BUTTON_ACCEPT}
						</Button>
						<Button
							colorScheme="red"
							isDisabled={!valuesReject.reject}
							mx={1}
							onClick={handleSubmitReject}
							variant="solid"
						>
							{spiels.BUTTON_REJECT}
						</Button>
						<Button
							colorScheme="gray"
							mx={1}
							onClick={() => {
								resetForm();
								resetFormReject();
								onClose();
							}}
						>
							{spiels.BUTTON_CANCEL}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ViewRequestModal;
