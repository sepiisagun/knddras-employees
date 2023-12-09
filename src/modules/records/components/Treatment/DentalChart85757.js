import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/table";
import React from "react";

const DentalChart85757 = () => {
	const test = [
		{ toothID: 85 },
		{ toothID: 84 },
		{ toothID: 83 },
		{ toothID: 82 },
		{ toothID: 81 },
		{ toothID: 71 },
		{ toothID: 72 },
		{ toothID: 73 },
		{ toothID: 74 },
		{ toothID: 75 },
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
											alt="Dan Abramov"
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

export default DentalChart85757;
