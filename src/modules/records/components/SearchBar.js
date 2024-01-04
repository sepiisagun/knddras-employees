import { useSelector } from "react-redux";
import _ from "lodash";

import {
	Box,
	Button,
	Checkbox,
	Flex,
	HStack,
	Icon,
	Input,
	InputGroup,
	InputLeftElement,
	Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useQueryClient, useQuery } from "react-query";
import { SearchIcon } from "@chakra-ui/icons";
import { MdFilterList } from "react-icons/md";
import Link from "next/link";
import spiels from "../../../constants/spiels";
import { ENDPOINTS } from "../../../constants/Endpoints";
import EmployeeModal from "../../../components/Modals/EmployeeModal";
import { retrieveEmployeeRoles } from "../../auth/engine/auth.queries";
import { userRoleTypeSelector } from "../../auth/engine/auth.selectors";
import { ADMIN, ASSISTANT } from "../../../constants/userRoles";

const SearchBar = ({ isAdmin, location = "default", setValue }) => {
	const role = useSelector(userRoleTypeSelector);
	const [showFilter, setShowFilter] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const queryClient = useQueryClient();
	const [startDate, setStartDate] = useState("");
	const handleStartDateChange = (e) => setStartDate(e.target.value);
	const [endDate, setEndDate] = useState("");
	const handleEndDateChange = (e) => setEndDate(e.target.value);
	const {
		data: { data: roles },
	} = useQuery({
		initialData: [],
		placeholderData: [],
		queryFn: retrieveEmployeeRoles,
		queryKey: ["employee-roles-data"],
	});
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
					<Box py={3}>
						<HStack justifyContent="space-between">
							{isAdmin ? (
								<HStack>
									<HStack>
										<Box fontWeight="medium">Role</Box>
										<Select
											data-testid="role"
											id="role"
											name="role"
											placeholder="- Select Role -"
										>
											{roles.map((item) => (
												<option
													key={item.id}
													value={item.id}
												>
													{_.get(item, "name")}
												</option>
											))}
										</Select>
									</HStack>
									<HStack px={5}>
										<Checkbox />
										<Box fontWeight="medium">Blocked</Box>
									</HStack>
								</HStack>
							) : (
								<HStack>
									<HStack>
										<Box fontWeight="medium">
											Start Date
										</Box>
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
								</HStack>
							)}
							<Box>
								<Button
									onClick={() => {
										setEndDate("");
										setStartDate("");
									}}
								>
									Reset Filters
								</Button>
							</Box>
						</HStack>
					</Box>
				) : null}
			</Box>
		</Box>
	);
};

export default SearchBar;
