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
import spiels from "../../constants/spiels";

const SearchBar = () => {
	const [showFilter, setShowFilter] = useState(false);
	return (
		<Box>
			<HStack p={4}>
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
				<Button colorScheme="teal" onClick={() => setShowFilter(false)}>
					{spiels.BUTTON_SEARCH}
				</Button>
			</HStack>
			{showFilter ? (
				<Box px={4}>Filter Shown</Box>
			) : (
				<Box px={4}>Filter Not Shown</Box>
			)}
		</Box>
	);
};

export default SearchBar;
