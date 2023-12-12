import { FormikProvider, useFormik } from "formik";
import { useMutation, useQuery, useQueryClient } from "react-query";
import _ from "lodash";

import {
	Box,
	Button,
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
} from "@chakra-ui/react";
import spiels from "../../../constants/spiels";
import AppointmentRequestHeader from "../../../components/Modals/AppointmentRequestHeader";

import { updateRequest } from "../engine/request.mutations";
import { retrieveDoctorAccounts } from "../../auth/engine/auth.queries";
import { retrieveProcedures } from "../../../utils/engine/procedure.queries";
import { retrieveRequests } from "../engine/request.queries";

const ViewRequestModal = ({ id, isOpen, onClose, onOpen }) => {
	const queryClient = useQueryClient();
	const updateRequestMutation = useMutation(updateRequest);
	const requestId = id;

	const {
		data: { data: requestData = [] },
	} = useQuery({
		initialData: [],
		placeholderData: [],
		queryFn: retrieveRequests,
		queryKey: [
			"requests",
			{
				filters: {
					id: requestId,
				},
				populate: ["purpose", "patient"],
			},
		],
	});

	// const {
	// 	data: { data: requestData = [] },
	// } = useQuery({
	// 	initialData: [],
	// 	placeholderData: [],
	// 	queryFn: retrieveRequest,
	// 	queryKey: ["request-data", id],
	// });

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
			const payload = {
				date: data.date,
				doctor: data.doctor,
				patient: data.patient,
				purpose: data.purpose,
				time: data.date,
			};
			updateRequestMutation
				.mutateAsync({ data: payload, id: requestData.data.id })
				.then(() => {
					queryClient.invalidateQueries({
						queryKey: "medical-record",
					});
					resetForm();

					// go to success page
				})
				.catch((error) => {
					// display error
					// eslint-disable-next-line no-console
					console.log(error);
				});
		},
	});

	const { errors, handleBlur, handleChange, handleSubmit, touched, values } =
		formik;

	const fullName =
		requestData.length > 0
			? `${requestData[0]?.patient?.data?.firstName} ${requestData[0]?.patient?.data?.lastName}`
			: "wala po";
	const procedureName =
		requestData.length > 0
			? requestData[0]?.purpose?.data?.readableName
			: "waley";
	const mobileNumber =
		requestData.length > 0
			? requestData[0]?.patient?.data?.mobileNumber
			: "hala wala";
	const dateAndSlot =
		requestData.length > 0
			? `${requestData[0]?.date} ${requestData[0]?.slot}`
			: "luh wala";

	// console.log(id, requestData);
	// console.log(fullName);
	// console.log(procedureName);
	// console.log(mobileNumber);
	// console.log(dateAndSlot);
	return (
		<>
			<Button
				colorScheme="blue"
				float="right"
				mx={1}
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
						<AppointmentRequestHeader
							dateAndSlot={dateAndSlot}
							fullName={fullName}
							mobileNumber={mobileNumber}
							procedureName={procedureName}
						/>
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
						{/* <FormControl my={5}>
							<Box>
								<FormLabel fontWeight="semibold">
									{spiels.FORM_ASSIGN_DENTIST}
								</FormLabel>
								<Select>
									{APPOINTMENT_USERS.map((dentist) => (
										<option
											key={dentist.dentist}
											value={dentist.dentist}
										>
											{dentist.dentist}
										</option>
									))}
								</Select>
							</Box>
						</FormControl>

						<FormControl isInvalid={isDateError} my={5}>
							<FormLabel fontWeight="semibold">
								{spiels.FORM_DATE}
							</FormLabel>
							<Input
								borderRadius="md"
								fontSize="sm"
								ms="4px"
								onChange={handleDateChange}
								size="lg"
								type="datetime-local"
								value={date}
							/>
							{!isDateError ? (
								<FormHelperText />
							) : (
								<FormErrorMessage mb="24px" px={2}>
									Error Message
								</FormErrorMessage>
							)}
						</FormControl> */}
					</ModalBody>
					<ModalFooter>
						<Button
							colorScheme="blue"
							mx={1}
							onClick={handleSubmit}
							variant="solid"
						>
							{spiels.BUTTON_ACCEPT}
						</Button>
						<Button colorScheme="red" mx={1} variant="solid">
							{spiels.BUTTON_REJECT}
						</Button>
						<Button colorScheme="gray" mx={1} onClick={onClose}>
							{spiels.BUTTON_CANCEL}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ViewRequestModal;
