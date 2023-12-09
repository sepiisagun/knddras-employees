import { Table, Tbody, Td, Text, Thead, Tr } from "@chakra-ui/react";
import React from "react";
import spiels from "../../../../constants/spiels";

const DentalChartLegend = () => {
	return (
		<Table variant="simple">
			<Thead>
				<Tr>
					<Text fontWeight="bold">Legend: </Text>
				</Tr>
			</Thead>
			<Tbody>
				<Tr>
					<Td pb={4} pt={0} px={1}>
						{spiels.DENTAL_CHART_LEGEND_COLUMN_ONE.map(
							(legendOne) => (
								<Text key={legendOne.value} fontWeight="bold">
									<Text as="b">
										{legendOne.label} -{" "}
										<Text as="b" fontWeight="normal">
											{legendOne.value}
										</Text>
									</Text>
								</Text>
							),
						)}
					</Td>

					<Td pb={4} pt={0} px={1}>
						{spiels.DENTAL_CHART_LEGEND_COLUMN_TWO.map(
							(legendTwo) => (
								<Text key={legendTwo.value} fontWeight="bold">
									<Text as="b">
										{legendTwo.label} -{" "}
										<Text as="b" fontWeight="normal">
											{legendTwo.value}
										</Text>
									</Text>
								</Text>
							),
						)}
					</Td>

					<Td pb={4} pt={0} px={1}>
						{spiels.DENTAL_CHART_LEGEND_COLUMN_THREE.map(
							(legendThree) => (
								<Text key={legendThree.value} fontWeight="bold">
									<Text as="b">
										{legendThree.label} -{" "}
										<Text as="b" fontWeight="normal">
											{legendThree.value}
										</Text>
									</Text>
								</Text>
							),
						)}
					</Td>
				</Tr>
			</Tbody>
		</Table>
	);
};

export default DentalChartLegend;
