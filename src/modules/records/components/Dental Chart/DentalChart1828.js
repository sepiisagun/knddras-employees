import { useQuery } from "react-query";
import { useFormikContext } from "formik";
import _ from "lodash";

import { Image } from "@chakra-ui/image";
import { Box, FormControl, Text, Select } from "@chakra-ui/react";
import { Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/table";

import {
	retrieveTeeth,
	retrieveToothStatus,
} from "../../engine/record.queries";

const DentalChart1828 = () => {
	const imgPath = "/tooth.png";
	const {
		data: { data: { data } = {} },
		isFetched,
	} = useQuery({
		initialData: {},
		queryFn: retrieveTeeth,
		queryKey: [
			"teeth-data",
			{
				fields: ["sectionTwo"],
			},
		],
	});

	const { data: { data: statusData = [] } = {} } = useQuery({
		initialData: {},
		queryFn: retrieveToothStatus,
		queryKey: ["teeth-status-data"],
	});

	const { setFieldValue, values } = useFormikContext();

	return (
		<Box>
			{isFetched && (
				<TableContainer>
					<Table size="sm" width="fit-content">
						<Tbody>
							<Tr>
								{_.get(data, "sectionTwo").map((item) => {
									return (
										<Td
											key={item}
											borderColor="gray.500"
											borderWidth="1px"
											m="0px"
											p="0px"
										>
											<FormControl>
												<Select
													data-testid={`${item}`}
													id={`${item}`}
													name={`${item}`}
													onChange={(e) =>
														setFieldValue(
															`${item}`,
															e.target.value,
															false,
														)
													}
													placeholder="-"
													size="xs"
													value={values[`${item}`]}
												>
													{statusData.map(
														(status) => (
															<option
																key={
																	status.code
																}
																value={
																	status.code
																}
															>
																{status.status}
															</option>
														),
													)}
												</Select>
											</FormControl>
										</Td>
									);
								})}
							</Tr>
							<Tr>
								{_.get(data, "sectionTwo").map((item) => {
									return (
										<Td
											key={item}
											borderColor="gray.500"
											borderWidth="1px"
											m="0px"
											p="0px"
											textAlign="center"
										>
											<Text
												color="gray.700"
												fontSize="sm"
												fontWeight="bold"
											>
												{item}
											</Text>
										</Td>
									);
								})}
							</Tr>
							<Tr>
								{_.get(data, "sectionTwo").map((item) => {
									return (
										<Td
											key={item}
											borderColor="gray.500"
											borderWidth="1px"
										>
											<Image
												boxSize={8}
												margin="auto"
												maxW="32px"
												objectFit="cover"
												src={imgPath}
											/>
										</Td>
									);
								})}
							</Tr>
						</Tbody>
					</Table>
				</TableContainer>
			)}
		</Box>
	);
};

export default DentalChart1828;
