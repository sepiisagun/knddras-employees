import { Card, CardBody, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

import TableRow from "./TableRow";

const StrapiTable = ({ action, data = [], headerTitles = [] }) => {
	return (
		<Card overflowX={{ sm: "scroll", xl: "hidden" }} w="full">
			<CardBody>
				<Table color="gray.700" variant="simple">
					<Thead>
						<Tr color="gray.400" my=".8rem" pl="0px">
							{headerTitles.map((caption) => {
								return (
									<Th key={caption} color="gray.400">
										{caption}
									</Th>
								);
							})}
						</Tr>
					</Thead>
					<Tbody>
						{data.map((row, index) => {
							return (
								<TableRow
									key={index}
									action={action}
									data={row}
									headerTitles={headerTitles}
								/>
							);
						})}
					</Tbody>
				</Table>
			</CardBody>
		</Card>
	);
};

export default StrapiTable;
