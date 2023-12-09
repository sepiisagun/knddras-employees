import { Checkbox, Stack, Text } from "@chakra-ui/react";
import spiels from "../../../../constants/spiels";

const DentalChartCheckboxes = () => {
	return (
		<Stack spacing={0} textAlign="left">
			<Text>Periodontal Screening:</Text>
			{spiels.DC_CHECKBOXES.map((checkbox) => {
				if (checkbox.key === 1) {
					return (
						<Checkbox key={checkbox.value} justifyContent="left">
							{checkbox.value}
						</Checkbox>
					);
				}
				return null;
			})}

			<Text pt={4}>Occlusion:</Text>
			{spiels.DC_CHECKBOXES.map((checkbox) => {
				if (checkbox.key === 2) {
					return (
						<Checkbox key={checkbox.value}>
							{checkbox.value}
						</Checkbox>
					);
				}
				return null;
			})}

			<Text pt={4}>Appliances:</Text>
			{spiels.DC_CHECKBOXES.map((checkbox) => {
				if (checkbox.key === 3) {
					return (
						<Checkbox key={checkbox.value}>
							{checkbox.value}
						</Checkbox>
					);
				}
				return null;
			})}

			<Text pt={4}>TMD:</Text>
			{spiels.DC_CHECKBOXES.map((checkbox) => {
				if (checkbox.key === 4) {
					return (
						<Checkbox key={checkbox.value}>
							{checkbox.value}
						</Checkbox>
					);
				}
				return null;
			})}

			<Text pt={4}>X-ray Taken:</Text>
			{spiels.DC_CHECKBOXES.map((checkbox) => {
				if (checkbox.key === 5) {
					return (
						<Checkbox key={checkbox.value}>
							{checkbox.value}
						</Checkbox>
					);
				}
				return null;
			})}
		</Stack>
	);
};

export default DentalChartCheckboxes;
