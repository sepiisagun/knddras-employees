import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { FormikProvider, useFormik } from "formik";
import { useRouter } from "next/router";
import _ from "lodash";

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

import AddHistoryTab from "./AddHistoryTab";
import spiels from "../../../constants/spiels";
import AddPersonalInfoTab from "./AddPersonalInfoTab";
import ConditionsTab from "./ConditionsTab";

import { updateRecord } from "../engine/record.mutations";
import {
	retrieveRecords,
	retrieveConditionRecords,
	retrieveMedicalRecords,
	retrieveGuardians,
} from "../engine/record.queries";
import { fullRecordSchema } from "../model/record.model";

const EditRecordAssistantTab = () => {
	const [currentTab, setCurrentTab] = useState(0);
	const handleTabChange = (index) => {
		setCurrentTab(index);
	};

	const router = useRouter();
	const { id } = router.query;
	const queryClient = useQueryClient();
	const updateRecordMutation = useMutation(updateRecord);

	const {
		data: { data: [recordData] = [] },
		isFetched,
	} = useQuery({
		initialData: [],
		queryFn: retrieveRecords,
		queryKey: [
			"record-data",
			{
				filters: {
					id,
				},
				populate: ["patient"],
			},
		],
	});

	const {
		data: { data: [guardianData] = [] },
	} = useQuery({
		enabled: isFetched,
		initialData: [],
		queryFn: retrieveGuardians,
		queryKey: [
			"guardian-data",
			{
				filters: {
					record: _.get(recordData, "id"),
				},
			},
		],
	});

	const {
		data: { data: [medicalData] = [] },
	} = useQuery({
		initialData: [],
		queryFn: retrieveMedicalRecords,
		queryKey: [
			"medical-data",
			{
				filters: {
					record: id,
				},
			},
		],
	});

	const {
		data: { data: [conditionData] = [] },
	} = useQuery({
		initialData: [],
		queryFn: retrieveConditionRecords,
		queryKey: [
			"condition-data",
			{
				filters: {
					record: id,
				},
			},
		],
	});

	const formikEditPersonalInfo = useFormik({
		enableReinitialize: true,
		initialValues: {
			address: _.get(recordData, "address"),
			aidsHiv: _.get(conditionData, "conditions.aidsHiv"),
			anemia: _.get(conditionData, "conditions.anemia"),
			anesthetics: _.get(medicalData, "allergies.anesthetics"),
			angina: _.get(conditionData, "conditions.angina"),
			antibiotics: _.get(medicalData, "allergies.antibiotics"),
			arthritisRheumatism: _.get(
				conditionData,
				"conditions.arthritisRheumatism",
			),
			aspirin: _.get(medicalData, "allergies.aspirin"),
			asthma: _.get(conditionData, "conditions.asthma"),
			birthdate: _.get(recordData, "birthdate"),
			bleedTime: _.get(medicalData, "bleedTime"),
			bleedingProblems: _.get(
				conditionData,
				"conditions.bleedingProblems",
			),
			bloodDiseases: _.get(conditionData, "conditions.bloodDiseases"),
			bloodType: _.get(medicalData, "bloodType"),
			cancerTumors: _.get(conditionData, "conditions.cancerTumors"),
			chestPain: _.get(conditionData, "conditions.chestPain"),
			diabetes: _.get(conditionData, "conditions.diabetes"),
			email: _.get(recordData, "patient.data.email"),
			emphysema: _.get(conditionData, "conditions.emphysema"),
			epilepsyConvulsions: _.get(
				conditionData,
				"conditions.epilepsyConvulsions",
			),
			faintingSeizure: _.get(conditionData, "conditions.faintingSeizure"),
			firstName: _.get(recordData, "firstName"),
			guardianName: _.get(guardianData, "name"),
			hayFever: _.get(conditionData, "conditions.hayFever"),
			headInjuries: _.get(conditionData, "conditions.headInjuries"),
			heartAttack: _.get(conditionData, "conditions.heartAttack"),
			heartDisease: _.get(conditionData, "conditions.heartDisease"),
			heartMurmur: _.get(conditionData, "conditions.heartMurmur"),
			heartSurgery: _.get(conditionData, "conditions.heartSurgery"),
			hepatitisJaundice: _.get(
				conditionData,
				"conditions.hepatitisJaundice",
			),
			hepatitisLiverDisease: _.get(
				conditionData,
				"hepatitisLiverDisease",
			),
			highBloodPressure: _.get(
				conditionData,
				"conditions.highBloodPressure",
			),
			jointReplacementImplant: _.get(
				conditionData,
				"conditions.jointReplacementImplant",
			),
			kidneyDisease: _.get(conditionData, "conditions.kidneyDisease"),
			lastName: _.get(recordData, "lastName"),
			lastVisit: _.get(medicalData, "lastVisit"),
			latex: _.get(medicalData, "allergies.latex"),
			lowBloodPressure: _.get(
				conditionData,
				"conditions.lowBloodPressure",
			),
			middleInitial: _.get(recordData, "middleInitial"),
			minor: _.get(recordData, "minor"),
			mobileNumber: _.get(recordData, "patient.data.mobileNumber"),
			occupation: _.get(guardianData, "occupation"),
			other: _.get(medicalData, "allergies.other"),
			patient: _.get(recordData, "patient.data.id"),
			physicianAddress: _.get(medicalData, "physicianAddress"),
			physicianName: _.get(medicalData, "physicianName"),
			previousDentist: _.get(medicalData, "previousDentist"),
			radiationTheraphy: _.get(
				conditionData,
				"conditions.radiationTheraphy",
			),
			rapidWeightLoss: _.get(conditionData, "conditions.rapidWeightLoss"),
			relation: _.get(guardianData, "relation"),
			respiratoryProblems: _.get(
				conditionData,
				"conditions.respiratoryProblems",
			),
			rheumaticFever: _.get(conditionData, "conditions.rheumaticFever"),
			sex: _.get(recordData, "sex"),
			std: _.get(conditionData, "conditions.std"),
			stomachTroublesUlcers: _.get(
				conditionData,
				"conditions.stomachTroublesUlcers",
			),
			stroke: _.get(conditionData, "conditions.stroke"),
			sulfa: _.get(medicalData, "allergies.sulfa"),
			swollenAnkles: _.get(conditionData, "conditions.swollenAnkles"),
			thyroidProblem: _.get(conditionData, "conditions.thyroidProblem"),
			tuberculosis: _.get(conditionData, "conditions.tuberculosis"),
		},
		onSubmit: async (data, { resetForm }) => {
			const payload = {
				conditions: {
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
				},
				medical: {
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
				},
				record: {
					address: data.address,
					birthdate: data.birthdate,
					email: data.email,
					firstName: data.firstName,
					guardianName: data.guardianName,
					lastName: data.lastName,
					middleInitial: data.middleInitial,
					minor: false,
					mobileNumber: data.mobileNumber,
					occupation: data.occupation,
					patient: data.patient,
					relation: data.relation,
					sex: data.sex,
				},
			};
			updateRecordMutation
				.mutateAsync({ data: payload, id: _.get(recordData, "id") })
				.then(() => {
					router.back();
					queryClient.invalidateQueries({
						queryKey: [
							"record-data",
							"guardian-data",
							"medical-data",
							"condition-data",
						],
					});
					resetForm();
				})
				.catch((error) => {
					// display error
					// eslint-disable-next-line no-console
					console.log(error);
				});
		},
		validateOnBlur: true,
		validateOnMount: true,
		validationSchema: fullRecordSchema,
	});

	const {
		handleSubmit: handleSubmitPersonalInfo,
		resetForm: resetPersonalInfo,
	} = formikEditPersonalInfo;

	const handleSubmit = async () => {
		await handleSubmitPersonalInfo();
	};
	return (
		<Flex alignItems="center" justifyContent="center" p={50} w="full">
			<Box
				bg={useColorModeValue("white", "gray.800")}
				borderWidth="1px"
				position="relative"
				rounded="lg"
				shadow="lg"
				w="fit-content"
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
							</TabList>

							<FormikProvider value={formikEditPersonalInfo}>
								<TabPanels>
									<TabPanel>
										<AddPersonalInfoTab
											formType="Edit"
											switchToNextTab={() =>
												setCurrentTab(1)
											}
										/>
									</TabPanel>
									<TabPanel>
										<AddHistoryTab
											switchToPreviousTab={() =>
												setCurrentTab(0)
											}
										/>
									</TabPanel>
									<TabPanel>
										<ConditionsTab
											switchToNextTab={() =>
												setCurrentTab(2)
											}
											switchToPreviousTab={() =>
												setCurrentTab(1)
											}
										/>
									</TabPanel>
								</TabPanels>
							</FormikProvider>
						</Tabs>
						<Button
							colorScheme="blue"
							float="right"
							mt={10}
							onClick={() => {
								if (currentTab < 2) {
									setCurrentTab(currentTab + 1);
								} else handleSubmit();
							}}
							size="sm"
							variant="solid"
						>
							{currentTab !== 2
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
									router.back();
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

export default EditRecordAssistantTab;
