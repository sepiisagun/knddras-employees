import { useFormikContext } from "formik";

import {
	Checkbox,
	FormControl,
	FormErrorMessage,
	Stack,
	Table,
	Td,
	Text,
} from "@chakra-ui/react";
import spiels from "../../../constants/spiels";

const ConditionsTab = () => {
	const { errors, handleBlur, handleChange, touched, values } =
		useFormikContext();
	return (
		<Stack spacing={0} textAlign="left">
			<Text as="b">Conditions:</Text>
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
						<FormControl
							isInvalid={
								touched.highBloodPressure &&
								errors.highBloodPressure
							}
						>
							<Checkbox
								data-testid="highBloodPressure"
								id="highBloodPressure"
								isChecked={values.highBloodPressure}
								name="highBloodPressure"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.highBloodPressure}
							>
								{spiels.FORM_HIGH_BLOOD_PRESSURE}
							</Checkbox>
							<FormErrorMessage>
								{touched.highBloodPressure &&
									errors.highBloodPressure}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={touched.aidsHiv && errors.aidsHiv}
						>
							<Checkbox
								data-testid="aidsHiv"
								id="aidsHiv"
								isChecked={values.aidsHiv}
								name="aidsHiv"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.aidsHiv}
							>
								{spiels.FORM_AIDS_OR_HIV}
							</Checkbox>
							<FormErrorMessage>
								{touched.aidsHiv && errors.aidsHiv}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.stomachTroublesUlcers &&
								errors.stomachTroublesUlcers
							}
						>
							<Checkbox
								data-testid="stomachTroublesUlcers"
								id="stomachTroublesUlcers"
								isChecked={values.stomachTroublesUlcers}
								name="stomachTroublesUlcers"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.stomachTroublesUlcers}
							>
								{spiels.FORM_STOMACH_PROBLEMS_ULCER}
							</Checkbox>
							<FormErrorMessage>
								{touched.stomachTroublesUlcers &&
									errors.stomachTroublesUlcers}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.jointReplacementImplant &&
								errors.jointReplacementImplant
							}
						>
							<Checkbox
								data-testid="jointReplacementImplant"
								id="jointReplacementImplant"
								isChecked={values.jointReplacementImplant}
								name="jointReplacementImplant"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.jointReplacementImplant}
							>
								{spiels.FORM_JOINT_REPLACEMENT_IMPLANT}
							</Checkbox>
							<FormErrorMessage>
								{touched.jointReplacementImplant &&
									errors.jointReplacementImplant}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.thyroidProblem && errors.thyroidProblem
							}
						>
							<Checkbox
								data-testid="thyroidProblem"
								id="thyroidProblem"
								isChecked={values.thyroidProblem}
								name="thyroidProblem"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.thyroidProblem}
							>
								{spiels.FORM_THYROID_PROBLEM}
							</Checkbox>
							<FormErrorMessage>
								{touched.thyroidProblem &&
									errors.thyroidProblem}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.hepatitisLiverDisease &&
								errors.hepatitisLiverDisease
							}
						>
							<Checkbox
								data-testid="hepatitisLiverDisease"
								id="hepatitisLiverDisease"
								isChecked={values.hepatitisLiverDisease}
								name="hepatitisLiverDisease"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.hepatitisLiverDisease}
							>
								{spiels.FORM_HEPATITIS_LIVER_DISEASE}
							</Checkbox>
							<FormErrorMessage>
								{touched.hepatitisLiverDisease &&
									errors.hepatitisLiverDisease}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.respiratoryProblems &&
								errors.respiratoryProblems
							}
						>
							<Checkbox
								data-testid="respiratoryProblems"
								id="respiratoryProblems"
								isChecked={values.respiratoryProblems}
								name="respiratoryProblems"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.respiratoryProblems}
							>
								{spiels.FORM_RESPIRATORY_PROBLEMS}
							</Checkbox>
							<FormErrorMessage>
								{touched.respiratoryProblems &&
									errors.respiratoryProblems}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.swollenAnkles && errors.swollenAnkles
							}
						>
							<Checkbox
								data-testid="swollenAnkles"
								id="swollenAnkles"
								isChecked={values.swollenAnkles}
								name="swollenAnkles"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.swollenAnkles}
							>
								{spiels.FORM_SWOLLEN_ANKLES}
							</Checkbox>
							<FormErrorMessage>
								{touched.swollenAnkles && errors.swollenAnkles}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={touched.chestPain && errors.chestPain}
						>
							<Checkbox
								data-testid="chestPain"
								id="chestPain"
								isChecked={values.chestPain}
								name="chestPain"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.chestPain}
							>
								{spiels.FORM_CHEST_PAIN}
							</Checkbox>
							<FormErrorMessage>
								{touched.chestPain && errors.chestPain}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={touched.anemia && errors.anemia}
						>
							<Checkbox
								data-testid="anemia"
								id="anemia"
								isChecked={values.anemia}
								name="anemia"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.anemia}
							>
								{spiels.FORM_ANEMIA}
							</Checkbox>
							<FormErrorMessage>
								{touched.anemia && errors.anemia}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={touched.emphysema && errors.emphysema}
						>
							<Checkbox
								data-testid="emphysema"
								id="emphysema"
								isChecked={values.emphysema}
								name="emphysema"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.emphysema}
							>
								{spiels.FORM_EMPHYSEMA}
							</Checkbox>
							<FormErrorMessage>
								{touched.emphysema && errors.emphysema}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.headInjuries && errors.headInjuries
							}
						>
							<Checkbox
								data-testid="headInjuries"
								id="headInjuries"
								isChecked={values.headInjuries}
								name="headInjuries"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.headInjuries}
							>
								{spiels.FORM_HEAD_INJURIES}
							</Checkbox>
							<FormErrorMessage>
								{touched.headInjuries && errors.headInjuries}
							</FormErrorMessage>
						</FormControl>
					</Stack>
				</Td>

				<Td pl={0}>
					<Stack>
						<FormControl
							isInvalid={
								touched.lowBloodPressure &&
								errors.lowBloodPressure
							}
						>
							<Checkbox
								data-testid="lowBloodPressure"
								id="lowBloodPressure"
								isChecked={values.lowBloodPressure}
								name="lowBloodPressure"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.lowBloodPressure}
							>
								{spiels.FORM_LOW_BLOOD_PRESSURE}
							</Checkbox>
							<FormErrorMessage>
								{touched.lowBloodPressure &&
									errors.lowBloodPressure}
							</FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={touched.std && errors.std}>
							<Checkbox
								data-testid="std"
								id="std"
								isChecked={values.std}
								name="std"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.std}
							>
								{spiels.FORM_SEXUALLY_TRANSMITTED_DISEASE}
							</Checkbox>
							<FormErrorMessage>
								{touched.std && errors.std}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.rapidWeightLoss &&
								errors.rapidWeightLoss
							}
						>
							<Checkbox
								data-testid="rapidWeightLoss"
								id="rapidWeightLoss"
								isChecked={values.rapidWeightLoss}
								name="rapidWeightLoss"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.rapidWeightLoss}
							>
								{spiels.FORM_RAPID_WEIGHT_LOSS}
							</Checkbox>
							<FormErrorMessage>
								{touched.rapidWeightLoss &&
									errors.rapidWeightLoss}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.heartSurgery && errors.heartSurgery
							}
						>
							<Checkbox
								data-testid="heartSurgery"
								id="heartSurgery"
								isChecked={values.heartSurgery}
								name="heartSurgery"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.heartSurgery}
							>
								{spiels.FORM_HEART_SURGERY}
							</Checkbox>
							<FormErrorMessage>
								{touched.heartSurgery && errors.heartSurgery}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.heartDisease && errors.heartDisease
							}
						>
							<Checkbox
								data-testid="heartDisease"
								id="heartDisease"
								isChecked={values.heartDisease}
								name="heartDisease"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.heartDisease}
							>
								{spiels.FORM_HEART_DISEASE}
							</Checkbox>
							<FormErrorMessage>
								{touched.heartDisease && errors.heartDisease}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.rheumaticFever && errors.rheumaticFever
							}
						>
							<Checkbox
								data-testid="rheumaticFever"
								id="rheumaticFever"
								isChecked={values.rheumaticFever}
								name="rheumaticFever"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.rheumaticFever}
							>
								{spiels.FORM_RHEUMATIC_FEVER}
							</Checkbox>
							<FormErrorMessage>
								{touched.rheumaticFever &&
									errors.rheumaticFever}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.hepatitisJaundice &&
								errors.hepatitisJaundice
							}
						>
							<Checkbox
								data-testid="hepatitisJaundice"
								id="hepatitisJaundice"
								isChecked={values.hepatitisJaundice}
								name="hepatitisJaundice"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.hepatitisJaundice}
							>
								{spiels.FORM_HAPATITIS_JAUNDICE}
							</Checkbox>
							<FormErrorMessage>
								{touched.hepatitisJaundice &&
									errors.hepatitisJaundice}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.kidneyDisease && errors.kidneyDisease
							}
						>
							<Checkbox
								data-testid="kidneyDisease"
								id="kidneyDisease"
								isChecked={values.kidneyDisease}
								name="kidneyDisease"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.kidneyDisease}
							>
								{spiels.FORM_KIDNEY_DISEASE}
							</Checkbox>
							<FormErrorMessage>
								{touched.kidneyDisease && errors.kidneyDisease}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={touched.stroke && errors.stroke}
						>
							<Checkbox
								data-testid="stroke"
								id="stroke"
								isChecked={values.stroke}
								name="stroke"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.stroke}
							>
								{spiels.FORM_STROKE}
							</Checkbox>
							<FormErrorMessage>
								{touched.stroke && errors.stroke}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={touched.angina && errors.angina}
						>
							<Checkbox
								data-testid="angina"
								id="angina"
								isChecked={values.angina}
								name="angina"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.angina}
							>
								{spiels.FORM_ANGINA}
							</Checkbox>
							<FormErrorMessage>
								{touched.angina && errors.angina}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.bleedingProblems &&
								errors.bleedingProblems
							}
						>
							<Checkbox
								data-testid="bleedingProblems"
								id="bleedingProblems"
								isChecked={values.bleedingProblems}
								name="bleedingProblems"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.bleedingProblems}
							>
								{spiels.FORM_BLEEDING_PROBLEMS}
							</Checkbox>
							<FormErrorMessage>
								{touched.bleedingProblems &&
									errors.bleedingProblems}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.arthritisRheumatism &&
								errors.arthritisRheumatism
							}
						>
							<Checkbox
								data-testid="arthritisRheumatism"
								id="arthritisRheumatism"
								isChecked={values.arthritisRheumatism}
								name="arthritisRheumatism"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.arthritisRheumatism}
							>
								{spiels.FORM_ARTHRITIS_RHEUMATISM}
							</Checkbox>
							<FormErrorMessage>
								{touched.arthritisRheumatism &&
									errors.arthritisRheumatism}
							</FormErrorMessage>
						</FormControl>
					</Stack>
				</Td>

				<Td pl={0}>
					<Stack>
						<FormControl
							isInvalid={
								touched.epilepsyConvulsions &&
								errors.epilepsyConvulsions
							}
						>
							<Checkbox
								data-testid="epilepsyConvulsions"
								id="epilepsyConvulsions"
								isChecked={values.epilepsyConvulsions}
								name="epilepsyConvulsions"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.epilepsyConvulsions}
							>
								{spiels.FORM_EPILEPSY_CONVULSIONS}
							</Checkbox>
							<FormErrorMessage>
								{touched.epilepsyConvulsions &&
									errors.epilepsyConvulsions}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.faintingSeizure &&
								errors.faintingSeizure
							}
						>
							<Checkbox
								data-testid="faintingSeizure"
								id="faintingSeizure"
								isChecked={values.faintingSeizure}
								name="faintingSeizure"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.faintingSeizure}
							>
								{spiels.FORM_FAINTING_SEIZURE}
							</Checkbox>
							<FormErrorMessage>
								{touched.faintingSeizure &&
									errors.faintingSeizure}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.radiationTheraphy &&
								errors.radiationTheraphy
							}
						>
							<Checkbox
								data-testid="radiationTheraphy"
								id="radiationTheraphy"
								isChecked={values.radiationTheraphy}
								name="radiationTheraphy"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.radiationTheraphy}
							>
								{spiels.FORM_RADIATION_THERAPY}
							</Checkbox>
							<FormErrorMessage>
								{touched.radiationTheraphy &&
									errors.radiationTheraphy}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.heartAttack && errors.heartAttack
							}
						>
							<Checkbox
								data-testid="heartAttack"
								id="heartAttack"
								isChecked={values.heartAttack}
								name="heartAttack"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.heartAttack}
							>
								{spiels.FORM_HEART_ATTACK}
							</Checkbox>
							<FormErrorMessage>
								{touched.heartAttack && errors.heartAttack}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.heartMurmur && errors.heartMurmur
							}
						>
							<Checkbox
								data-testid="heartMurmur"
								id="heartMurmur"
								isChecked={values.heartMurmur}
								name="heartMurmur"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.heartMurmur}
							>
								{spiels.FORM_HEART_MURMUR}
							</Checkbox>
							<FormErrorMessage>
								{touched.heartMurmur && errors.heartMurmur}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={touched.hayFever && errors.hayFever}
						>
							<Checkbox
								data-testid="hayFever"
								id="hayFever"
								isChecked={values.hayFever}
								name="hayFever"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.hayFever}
							>
								{spiels.FORM_HAY_FEVER_ALLERGIES}
							</Checkbox>
							<FormErrorMessage>
								{touched.hayFever && errors.hayFever}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.tuberculosis && errors.tuberculosis
							}
						>
							<Checkbox
								data-testid="tuberculosis"
								id="tuberculosis"
								isChecked={values.tuberculosis}
								name="tuberculosis"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.tuberculosis}
							>
								{spiels.FORM_TUBERCULOSIS}
							</Checkbox>
							<FormErrorMessage>
								{touched.tuberculosis && errors.tuberculosis}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={touched.diabetes && errors.diabetes}
						>
							<Checkbox
								data-testid="diabetes"
								id="diabetes"
								isChecked={values.diabetes}
								name="diabetes"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.diabetes}
							>
								{spiels.FORM_DIABETES}
							</Checkbox>
							<FormErrorMessage>
								{touched.diabetes && errors.diabetes}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.cancerTumors && errors.cancerTumors
							}
						>
							<Checkbox
								data-testid="cancerTumors"
								id="cancerTumors"
								isChecked={values.cancerTumors}
								name="cancerTumors"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.cancerTumors}
							>
								{spiels.FORM_CANCER_TUMORS}
							</Checkbox>
							<FormErrorMessage>
								{touched.cancerTumors && errors.cancerTumors}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={touched.asthma && errors.asthma}
						>
							<Checkbox
								data-testid="asthma"
								id="asthma"
								isChecked={values.asthma}
								name="asthma"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.asthma}
							>
								{spiels.FORM_ASTHMA}
							</Checkbox>
							<FormErrorMessage>
								{touched.asthma && errors.asthma}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.bloodDiseases && errors.bloodDiseases
							}
						>
							<Checkbox
								data-testid="bloodDiseases"
								id="bloodDiseases"
								isChecked={values.bloodDiseases}
								name="bloodDiseases"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.bloodDiseases}
							>
								{spiels.FORM_BLOOD_DISEASE}
							</Checkbox>
							<FormErrorMessage>
								{touched.bloodDiseases && errors.bloodDiseases}
							</FormErrorMessage>
						</FormControl>
					</Stack>
				</Td>
			</Table>
		</Stack>
	);
};

export default ConditionsTab;
