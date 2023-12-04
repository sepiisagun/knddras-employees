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
import Link from "next/link";
import spiels from "../../../constants/spiels";
import ENDPOINTS from "../../../constants/Endpoints";

const AddRecordSearchBar = () => {
	const [showFilter, setShowFilter] = useState(false);
	return (
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
			<Link href={`${ENDPOINTS.ADD_RECORD}`} passHref>
				<Button colorScheme="teal" onClick={() => setShowFilter(false)}>
					{spiels.BUTTON_ADD_RECORD}
				</Button>
			</Link>
		</HStack>
	);
};

export default AddRecordSearchBar;
