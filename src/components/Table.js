import {
	Card,
	CardBody,
	Table,
	Tbody,
	Th,
	Thead,
	Tr,
	Text,
	Td,
	Center,
} from "@chakra-ui/react";

import _ from "lodash";
import TableRow from "./TableRow";

const StrapiTable = ({ action, data = [], headerTitles = [], limit = 10 }) => {
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
						{_.isEmpty(data) ? (
							<Tr>
								<Td
									align="center"
									colSpan={headerTitles.length}
									h="280px"
								>
									<Center>
										<Text color="gray.400">
											No data found
										</Text>
									</Center>
								</Td>
							</Tr>
						) : (
							data.map((row, index) => {
								if (index <= limit) {
									return (
										<TableRow
											key={index}
											action={action}
											data={row}
											headerTitles={headerTitles}
										/>
									);
								}
								return null;
							})
						)}
					</Tbody>
				</Table>
			</CardBody>
		</Card>
	);
};

export default StrapiTable;
