import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/table";
import React from "react";

const DentalChart4838 = () => {
	const test = [
		{ toothID: 48 },
		{ toothID: 47 },
		{ toothID: 46 },
		{ toothID: 45 },
		{ toothID: 44 },
		{ toothID: 43 },
		{ toothID: 42 },
		{ toothID: 41 },
		{ toothID: 31 },
		{ toothID: 32 },
		{ toothID: 33 },
		{ toothID: 34 },
		{ toothID: 35 },
		{ toothID: 36 },
		{ toothID: 37 },
		{ toothID: 38 },
	];
	return (
		<Box>
			<TableContainer>
				<Table size="sm" width="fit-content">
					<Tbody>
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
					</Tbody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default DentalChart4838;
