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

import { useQueryClient } from "react-query";
import React, { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";

import { MdFilterList } from "react-icons/md";
import spiels from "../../../constants/spiels";

const RequestSearchBar = ({ setValue }) => {
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
							patient: {
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
								],
							},
						});
						queryClient.invalidateQueries({ queryKey: "requests" });
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
		</HStack>
	);
};

export default RequestSearchBar;
