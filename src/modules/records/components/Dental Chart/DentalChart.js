import { Box, Center } from "@chakra-ui/layout";
import React from "react";
import DentalChart5565 from "./DentalChart5565";
import DentalChart1828 from "./DentalChart1828";
import DentalChart4838 from "./DentalChart4838";
import DentalChart85757 from "./DentalChart85757";

const DentalChart = () => {
	return (
		<Box paddingY={8}>
			<Center>
				<DentalChart5565 />
			</Center>
			<Center>
				<DentalChart1828 />
			</Center>
			<Center>
				<DentalChart4838 />
			</Center>
			<Center>
				<DentalChart85757 />
			</Center>
		</Box>
	);
};

export default DentalChart;
