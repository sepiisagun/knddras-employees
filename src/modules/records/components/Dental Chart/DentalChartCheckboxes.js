import { useFormikContext } from "formik";

import {
	Checkbox,
	FormControl,
	FormErrorMessage,
	Stack,
	Table,
	Text,
	Tr,
} from "@chakra-ui/react";
import spiels from "../../../../constants/spiels";

const DentalChartCheckboxes = () => {
	const { errors, handleBlur, handleChange, touched, values } =
		useFormikContext();
	return (
		<Stack spacing={0} textAlign="left">
			<Table>
				<Tr pl={0}>
					<Text>Periodontal Screening:</Text>
					<Stack spacing={0}>
						<FormControl
							isInvalid={touched.gingivitis && errors.gingivitis}
						>
							<Checkbox
								data-testid="gingivitis"
								id="gingivitis"
								isChecked={values.gingivitis}
								name="gingivitis"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.gingivitis}
							>
								{spiels.FORM_GINGIVITIS}
							</Checkbox>
							<FormErrorMessage>
								{touched.gingivitis && errors.gingivitis}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.earlyPeriodontitis &&
								errors.earlyPeriodontitis
							}
						>
							<Checkbox
								data-testid="earlyPeriodontitis"
								id="earlyPeriodontitis"
								isChecked={values.earlyPeriodontitis}
								name="earlyPeriodontitis"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.earlyPeriodontitis}
							>
								{spiels.FORM_EARLY_PERIODONTITIS}
							</Checkbox>
							<FormErrorMessage>
								{touched.earlyPeriodontitis &&
									errors.earlyPeriodontitis}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.moderatePeriodontitis &&
								errors.moderatePeriodontitis
							}
						>
							<Checkbox
								data-testid="moderatePeriodontitis"
								id="moderatePeriodontitis"
								isChecked={values.moderatePeriodontitis}
								name="moderatePeriodontitis"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.moderatePeriodontitis}
							>
								{spiels.FORM_MODERATE_PERIODONTITIS}
							</Checkbox>
							<FormErrorMessage>
								{touched.moderatePeriodontitis &&
									errors.moderatePeriodontitis}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.advancedPeriodontitis &&
								errors.advancedPeriodontitis
							}
						>
							<Checkbox
								data-testid="advancedPeriodontitis"
								id="advancedPeriodontitis"
								isChecked={values.advancedPeriodontitis}
								name="advancedPeriodontitis"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.advancedPeriodontitis}
							>
								{spiels.FORM_ADVANCED_PERIODONTITIS}
							</Checkbox>
							<FormErrorMessage>
								{touched.advancedPeriodontitis &&
									errors.advancedPeriodontitis}
							</FormErrorMessage>
						</FormControl>
					</Stack>
				</Tr>

				<Tr pl={0}>
					<Text mt={4}>Occlusion:</Text>
					<Stack spacing={0}>
						<FormControl isInvalid={touched.molar && errors.molar}>
							<Checkbox
								data-testid="molar"
								id="molar"
								isChecked={values.molar}
								name="molar"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.molar}
							>
								{spiels.FORM_MOLAR}
							</Checkbox>
							<FormErrorMessage>
								{touched.molar && errors.molar}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={touched.overjet && errors.overjet}
						>
							<Checkbox
								data-testid="overjet"
								id="overjet"
								isChecked={values.overjet}
								name="overjet"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.overjet}
							>
								{spiels.FORM_OVERJET}
							</Checkbox>
							<FormErrorMessage>
								{touched.overjet && errors.overjet}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={touched.overbite && errors.overbite}
						>
							<Checkbox
								data-testid="overbite"
								id="overbite"
								isChecked={values.overbite}
								name="overbite"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.overbite}
							>
								{spiels.FORM_OVERBITE}
							</Checkbox>
							<FormErrorMessage>
								{touched.overbite && errors.overbite}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.midlineDeviation &&
								errors.midlineDeviation
							}
						>
							<Checkbox
								data-testid="midlineDeviation"
								id="midlineDeviation"
								isChecked={values.midlineDeviation}
								name="midlineDeviation"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.midlineDeviation}
							>
								{spiels.FORM_MIDLINE_DEVIATION}
							</Checkbox>
							<FormErrorMessage>
								{touched.midlineDeviation &&
									errors.midlineDeviation}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={touched.crossbite && errors.crossbite}
						>
							<Checkbox
								data-testid="crossbite"
								id="crossbite"
								isChecked={values.crossbite}
								name="crossbite"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.crossbite}
							>
								{spiels.FORM_CROSSBITE}
							</Checkbox>
							<FormErrorMessage>
								{touched.crossbite && errors.crossbite}
							</FormErrorMessage>
						</FormControl>
					</Stack>
				</Tr>

				<Tr pl={0}>
					<Text mt={4}>Appliances:</Text>
					<Stack spacing={0}>
						<FormControl
							isInvalid={
								touched.orthodontic && errors.orthodontic
							}
						>
							<Checkbox
								data-testid="orthodontic"
								id="orthodontic"
								isChecked={values.orthodontic}
								name="orthodontic"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.orthodontic}
							>
								{spiels.FORM_ORTHODONTIC}
							</Checkbox>
							<FormErrorMessage>
								{touched.orthodontic && errors.orthodontic}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={touched.stayplate && errors.stayplate}
						>
							<Checkbox
								data-testid="stayplate"
								id="stayplate"
								isChecked={values.stayplate}
								name="stayplate"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.stayplate}
							>
								{spiels.FORM_STAYPLATE}
							</Checkbox>
							<FormErrorMessage>
								{touched.stayplate && errors.stayplate}
							</FormErrorMessage>
						</FormControl>
					</Stack>
				</Tr>

				<Tr pl={0}>
					<Text mt={4}>TMD:</Text>
					<Stack spacing={0}>
						<FormControl
							isInvalid={touched.clenching && errors.clenching}
						>
							<Checkbox
								data-testid="clenching"
								id="clenching"
								isChecked={values.clenching}
								name="clenching"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.clenching}
							>
								{spiels.FORM_CLENCHING}
							</Checkbox>
							<FormErrorMessage>
								{touched.clenching && errors.clenching}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={touched.clicking && errors.clicking}
						>
							<Checkbox
								data-testid="clicking"
								id="clicking"
								isChecked={values.clicking}
								name="clicking"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.clicking}
							>
								{spiels.FORM_CLICKING}
							</Checkbox>
							<FormErrorMessage>
								{touched.clicking && errors.clicking}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={touched.trismus && errors.trismus}
						>
							<Checkbox
								data-testid="trismus"
								id="trismus"
								isChecked={values.trismus}
								name="trismus"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.trismus}
							>
								{spiels.FORM_TRISMUS}
							</Checkbox>
							<FormErrorMessage>
								{touched.trismus && errors.trismus}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.muscleSpasm && errors.muscleSpasm
							}
						>
							<Checkbox
								data-testid="muscleSpasm"
								id="muscleSpasm"
								isChecked={values.muscleSpasm}
								name="muscleSpasm"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.muscleSpasm}
							>
								{spiels.FORM_MUSCLE_SPASM}
							</Checkbox>
							<FormErrorMessage>
								{touched.muscleSpasm && errors.muscleSpasm}
							</FormErrorMessage>
						</FormControl>
					</Stack>
				</Tr>

				<Tr pl={0}>
					<Text mt={4}>X-ray Taken:</Text>
					<Stack spacing={0}>
						<FormControl
							isInvalid={touched.periapical && errors.periapical}
						>
							<Checkbox
								data-testid="periapical"
								id="periapical"
								isChecked={values.periapical}
								name="periapical"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.periapical}
							>
								{spiels.FORM_PERIAPICAL}
							</Checkbox>
							<FormErrorMessage>
								{touched.periapical && errors.periapical}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={touched.panoramic && errors.panoramic}
						>
							<Checkbox
								data-testid="panoramic"
								id="panoramic"
								isChecked={values.panoramic}
								name="panoramic"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.panoramic}
							>
								{spiels.FORM_PANORAMIC}
							</Checkbox>
							<FormErrorMessage>
								{touched.panoramic && errors.panoramic}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={
								touched.cephalometric && errors.cephalometric
							}
						>
							<Checkbox
								data-testid="cephalometric"
								id="cephalometric"
								isChecked={values.cephalometric}
								name="cephalometric"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.cephalometric}
							>
								{spiels.FORM_CEPHALOMETRIC}
							</Checkbox>
							<FormErrorMessage>
								{touched.cephalometric && errors.cephalometric}
							</FormErrorMessage>
						</FormControl>

						<FormControl
							isInvalid={touched.occlusal && errors.occlusal}
						>
							<Checkbox
								data-testid="occlusal"
								id="occlusal"
								isChecked={values.occlusal}
								name="occlusal"
								onBlur={handleBlur}
								onChange={handleChange}
								value={values.occlusal}
							>
								{spiels.FORM_OCCLUSAL}
							</Checkbox>
							<FormErrorMessage>
								{touched.occlusal && errors.occlusal}
							</FormErrorMessage>
						</FormControl>
					</Stack>
				</Tr>
			</Table>
		</Stack>
	);
};

export default DentalChartCheckboxes;
