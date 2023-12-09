import { Button, Grid, GridItem } from "@chakra-ui/react";
import DentalChartLegend from "./Dental Chart/DentalChartLegend";
import DentalChartCheckboxes from "./Dental Chart/DentalChartCheckboxes";
import DentalChart from "./Dental Chart/DentalChart";
import spiels from "../../../constants/spiels";

const DentalChartTab = ({ switchToPreviousTab }) => {
	return (
		<>
			<Grid gap={2} templateColumns="repeat(10, 1fr)">
				<GridItem colSpan="7" maxH="fit-content">
					<DentalChart />
				</GridItem>
				<GridItem colSpan="3" maxH="fit-content">
					<DentalChartCheckboxes />
				</GridItem>
			</Grid>
			<DentalChartLegend />
			<Button
				colorScheme="blue"
				float="right"
				mt={10}
				size="sm"
				variant="solid"
			>
				{spiels.BUTTON_SUBMIT}
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

export default DentalChartTab;
