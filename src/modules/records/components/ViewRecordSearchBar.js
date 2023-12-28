import {
	Box,
	Button,
	Flex,
	HStack,
	Icon,
	Input,
	InputGroup,
	InputLeftElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { MdFilterList } from "react-icons/md";
import spiels from "../../../constants/spiels";

const ViewRecordSearchBar = () => {
	const [showFilter, setShowFilter] = useState(false);
	const [startDate, setStartDate] = useState("")
	const handleStartDateChange = (e) => setStartDate(e.target.value);
	const [endDate, setEndDate] = useState("")
	const handleEndDateChange = (e) => setEndDate(e.target.value);
	return (
		<><HStack py={3}>
			<InputGroup>
				<InputLeftElement pointerEvents="none">
					<SearchIcon boxSize={4} />
				</InputLeftElement>
				<Input
					borderRadius="xl"
					placeholder={spiels.PLACEHOLDER_SEARCH}
					type="text" />
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
		</HStack><Box>
				{showFilter ? (
					<Box pt={3}>
						<Box>
							<HStack>
								<HStack>
									<Box>Start Date</Box>
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
									<Box>End Date</Box>
									<Box>
										<Input
											borderRadius="md"
											onChange={handleEndDateChange}
											type="date"
											value={endDate}
										/>
									</Box>
								</HStack>
							</HStack>
						</Box>
					</Box>
				) : null}
			</Box></>
	);
};

export default ViewRecordSearchBar;
