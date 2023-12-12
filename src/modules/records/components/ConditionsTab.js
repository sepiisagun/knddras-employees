import { useFormikContext } from "formik";

import {
	Checkbox,
	FormControl,
	Stack,
	Table,
	Td,
	Text,
} from "@chakra-ui/react";
import spiels from "../../../constants/spiels";

const ConditionsTab = () => {
	const { setFieldValue, values } = useFormikContext();
	return (
		<Stack spacing={0} textAlign="left">
			{/* <Text as="b">Conditions:</Text> */}
			{spiels.CONDITIONS_TAB.CONDITIONS_ROW.map((condition) => (
				<Checkbox key={condition.value} justifyContent="left">
					{condition.value}
				</Checkbox>
			))}

			<Text as="b" pt={4}>
				Medical Conditions:
			</Text>
			<Table>
				<Td pl={0}>
					<Stack>
						<FormControl>
							<Checkbox
								id="highBloodPressure"
								isChecked={values.highBloodPressure}
								name="highBloodPressure"
								onChange={() => {
									setFieldValue(
										"highBloodPressure",
										!values.highBloodPressure,
										false,
									);
								}}
								value={values.highBloodPressure}
							>
								{spiels.FORM_HIGH_BLOOD_PRESSURE}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="aidsHiv"
								isChecked={values.aidsHiv}
								name="aidsHiv"
								onChange={() =>
									setFieldValue(
										"aidsHiv",
										!values.aidsHiv,
										false,
									)
								}
								value={values.aidsHiv}
							>
								{spiels.FORM_AIDS_OR_HIV}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="stomachTroublesUlcers"
								isChecked={values.stomachTroublesUlcers}
								name="stomachTroublesUlcers"
								onChange={() =>
									setFieldValue(
										"stomachTroublesUlcers",
										!values.stomachTroublesUlcers,
										false,
									)
								}
								value={values.stomachTroublesUlcers}
							>
								{spiels.FORM_STOMACH_PROBLEMS_ULCER}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="jointReplacementImplant"
								isChecked={values.jointReplacementImplant}
								name="jointReplacementImplant"
								onChange={() =>
									setFieldValue(
										"jointReplacementImplant",
										!values.jointReplacementImplant,
										false,
									)
								}
								value={values.jointReplacementImplant}
							>
								{spiels.FORM_JOINT_REPLACEMENT_IMPLANT}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="thyroidProblem"
								isChecked={values.thyroidProblem}
								name="thyroidProblem"
								onChange={() =>
									setFieldValue(
										"thyroidProblem",
										!values.thyroidProblem,
										false,
									)
								}
								value={values.thyroidProblem}
							>
								{spiels.FORM_THYROID_PROBLEM}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="hepatitisLiverDisease"
								isChecked={values.hepatitisLiverDisease}
								name="hepatitisLiverDisease"
								onChange={() =>
									setFieldValue(
										"hepatitisLiverDisease",
										!values.hepatitisLiverDisease,
										false,
									)
								}
								value={values.hepatitisLiverDisease}
							>
								{spiels.FORM_HEPATITIS_LIVER_DISEASE}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="respiratoryProblems"
								isChecked={values.respiratoryProblems}
								name="respiratoryProblems"
								onChange={() =>
									setFieldValue(
										"respiratoryProblems",
										!values.respiratoryProblems,
										false,
									)
								}
								value={values.respiratoryProblems}
							>
								{spiels.FORM_RESPIRATORY_PROBLEMS}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="swollenAnkles"
								isChecked={values.swollenAnkles}
								name="swollenAnkles"
								onChange={() =>
									setFieldValue(
										"swollenAnkles",
										!values.swollenAnkles,
										false,
									)
								}
								value={values.swollenAnkles}
							>
								{spiels.FORM_SWOLLEN_ANKLES}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="chestPain"
								isChecked={values.chestPain}
								name="chestPain"
								onChange={() =>
									setFieldValue(
										"chestPain",
										!values.chestPain,
										false,
									)
								}
								value={values.chestPain}
							>
								{spiels.FORM_CHEST_PAIN}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="anemia"
								isChecked={values.anemia}
								name="anemia"
								onChange={() =>
									setFieldValue(
										"anemia",
										!values.anemia,
										false,
									)
								}
								value={values.anemia}
							>
								{spiels.FORM_ANEMIA}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="emphysema"
								isChecked={values.emphysema}
								name="emphysema"
								onChange={() =>
									setFieldValue(
										"emphysema",
										!values.emphysema,
										false,
									)
								}
								value={values.emphysema}
							>
								{spiels.FORM_EMPHYSEMA}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="headInjuries"
								isChecked={values.headInjuries}
								name="headInjuries"
								onChange={() =>
									setFieldValue(
										"headInjuries",
										!values.headInjuries,
										false,
									)
								}
								value={values.headInjuries}
							>
								{spiels.FORM_HEAD_INJURIES}
							</Checkbox>
						</FormControl>
					</Stack>
				</Td>

				<Td pl={0}>
					<Stack>
						<FormControl>
							<Checkbox
								id="lowBloodPressure"
								isChecked={values.lowBloodPressure}
								name="lowBloodPressure"
								onChange={() =>
									setFieldValue(
										"lowBloodPressure",
										!values.lowBloodPressure,
										false,
									)
								}
								value={values.lowBloodPressure}
							>
								{spiels.FORM_LOW_BLOOD_PRESSURE}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="std"
								isChecked={values.std}
								name="std"
								onChange={() =>
									setFieldValue("std", !values.std, false)
								}
								value={values.std}
							>
								{spiels.FORM_SEXUALLY_TRANSMITTED_DISEASE}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="rapidWeightLoss"
								isChecked={values.rapidWeightLoss}
								name="rapidWeightLoss"
								onChange={() =>
									setFieldValue(
										"rapidWeightLoss",
										!values.rapidWeightLoss,
										false,
									)
								}
								value={values.rapidWeightLoss}
							>
								{spiels.FORM_RAPID_WEIGHT_LOSS}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="heartSurgery"
								isChecked={values.heartSurgery}
								name="heartSurgery"
								onChange={() =>
									setFieldValue(
										"heartSurgery",
										!values.heartSurgery,
										false,
									)
								}
								value={values.heartSurgery}
							>
								{spiels.FORM_HEART_SURGERY}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="heartDisease"
								isChecked={values.heartDisease}
								name="heartDisease"
								onChange={() =>
									setFieldValue(
										"heartDisease",
										!values.heartDisease,
										false,
									)
								}
								value={values.heartDisease}
							>
								{spiels.FORM_HEART_DISEASE}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="rheumaticFever"
								isChecked={values.rheumaticFever}
								name="rheumaticFever"
								onChange={() =>
									setFieldValue(
										"rheumaticFever",
										!values.rheumaticFever,
										false,
									)
								}
								value={values.rheumaticFever}
							>
								{spiels.FORM_RHEUMATIC_FEVER}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="hepatitisJaundice"
								isChecked={values.hepatitisJaundice}
								name="hepatitisJaundice"
								onChange={() =>
									setFieldValue(
										"hepatitisJaundice",
										!values.hepatitisJaundice,
										false,
									)
								}
								value={values.hepatitisJaundice}
							>
								{spiels.FORM_HAPATITIS_JAUNDICE}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="kidneyDisease"
								isChecked={values.kidneyDisease}
								name="kidneyDisease"
								onChange={() =>
									setFieldValue(
										"kidneyDisease",
										!values.kidneyDisease,
										false,
									)
								}
								value={values.kidneyDisease}
							>
								{spiels.FORM_KIDNEY_DISEASE}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="stroke"
								isChecked={values.stroke}
								name="stroke"
								onChange={() =>
									setFieldValue(
										"stroke",
										!values.stroke,
										false,
									)
								}
								value={values.stroke}
							>
								{spiels.FORM_STROKE}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="angina"
								isChecked={values.angina}
								name="angina"
								onChange={() =>
									setFieldValue(
										"angina",
										!values.angina,
										false,
									)
								}
								value={values.angina}
							>
								{spiels.FORM_ANGINA}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="bleedingProblems"
								isChecked={values.bleedingProblems}
								name="bleedingProblems"
								onChange={() =>
									setFieldValue(
										"bleedingProblems",
										!values.bleedingProblems,
										false,
									)
								}
								value={values.bleedingProblems}
							>
								{spiels.FORM_BLEEDING_PROBLEMS}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="arthritisRheumatism"
								isChecked={values.arthritisRheumatism}
								name="arthritisRheumatism"
								onChange={() =>
									setFieldValue(
										"arthritisRheumatism",
										!values.arthritisRheumatism,
										false,
									)
								}
								value={values.arthritisRheumatism}
							>
								{spiels.FORM_ARTHRITIS_RHEUMATISM}
							</Checkbox>
						</FormControl>
					</Stack>
				</Td>

				<Td pl={0}>
					<Stack>
						<FormControl>
							<Checkbox
								id="epilepsyConvulsions"
								isChecked={values.epilepsyConvulsions}
								name="epilepsyConvulsions"
								onChange={() =>
									setFieldValue(
										"epilepsyConvulsions",
										!values.epilepsyConvulsions,
										false,
									)
								}
								value={values.epilepsyConvulsions}
							>
								{spiels.FORM_EPILEPSY_CONVULSIONS}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="faintingSeizure"
								isChecked={values.faintingSeizure}
								name="faintingSeizure"
								onChange={() =>
									setFieldValue(
										"faintingSeizure",
										!values.faintingSeizure,
										false,
									)
								}
								value={values.faintingSeizure}
							>
								{spiels.FORM_FAINTING_SEIZURE}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="radiationTheraphy"
								isChecked={values.radiationTheraphy}
								name="radiationTheraphy"
								onChange={() =>
									setFieldValue(
										"radiationTheraphy",
										!values.radiationTheraphy,
										false,
									)
								}
								value={values.radiationTheraphy}
							>
								{spiels.FORM_RADIATION_THERAPY}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="heartAttack"
								isChecked={values.heartAttack}
								name="heartAttack"
								onChange={() =>
									setFieldValue(
										"heartAttack",
										!values.heartAttack,
										false,
									)
								}
								value={values.heartAttack}
							>
								{spiels.FORM_HEART_ATTACK}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="heartMurmur"
								isChecked={values.heartMurmur}
								name="heartMurmur"
								onChange={() =>
									setFieldValue(
										"heartMurmur",
										!values.heartMurmur,
										false,
									)
								}
								value={values.heartMurmur}
							>
								{spiels.FORM_HEART_MURMUR}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="hayFever"
								isChecked={values.hayFever}
								name="hayFever"
								onChange={() =>
									setFieldValue(
										"hayFever",
										!values.hayFever,
										false,
									)
								}
								value={values.hayFever}
							>
								{spiels.FORM_HAY_FEVER_ALLERGIES}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="tuberculosis"
								isChecked={values.tuberculosis}
								name="tuberculosis"
								onChange={() =>
									setFieldValue(
										"tuberculosis",
										!values.tuberculosis,
										false,
									)
								}
								value={values.tuberculosis}
							>
								{spiels.FORM_TUBERCULOSIS}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="diabetes"
								isChecked={values.diabetes}
								name="diabetes"
								onChange={() =>
									setFieldValue(
										"diabetes",
										!values.diabetes,
										false,
									)
								}
								value={values.diabetes}
							>
								{spiels.FORM_DIABETES}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="cancerTumors"
								isChecked={values.cancerTumors}
								name="cancerTumors"
								onChange={() =>
									setFieldValue(
										"cancerTumors",
										!values.cancerTumors,
										false,
									)
								}
								value={values.cancerTumors}
							>
								{spiels.FORM_CANCER_TUMORS}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="asthma"
								isChecked={values.asthma}
								name="asthma"
								onChange={() =>
									setFieldValue(
										"asthma",
										!values.asthma,
										false,
									)
								}
								value={values.asthma}
							>
								{spiels.FORM_ASTHMA}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="bloodDiseases"
								isChecked={values.bloodDiseases}
								name="bloodDiseases"
								onChange={() =>
									setFieldValue(
										"bloodDiseases",
										!values.bloodDiseases,
										false,
									)
								}
								value={values.bloodDiseases}
							>
								{spiels.FORM_BLOOD_DISEASE}
							</Checkbox>
						</FormControl>
					</Stack>
				</Td>
			</Table>
		</Stack>
	);
};

export default ConditionsTab;
