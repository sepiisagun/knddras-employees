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

import {
	createRecord,
	createMedicalHistory,
	createConditions,
	createDentalRecords,
} from "../engine/record.mutations";
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
	const createConditionsMutation = useMutation(createConditions);
	const createDentalRecordsMutation = useMutation(createDentalRecords);

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

	const formikConditions = useFormik({
		enableReinitialize: true,
		initialValues: {
			aidsHiv: false,
			anemia: false,
			angina: false,
			arthritisRheumatism: false,
			asthma: false,
			bleedingProblems: false,
			bloodDiseases: false,
			cancerTumors: false,
			chestPain: false,
			diabetes: false,
			emphysema: false,
			epilepsyConvulsions: false,
			faintingSeizure: false,
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
			lowBloodPressure: false,
			radiationTheraphy: false,
			rapidWeightLoss: false,
			respiratoryProblems: false,
			rheumaticFever: false,
			std: false,
			stomachTroublesUlcers: false,
			stroke: false,
			swollenAnkles: false,
			thyroidProblem: false,
			tuberculosis: false,
		},
		onSubmit: async (data, { resetForm }) => {
			const payload = {
				aidsHiv: data.aidsHiv,
				anemia: data.anemia,
				angina: data.angina,
				arthritisRheumatism: data.arthritisRheumatism,
				asthma: data.asthma,
				bleedingProblems: data.bleedingProblems,
				bloodDiseases: data.bloodDiseases,
				cancerTumors: data.cancerTumors,
				chestPain: data.chestPain,
				diabetes: data.diabetes,
				emphysema: data.emphysema,
				epilepsyConvulsions: data.epilepsyConvulsions,
				faintingSeizure: data.faintingSeizure,
				hayFever: data.hayFever,
				headInjuries: data.headInjuries,
				heartAttack: data.heartAttack,
				heartDisease: data.heartDisease,
				heartMurmur: data.heartMurmur,
				heartSurgery: data.heartSurgery,
				hepatitisJaundice: data.hepatitisJaundice,
				hepatitisLiverDisease: data.hepatitisLiverDisease,
				highBloodPressure: data.highBloodPressure,
				jointReplacementImplant: data.jointReplacementImplant,
				kidneyDisease: data.kidneyDisease,
				lowBloodPressure: data.lowBloodPressure,
				radiationTheraphy: data.radiationTheraphy,
				rapidWeightLoss: data.rapidWeightLoss,
				respiratoryProblems: data.respiratoryProblems,
				rheumaticFever: data.rheumaticFever,
				std: data.std,
				stomachTroublesUlcers: data.stomachTroublesUlcers,
				stroke: data.stroke,
				swollenAnkles: data.swollenAnkles,
				thyroidProblem: data.thyroidProblem,
				tuberculosis: data.tuberculosis,
			};
			createConditionsMutation
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

	const formikDentalRecords = useFormik({
		enableReinitialize: true,
		initialValues: {
			advancedPeriodontitis: false,
			cephalometric: false,
			clenching: false,
			clicking: false,
			crossbite: false,
			earlyPeriodontitis: false,
			gingivitis: false,
			midlineDeviation: false,
			moderatePeriodontitis: false,
			molar: false,
			muscleSpasm: false,
			occlusal: false,
			orthodontic: false,
			overbite: false,
			overjet: false,
			panoramic: false,
			periapical: false,
			stayplate: false,
			trismus: false,
		},
		onSubmit: async (data, { resetForm }) => {
			const payload = {
				advancedPeriodontitis: data.advancedPeriodontitis,
				cephalometric: data.cephalometric,
				clenching: data.clenching,
				clicking: data.clicking,
				crossbite: data.crossbite,
				earlyPeriodontitis: data.earlyPeriodontitis,
				gingivitis: data.gingivitis,
				midlineDeviation: data.midlineDeviation,
				moderatePeriodontitis: data.moderatePeriodontitis,
				molar: data.molar,
				muscleSpasm: data.muscleSpasm,
				occlusal: data.occlusal,
				orthodontic: data.orthodontic,
				overbite: data.overbite,
				overjet: data.overjetr,
				panoramic: data.panoramic,
				periapical: data.periapical,
				stayplate: data.stayplate,
				trismus: data.trismus,
			};
			createDentalRecordsMutation
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

	const { handleSubmit: handleSubmitConditions, resetForm: resetConditions } =
		formikConditions;

	const {
		handleSubmit: handleSubmitDentalRecords,
		resetForm: resetDentalRecords,
	} = formikDentalRecords;

	const handleSubmit = async () => {
		await handleSubmitPersonalInfo();
		await handleSubmitMedicalHistory();
		await handleSubmitConditions();
		await handleSubmitDentalRecords();
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
									<FormikProvider value={formikConditions}>
										<ConditionsTab
											switchToNextTab={() =>
												setCurrentTab(3)
											}
											switchToPreviousTab={() =>
												setCurrentTab(1)
											}
										/>
									</FormikProvider>
								</TabPanel>
								<TabPanel>
									<FormikProvider value={formikDentalRecords}>
										<DentalChartTab
											switchToPreviousTab={() =>
												setCurrentTab(2)
											}
										/>
									</FormikProvider>
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
									resetConditions();
									resetDentalRecords();
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
