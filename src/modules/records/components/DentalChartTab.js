import { Grid, GridItem, TableContainer } from "@chakra-ui/react";
import DentalChartLegend from "./Dental Chart/DentalChartLegend";
import DentalChartCheckboxes from "./Dental Chart/DentalChartCheckboxes";
import DentalChart from "./Dental Chart/DentalChart";

const DentalChartTab = () => {
	return (
		<TableContainer>
			<Grid gap={2} templateColumns="repeat(10, 1fr)">
				<GridItem colSpan="8" maxH="fit-content" maxW="fit-content">
					<DentalChart />
				</GridItem>
				<GridItem
					colSpan="2"
					maxH="fit-content"
					maxW="fit-content"
					pl={4}
				>
					<DentalChartCheckboxes />
				</GridItem>
			</Grid>
			<DentalChartLegend />
		</TableContainer>
	);
};

export default DentalChartTab;
