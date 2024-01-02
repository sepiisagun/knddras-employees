import { useSelector } from "react-redux";

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
import { useQueryClient } from "react-query";
import { SearchIcon } from "@chakra-ui/icons";
import { MdFilterList } from "react-icons/md";
import Link from "next/link";
import spiels from "../../../constants/spiels";
import { ENDPOINTS } from "../../../constants/Endpoints";
import EmployeeModal from "../../../components/Modals/EmployeeModal";

import { userRoleTypeSelector } from "../../auth/engine/auth.selectors";
import { ADMIN, ASSISTANT } from "../../../constants/userRoles";

const SearchBar = ({ location = "default", setValue }) => {
	const role = useSelector(userRoleTypeSelector);
	const [showFilter, setShowFilter] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const queryClient = useQueryClient();
	const [startDate, setStartDate] = useState("");
	const handleStartDateChange = (e) => setStartDate(e.target.value);
	const [endDate, setEndDate] = useState("");
	const handleEndDateChange = (e) => setEndDate(e.target.value);
	return (
		<Box py={3}>
			<HStack>
				<InputGroup>
					<InputLeftElement pointerEvents="none">
						<SearchIcon boxSize={4} />
					</InputLeftElement>
					<Input
						borderRadius="xl"
						onChange={(e) => {
							setSearchValue(e.target.value);
							setValue({
								$or: [
									{
										firstName: {
											$containsi: e.target.value,
										},
									},
									{
										lastName: {
											$containsi: e.target.value,
										},
									},
									{
										role: {
											name: {
												$containsi: e.target.value,
											},
										},
									},
								],
							});
							queryClient.invalidateQueries({
								queryKey: "total-patient-count",
							});
						}}
						placeholder={spiels.PLACEHOLDER_SEARCH}
						type="text"
						value={searchValue}
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
				{location === "Employees" && role === ADMIN && (
					<EmployeeModal location="Add" />
				)}
				{location === "default" && role === ASSISTANT && (
					<Link href={`${ENDPOINTS.ADD_RECORD}`} passHref>
						<Button
							colorScheme="teal"
							onClick={() => setShowFilter(false)}
						>
							{spiels.BUTTON_ADD_RECORD}
						</Button>
					</Link>
				)}
			</HStack>
			<Box>
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
			</Box>
		</Box>
	);
};

export default SearchBar;
