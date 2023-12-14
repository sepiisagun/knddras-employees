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

const SearchBar = ({ location = "default", setValue }) => {
	const [showFilter, setShowFilter] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const queryClient = useQueryClient();
	return (
		<HStack py={3}>
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
			{location === "Employees" && <EmployeeModal location="Add" />}
			{location === "default" && (
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
	);
};

export default SearchBar;
