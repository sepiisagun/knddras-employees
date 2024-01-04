import _ from "lodash";

import {
	Box,
	Button,
	Flex,
	HStack,
	Icon,
	Input,
	InputGroup,
	InputLeftElement,
	Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { MdFilterList } from "react-icons/md";
import { useQuery } from "react-query";
import spiels from "../../../constants/spiels";
import { retrieveProcedures } from "../../../utils/engine/procedure.queries";

const ViewRecordSearchBar = () => {
	const [showFilter, setShowFilter] = useState(false);
	const [startDate, setStartDate] = useState("");
	const handleStartDateChange = (e) => setStartDate(e.target.value);
	const [endDate, setEndDate] = useState("");
	const handleEndDateChange = (e) => setEndDate(e.target.value);
	const {
		data: { data: procedureData = [] },
	} = useQuery({
		initialData: [],
		placeholderData: [],
		queryFn: retrieveProcedures,
		queryKey: ["procedure-data"],
	});
	return (
		<>
			<HStack py={3}>
				<InputGroup>
					<InputLeftElement pointerEvents="none">
						<SearchIcon boxSize={4} />
					</InputLeftElement>
					<Input
						borderRadius="xl"
						placeholder={spiels.PLACEHOLDER_SEARCH}
						type="text"
					/>
				</InputGroup>
				<Button
					onClick={() => {
						setShowFilter(!showFilter);
					}}
				>
					<Flex justifyContent="center" mr={2}>
						<Icon as={MdFilterList} h={5} w={5} />
					</Flex>
					<Box justifyContent="center">{spiels.TEXT_FILTER}</Box>
				</Button>
			</HStack>
			<Box>
				{showFilter ? (
					<Box py={3}>
						<Box>
							<HStack>
								<HStack>
									<Box fontWeight="medium">Start Date</Box>
									<Box>
										<Input
											borderRadius="md"
											onChange={handleStartDateChange}
											type="date"
											value={startDate}
										/>
									</Box>
								</HStack>
								<HStack>
									<Box fontWeight="medium">End Date</Box>
									<Box>
										<Input
											borderRadius="md"
											onChange={handleEndDateChange}
											type="date"
											value={endDate}
										/>
									</Box>
								</HStack>
								<HStack px={5}>
									<Box fontWeight="medium">Procedure</Box>
									<Select
										data-testid="purpose"
										id="purpose"
										name="purpose"
										placeholder="Select Procedure"
									>
										{procedureData.map((procedure) => (
											<option
												key={procedure.id}
												value={procedure.id}
											>
												{_.get(
													procedure,
													"readableName",
												)}
											</option>
										))}
									</Select>
								</HStack>
							</HStack>
						</Box>
					</Box>
				) : null}
			</Box>
		</>
	);
};

export default ViewRecordSearchBar;
