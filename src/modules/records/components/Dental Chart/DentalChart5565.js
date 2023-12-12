import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import { Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/table";
import React from "react";

const DentalChart5565 = () => {
	const test = [
		{ toothID: 55 },
		{ toothID: 54 },
		{ toothID: 53 },
		{ toothID: 52 },
		{ toothID: 51 },
		{ toothID: 61 },
		{ toothID: 62 },
		{ toothID: 63 },
		{ toothID: 64 },
		{ toothID: 65 },
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

export default DentalChart5565;
