import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
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

import { createRecord } from "../engine/record.mutations";
import { fullRecordSchema, initialValues } from "../model/record.model";

import { ENDPOINTS } from "../../../constants/Endpoints";

const AddRecordTab = () => {
	const [currentTab, setCurrentTab] = useState(0);
	const handleTabChange = (index) => {
		setCurrentTab(index);
	};

	const router = useRouter();
	const queryClient = useQueryClient();
	const createRecordMutation = useMutation(createRecord);

	const formikPersonalInfo = useFormik({
		enableReinitialize: true,
		initialValues,
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
			createRecordMutation
				.mutateAsync({ data: payload })
				.then((record) => {
					router.push(
						`/${ENDPOINTS.RECORDS}/${_.get(
							record,
							"data.patient.id",
						)}`,
					);
					queryClient.invalidateQueries({
						queryKey: "users-email-data",
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
	} = formikPersonalInfo;

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

							<FormikProvider value={formikPersonalInfo}>
								<TabPanels>
									<TabPanel>
										<AddPersonalInfoTab
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

export default AddRecordTab;
