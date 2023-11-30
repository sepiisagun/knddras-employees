import {
	Box,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	Button,
	Flex,
	Text,
	Card,
	useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { PATIENT_CHECKUP_HISTORY } from "../../constants/temporaryValues";
import spiels from "../../constants/spiels";
import CheckUpTreatmentModal from "./CheckUpTreatmentModal";

const CheckUpTreatmentTable = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const [id, setID] = useState();
	return (
		<Box p={4}>
			<CheckUpTreatmentModal id={id} isOpen={isOpen} onClose={onClose} />
			<Card borderRadius="xl" p={4} variant="outline">
				<Box as="b" fontSize="3xl" px="5px">
					{spiels.TABLE_CHECKUP_HISTORY}
				</Box>
				<TableContainer p={4}>
					<Table variant="simple">
						<Thead>
							<Tr>
								{spiels.TABLE_COLUMNS_CHECKUP_HISTORY.map(
									(title) => (
										<Th key={title}>{title.title}</Th>
									),
								)}
							</Tr>
						</Thead>
						<Tbody>
							{PATIENT_CHECKUP_HISTORY.map((item) => (
								<Tr key={item.key}>
									<Td>{item.procedure}</Td>
									<Td>{item.operatedBy}</Td>
									<Td>
										<Flex
											align="center"
											flexWrap="nowrap"
											minWidth="100%"
											py=".8rem"
										>
											<Flex direction="column">
												<Text
													fontSize="md"
													minWidth="100%"
												>
													{item.dateOperated}
												</Text>
												<Text fontWeight="normal">
													{item.time}
												</Text>
											</Flex>
										</Flex>
									</Td>
									<Td isNumeric>
										<Box
											textAlign="left"
											width="fit-content"
										>
											{item.totalFee}
										</Box>
									</Td>
									<Td>
										<Button
											bg="transparent"
											color="blue.400"
											fontWeight="normal"
											onClick={() => {
												setID(item.id);
												onOpen();
											}}
											p={0}
											variant="link"
										>
											{item.action}
										</Button>
									</Td>
								</Tr>
							))}
						</Tbody>
					</Table>
				</TableContainer>
			</Card>
		</Box>
	);
};

export default CheckUpTreatmentTable;
