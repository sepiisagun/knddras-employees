import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { FormikProvider, useFormik } from "formik";
import _ from "lodash";

import {
	Button,
	FormControl,
	FormErrorMessage,
	// Checkbox,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Select,
	Table,
	TableContainer,
	Tbody,
	Td,
	// Text,
	Th,
	Thead,
	Tr,
	useDisclosure,
	useToast,
} from "@chakra-ui/react";
import spiels from "../../../../constants/spiels";
// import { TRANSACTION_AMOUNT } from "../../../../constants/temporaryValues";
// import TreatmentBreakdownFee from "./TreatmentBreakdownFee";

import { showSuccess } from "../../../../utils/notification";
import {
	toastCreateMessage,
	notifSpiels,
} from "../../../../constants/notificationSpiels";

import { retrieveTeeth } from "../../engine/record.queries";
import { createTreatmentRecord } from "../../engine/record.mutations";
import { retrieveProcedures } from "../../../../utils/engine/procedure.queries";
import { retrieveAppointments } from "../../../appointment/engine/appointment.queries";
import treatmentSchema from "../../model/treatment.model";
import AddTreatmentHeader from "./AddTreatmentHeader";

const AddTreatment = ({ patientId, patientName, recordId }) => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const [teethCollection, setTeethCollection] = useState([]);
	const createTreatmentRecordMutation = useMutation(createTreatmentRecord);
	const queryClient = useQueryClient();
	const toast = useToast();

	const {
		data: { data: { data } = {} },
		isFetched,
	} = useQuery({
		initialData: {},
		queryFn: retrieveTeeth,
		queryKey: ["teeth-data"],
	});

	const { data: { data: procedureData = [] } = {} } = useQuery({
		initialData: {},
		queryFn: retrieveProcedures,
		queryKey: ["procedures-data"],
	});

	const {
		data: { data: appointmentData },
	} = useQuery({
		initialData: [],
		queryFn: retrieveAppointments,
		queryKey: [
			"appointments-data",
			{
				filters: {
					patient: patientId,
				},
				populate: "*",
				sort: "date:desc",
			},
		],
	});

	useEffect(() => {
		if (isFetched) {
			setTeethCollection([
				...data.sectionOne,
				...data.sectionTwo,
				...data.sectionThree,
				...data.sectionFour,
			]);
		}
	}, [data]);

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {},
		onSubmit: async (value, { resetForm }) => {
			const payload = {
				appointment: value.appointment,
				procedure: value.treatment,
				record: recordId,
				toothOperated: value.tooth,
			};
			createTreatmentRecordMutation
				.mutateAsync({ data: payload })
				.then(() => {
					queryClient.invalidateQueries({
						queryKey: ["appointments-data"],
					});
					resetForm();
					showSuccess(
						toast,
						toastCreateMessage("treatment"),
						notifSpiels.SUCCESS,
					);
					onClose();
					// go to success page
				})
				.catch((error) => {
					// display error
					// eslint-disable-next-line no-console
					console.log(error);
				});
		},
		validateOnBlur: true,
		validationSchema: treatmentSchema,
	});

	const {
		errors,
		handleChange,
		handleSubmit,
		setFieldValue,
		touched,
		values,
	} = formik;

	return (
		<>
			<Button
				colorScheme="teal"
				float="right"
				mt={3}
				mx={1}
				onClick={onOpen}
				size="md"
				variant="solid"
			>
				{spiels.BUTTON_NEW_PROCEDURE}
			</Button>

			<Modal isCentered isOpen={isOpen} onClose={onClose} size="2xl">
				<ModalOverlay />
				<ModalContent>
					<FormikProvider value={formik}>
						<ModalHeader>{spiels.PROCEDURE_SUMMARY}</ModalHeader>
						<ModalCloseButton mt={2} />
						<ModalBody>
							<TableContainer>
								<AddTreatmentHeader
									appointmentData={appointmentData}
									patientName={patientName}
								/>
								<TableContainer>
									<Table variant="simple">
										<Thead>
											<Tr>
												<Th>Tooth No.</Th>
												<Th>Procedure</Th>
												<Th isNumeric>Cost</Th>
											</Tr>
										</Thead>
										<Tbody>
											<Tr>
												<Td>
													<FormControl
														isInvalid={
															touched.tooth &&
															errors.tooth
														}
													>
														<Select
															data-testid="tooth"
															id="tooth"
															name="tooth"
															onChange={
																handleChange
															}
															placeholder="Tooth no."
															size="sm"
															value={values.tooth}
														>
															{teethCollection
																.sort()
																.map(
																	(teeth) => (
																		<option
																			key={
																				teeth
																			}
																			value={
																				teeth
																			}
																		>
																			{
																				teeth
																			}
																		</option>
																	),
																)}
														</Select>
													</FormControl>
													<FormErrorMessage>
														{touched.tooth &&
															errors.tooth}
													</FormErrorMessage>
												</Td>
												<Td>
													{" "}
													<FormControl
														isInvalid={
															touched.treatment &&
															errors.treatment
														}
													>
														<Select
															data-testid="procedure"
															id="procedure"
															name="procedure"
															onChange={(e) => {
																setFieldValue(
																	"treatment",
																	e.target
																		.value,
																	false,
																);
																setFieldValue(
																	"cost",
																	_.get(
																		_.find(
																			procedureData,
																			[
																				"id",
																				parseInt(
																					e
																						.target
																						.value,
																					10,
																				),
																			],
																		),
																		"price",
																	),
																	false,
																);
															}}
															placeholder="Select treatment"
															size="sm"
															value={
																values.treatment
															}
														>
															{procedureData.map(
																(procedure) => (
																	<option
																		key={
																			procedure.id
																		}
																		value={
																			procedure.id
																		}
																	>
																		{
																			procedure.name
																		}
																	</option>
																),
															)}
														</Select>
													</FormControl>
													<FormErrorMessage>
														{touched.treatment &&
															errors.treatment}
													</FormErrorMessage>
												</Td>
												<Td isNumeric>
													<Input
														data-testid="Cost"
														id="Cost"
														isReadOnly
														name="Cost"
														p={0}
														placeholder="₱"
														size="sm"
														value={`₱       ${values.cost}`}
														variant="flushed"
														w={20}
													/>
												</Td>
											</Tr>
										</Tbody>
									</Table>
								</TableContainer>
								{/* <Checkbox pt={2} px={2}>
									Is the patient senior/PWD?
								</Checkbox>
								<Text
									fontWeight="normal"
									pl={8}
									textAlign="left"
								>
									{spiels.FORM_ID_NUMBER}:{" "}
									<Input
										p={0}
										size="sm "
										variant="flushed"
										w={40}
									/>
								</Text> */}
								{/* <Table mt={6} size="sm">
									{TRANSACTION_AMOUNT.map((amount) => (
										<TreatmentBreakdownFee
											key={amount.value}
											amount={amount}
										/>
									))}
								</Table> */}
							</TableContainer>
						</ModalBody>
						<ModalFooter>
							<Button colorScheme="gray" mr={3} onClick={onClose}>
								{spiels.BUTTON_CANCEL}
							</Button>
							<Button
								colorScheme="blue"
								onClick={handleSubmit}
								type="submit"
								variant="solid"
							>
								{spiels.BUTTON_ADD}
							</Button>
						</ModalFooter>
					</FormikProvider>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AddTreatment;
