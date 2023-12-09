import { useMutation } from "react-query";
import { FormikProvider, useFormik } from "formik";
import { useRouter } from "next/router";

import {
	Box,
	Button,
	Card,
	CardBody,
	Flex,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AddHistoryTab from "./AddHistoryTab";
import spiels from "../../../constants/spiels";
import AddPersonalInfoTab from "./AddPersonalInfoTab";
import ConditionsTab from "./ConditionsTab";
import DentalChartTab from "./DentalChartTab";

import { createRecord, createMedicalHistory } from "../engine/record.mutations";
import { recordSchema, medicalSchema } from "../model/record.model";
import { ENDPOINTS } from "../../../constants/Endpoints";

const AddRecordTab = () => {
	const [currentTab, setCurrentTab] = useState(0);

	const handleTabChange = (index) => {
		setCurrentTab(index);
	};

	const router = useRouter();

	const createRecordMutation = useMutation(createRecord);
	const createMedicalMutation = useMutation(createMedicalHistory);

	const formikPersonalInfo = useFormik({
		enableReinitialize: true,
		initialValues: {
			address: "",
			birthdate: "",
			email: "",
			firstName: "",
			guardianName: "",
			lastName: "",
			middleInitial: "",
			minor: false,
			mobileNumber: "",
			nationality: "",
			occupation: "",
			relation: "",
			religion: "",
			sex: "",
		},
		onSubmit: async (data, { resetForm }) => {
			createRecordMutation
				.mutateAsync({ data })
				.then(() => {
					resetForm();
					// go to success page
				})
				.catch((error) => {
					// display error
					// eslint-disable-next-line no-console
					console.log(error);
				});
		},
		validateOnBlur: true,
		validateOnMount: true,
		validationSchema: recordSchema,
	});

	const formikMedicalHistory = useFormik({
		enableReinitialize: true,
		initialValues: {
			anesthetics: false,
			antibiotics: false,
			aspirin: false,
			bleedTime: "",
			bloodType: "",
			lastVisit: "",
			latex: false,
			other: "",
			physicianAddress: "",
			physicianName: "",
			previousDentist: "",
			sulfa: false,
		},
		onSubmit: async (data, { resetForm }) => {
			const payload = {
				allergies: {
					anesthetics: data.anesthetics,
					antibiotics: data.antibiotics,
					aspirin: data.aspirin,
					latex: data.latex,
					other: data.other,
					sulfa: data.sulfa,
				},
				bleedTime: data.bleedTime,
				bloodType: data.bloodType,
				lastVisit: data.lastVisit,
				physicianAddress: data.physicianAddress,
				physicianName: data.physicianName,
				previousDentist: data.previousDentist,
			};
			createMedicalMutation
				.mutateAsync({ data: payload })
				.then(() => {
					resetForm();

					// go to success page
				})
				.catch((error) => {
					// display error
					// eslint-disable-next-line no-console
					console.log(error);
				});
		},
		validateOnBlur: true,
		validateOnMount: true,
		validationSchema: medicalSchema,
	});

	const {
		handleSubmit: handleSubmitMedicalHistory,
		resetForm: resetMedicalHistory,
	} = formikMedicalHistory;

	const {
		handleSubmit: handleSubmitPersonalInfo,
		resetForm: resetPersonalInfo,
	} = formikPersonalInfo;

	const handleSubmit = async () => {
		await handleSubmitPersonalInfo();
		await handleSubmitMedicalHistory();
	};
	return (
		<Flex alignItems="center" justifyContent="center" p={50} w="full">
			<Box
				bg={useColorModeValue("white", "gray.800")}
				borderWidth="1px"
				position="relative"
				rounded="lg"
				shadow="lg"
				w="4xl"
			>
				<Card p={4}>
					<CardBody>
						<Tabs
							align="center"
							index={currentTab}
							onChange={handleTabChange}
						>
							<TabList>
								<Tab>{spiels.PERSONAL_INFO}</Tab>
								<Tab>{spiels.MEDICAL_HISTORY}</Tab>
								<Tab>{spiels.CONDITIONS}</Tab>
								<Tab>{spiels.DENTAL_CHART}</Tab>
							</TabList>

							<TabPanels>
								<TabPanel>
									<FormikProvider value={formikPersonalInfo}>
										<AddPersonalInfoTab
											switchToNextTab={() =>
												setCurrentTab(1)
											}
										/>
									</FormikProvider>
								</TabPanel>
								<TabPanel>
									<FormikProvider
										value={formikMedicalHistory}
									>
										<AddHistoryTab
											switchToPreviousTab={() =>
												setCurrentTab(0)
											}
										/>
									</FormikProvider>
								</TabPanel>
								<TabPanel>
									<ConditionsTab
										switchToNextTab={() => setCurrentTab(3)}
										switchToPreviousTab={() =>
											setCurrentTab(1)
										}
									/>
								</TabPanel>
								<TabPanel>
									<DentalChartTab
										switchToPreviousTab={() =>
											setCurrentTab(2)
										}
									/>
								</TabPanel>
							</TabPanels>
						</Tabs>
						<Button
							colorScheme="blue"
							float="right"
							mt={10}
							onClick={() => {
								if (
									currentTab !== 1 &&
									currentTab !== 2 &&
									currentTab !== 3
								)
									setCurrentTab(1);
								if (
									currentTab !== 0 &&
									currentTab !== 2 &&
									currentTab !== 3
								)
									setCurrentTab(2);
								if (
									currentTab !== 0 &&
									currentTab !== 1 &&
									currentTab !== 3
								)
									setCurrentTab(3);
								else handleSubmit();
							}}
							size="sm"
							variant="solid"
						>
							{currentTab !== 3
								? spiels.BUTTON_NEXT
								: spiels.BUTTON_SUBMIT}
						</Button>
						<Button
							colorScheme="blue"
							float="right"
							mr={2}
							mt={10}
							onClick={() => {
								if (currentTab === 0) {
									resetPersonalInfo();
									resetMedicalHistory();
									router.push(`/${ENDPOINTS.RECORDS}`);
								} else {
									setCurrentTab(currentTab - 1);
								}
							}}
							size="sm"
							variant="outline"
						>
							{currentTab === 0
								? spiels.BUTTON_CANCEL
								: spiels.BUTTON_BACK}
						</Button>
					</CardBody>
				</Card>
			</Box>
		</Flex>
	);
};

export default AddRecordTab;
