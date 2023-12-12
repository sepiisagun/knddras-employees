import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/table";
import React from "react";

const DentalChart1828 = () => {
	const test = [
		{ toothID: 18 },
		{ toothID: 17 },
		{ toothID: 16 },
		{ toothID: 15 },
		{ toothID: 14 },
		{ toothID: 13 },
		{ toothID: 12 },
		{ toothID: 11 },
		{ toothID: 21 },
		{ toothID: 22 },
		{ toothID: 23 },
		{ toothID: 24 },
		{ toothID: 25 },
		{ toothID: 26 },
		{ toothID: 27 },
		{ toothID: 28 },
	];
	return (
		<Box>
			<TableContainer>
				<Table size="sm" width="fit-content">
					<Tbody>
						<Tr height={8}>
							{test.map((item) => {
								return (
									<Td
										key={item.toothID}
										borderColor="gray.500"
										borderWidth="1px"
									/>
								);
							})}
						</Tr>
						<Tr height={8}>
							{test.map((item) => {
								return (
									<Td
										key={item.toothID}
										borderColor="gray.500"
										borderWidth="1px"
									/>
								);
							})}
						</Tr>
						<Tr>
							{test.map((item) => {
								return (
									<Td
										key={item.toothID}
										borderColor="gray.500"
										borderWidth="1px"
										textAlign="center"
									>
										{item.toothID}
									</Td>
								);
							})}
						</Tr>
						<Tr>
							{test.map((item) => {
								return (
									<Td
										key={item.toothID}
										borderColor="gray.500"
										borderWidth="1px"
									>
										<Image
											// alt="Dan Abramov"
											boxSize={8}
											margin="auto"
											maxW="32px"
											objectFit="cover"
											src="./ToothICON.png"
										/>
									</Td>
								);
							})}
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default DentalChart1828;
