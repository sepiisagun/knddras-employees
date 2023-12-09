import { Grid, GridItem } from "@chakra-ui/react";
import DentalChartLegend from "./Dental Chart/DentalChartLegend";
import DentalChartCheckboxes from "./Dental Chart/DentalChartCheckboxes";
import DentalChart from "./Dental Chart/DentalChart";

const DentalChartTab = () => {
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
		</>
	);
};

export default DentalChartTab;
