import {
	Button,
	Checkbox,
	Input,
	Stack,
	Table,
	Td,
	Text,
} from "@chakra-ui/react";
import spiels from "../../../constants/spiels";

const ConditionsTab = ({ switchToNextTab, switchToPreviousTab }) => {
	return (
		<>
			<Stack spacing={0} textAlign="left">
				<Text as="b">Conditions:</Text>
				{spiels.CONDITIONS_TAB.CONDITIONS_ROW.map((condition) => (
					<Checkbox key={condition.value} justifyContent="left">
						{condition.value}
					</Checkbox>
				))}

				<Text as="b" pt={4}>
					Allergies:
				</Text>
				{spiels.CONDITIONS_TAB.ALLERGIES_ROW.map((allergy) => {
					if (allergy.value === "Other: ") {
						return (
							<Text key={allergy.value}>
								{allergy.value}
								<Input size="sm" width="auto" />
							</Text>
						);
					}
					return (
						<Checkbox key={allergy.value} justifyContent="left">
							{allergy.value}
						</Checkbox>
					);
				})}

				<Text as="b" pt={4}>
					Medical Conditions:
				</Text>
				<Table>
					<Td>
						<Stack>
							{spiels.CONDITIONS_TAB.MEDICAL_CONDITIONS_ROW.MEDICAL_CONDITIONS_ROW_COLUMN_ONE.map(
								(conditionOne) => (
									<Checkbox
										key={conditionOne.value}
										justifyContent="left"
									>
										{conditionOne.value}
									</Checkbox>
								),
							)}
						</Stack>
					</Td>
					<Td>
						<Stack>
							{spiels.CONDITIONS_TAB.MEDICAL_CONDITIONS_ROW.MEDICAL_CONDITIONS_ROW_COLUMN_TWO.map(
								(conditionTwo) => (
									<Checkbox
										key={conditionTwo.value}
										justifyContent="left"
									>
										{conditionTwo.value}
									</Checkbox>
								),
							)}
						</Stack>
					</Td>
					<Td>
						<Stack>
							{spiels.CONDITIONS_TAB.MEDICAL_CONDITIONS_ROW.MEDICAL_CONDITIONS_ROW_COLUMN_THREE.map(
								(conditionThree) => (
									<Checkbox
										key={conditionThree.value}
										justifyContent="left"
									>
										{conditionThree.value}
									</Checkbox>
								),
							)}
						</Stack>
					</Td>
				</Table>
			</Stack>
			<Button
				colorScheme="blue"
				float="right"
				mt={10}
				onClick={switchToNextTab}
				size="sm"
				variant="solid"
			>
				{spiels.BUTTON_NEXT}
			</Button>
			<Button
				colorScheme="blue"
				float="right"
				mr={2}
				mt={10}
				onClick={switchToPreviousTab}
				size="sm"
				variant="outline"
			>
				{spiels.BUTTON_BACK}
			</Button>
		</>
	);
};

export default ConditionsTab;
