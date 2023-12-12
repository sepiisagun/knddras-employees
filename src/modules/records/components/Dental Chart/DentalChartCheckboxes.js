import { useFormikContext } from "formik";

import {
	Checkbox,
	FormControl,
	Stack,
	Table,
	Text,
	Tr,
} from "@chakra-ui/react";
import spiels from "../../../../constants/spiels";

const DentalChartCheckboxes = () => {
	const { setFieldValue, values } = useFormikContext();
	return (
		<Stack spacing={0} textAlign="left">
			<Table>
				<Tr pl={0}>
					<Text>Periodontal Screening:</Text>
					<Stack spacing={0}>
						<FormControl>
							<Checkbox
								id="gingivitis"
								isChecked={values.gingivitis}
								name="gingivitis"
								onChange={() =>
									setFieldValue(
										"gingivitis",
										!values.gingivitis,
										false,
									)
								}
								value={values.gingivitis}
							>
								{spiels.FORM_GINGIVITIS}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="earlyPeriodontitis"
								isChecked={values.earlyPeriodontitis}
								name="earlyPeriodontitis"
								onChange={() =>
									setFieldValue(
										"earlyPeriodontitis",
										!values.earlyPeriodontitis,
										false,
									)
								}
								value={values.earlyPeriodontitis}
							>
								{spiels.FORM_EARLY_PERIODONTITIS}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="moderatePeriodontitis"
								isChecked={values.moderatePeriodontitis}
								name="moderatePeriodontitis"
								onChange={() =>
									setFieldValue(
										"moderatePeriodontitis",
										!values.moderatePeriodontitis,
										false,
									)
								}
								value={values.moderatePeriodontitis}
							>
								{spiels.FORM_MODERATE_PERIODONTITIS}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="advancedPeriodontitis"
								isChecked={values.advancedPeriodontitis}
								name="advancedPeriodontitis"
								onChange={() =>
									setFieldValue(
										"advancedPeriodontitis",
										!values.advancedPeriodontitis,
										false,
									)
								}
								value={values.advancedPeriodontitis}
							>
								{spiels.FORM_ADVANCED_PERIODONTITIS}
							</Checkbox>
						</FormControl>
					</Stack>
				</Tr>

				<Tr pl={0}>
					<Text mt={4}>Occlusion:</Text>
					<Stack spacing={0}>
						<FormControl>
							<Checkbox
								id="molar"
								isChecked={values.molar}
								name="molar"
								onChange={() =>
									setFieldValue("molar", !values.molar, false)
								}
								value={values.molar}
							>
								{spiels.FORM_MOLAR}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="overjet"
								isChecked={values.overjet}
								name="overjet"
								onChange={() =>
									setFieldValue(
										"overjet",
										!values.overjet,
										false,
									)
								}
								value={values.overjet}
							>
								{spiels.FORM_OVERJET}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="overbite"
								isChecked={values.overbite}
								name="overbite"
								onChange={() =>
									setFieldValue(
										"overbite",
										!values.overbite,
										false,
									)
								}
								value={values.overbite}
							>
								{spiels.FORM_OVERBITE}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="midlineDeviation"
								isChecked={values.midlineDeviation}
								name="midlineDeviation"
								onChange={() =>
									setFieldValue(
										"midlineDeviation",
										!values.midlineDeviation,
										false,
									)
								}
								value={values.midlineDeviation}
							>
								{spiels.FORM_MIDLINE_DEVIATION}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="crossbite"
								isChecked={values.crossbite}
								name="crossbite"
								onChange={() =>
									setFieldValue(
										"crossbite",
										!values.crossbite,
										false,
									)
								}
								value={values.crossbite}
							>
								{spiels.FORM_CROSSBITE}
							</Checkbox>
						</FormControl>
					</Stack>
				</Tr>

				<Tr pl={0}>
					<Text mt={4}>Appliances:</Text>
					<Stack spacing={0}>
						<FormControl>
							<Checkbox
								id="orthodontic"
								isChecked={values.orthodontic}
								name="orthodontic"
								onChange={() =>
									setFieldValue(
										"orthodontic",
										!values.orthodontic,
										false,
									)
								}
								value={values.orthodontic}
							>
								{spiels.FORM_ORTHODONTIC}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="stayplate"
								isChecked={values.stayplate}
								name="stayplate"
								onChange={() =>
									setFieldValue(
										"stayplate",
										!values.stayplate,
										false,
									)
								}
								value={values.stayplate}
							>
								{spiels.FORM_STAYPLATE}
							</Checkbox>
						</FormControl>
					</Stack>
				</Tr>

				<Tr pl={0}>
					<Text mt={4}>TMD:</Text>
					<Stack spacing={0}>
						<FormControl>
							<Checkbox
								id="clenching"
								isChecked={values.clenching}
								name="clenching"
								onChange={() =>
									setFieldValue(
										"clenching",
										!values.clenching,
										false,
									)
								}
								value={values.clenching}
							>
								{spiels.FORM_CLENCHING}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="clicking"
								isChecked={values.clicking}
								name="clicking"
								onChange={() =>
									setFieldValue(
										"clicking",
										!values.clicking,
										false,
									)
								}
								value={values.clicking}
							>
								{spiels.FORM_CLICKING}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="trismus"
								isChecked={values.trismus}
								name="trismus"
								onChange={() =>
									setFieldValue(
										"trismus",
										!values.trismus,
										false,
									)
								}
								value={values.trismus}
							>
								{spiels.FORM_TRISMUS}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="muscleSpasm"
								isChecked={values.muscleSpasm}
								name="muscleSpasm"
								onChange={() =>
									setFieldValue(
										"muscleSpasm",
										!values.muscleSpasm,
										false,
									)
								}
								value={values.muscleSpasm}
							>
								{spiels.FORM_MUSCLE_SPASM}
							</Checkbox>
						</FormControl>
					</Stack>
				</Tr>

				<Tr pl={0}>
					<Text mt={4}>X-ray Taken:</Text>
					<Stack spacing={0}>
						<FormControl>
							<Checkbox
								id="periapical"
								isChecked={values.periapical}
								name="periapical"
								onChange={() =>
									setFieldValue(
										"periapical",
										!values.periapical,
										false,
									)
								}
								value={values.periapical}
							>
								{spiels.FORM_PERIAPICAL}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="panoramic"
								isChecked={values.panoramic}
								name="panoramic"
								onChange={() =>
									setFieldValue(
										"panoramic",
										!values.panoramic,
										false,
									)
								}
								value={values.panoramic}
							>
								{spiels.FORM_PANORAMIC}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="cephalometric"
								isChecked={values.cephalometric}
								name="cephalometric"
								onChange={() =>
									setFieldValue(
										"cephalometric",
										!values.cephalometric,
										false,
									)
								}
								value={values.cephalometric}
							>
								{spiels.FORM_CEPHALOMETRIC}
							</Checkbox>
						</FormControl>

						<FormControl>
							<Checkbox
								id="occlusal"
								isChecked={values.occlusal}
								name="occlusal"
								onChange={() =>
									setFieldValue(
										"occlusal",
										!values.occlusal,
										false,
									)
								}
								value={values.occlusal}
							>
								{spiels.FORM_OCCLUSAL}
							</Checkbox>
						</FormControl>
					</Stack>
				</Tr>
			</Table>
		</Stack>
	);
};

export default DentalChartCheckboxes;
