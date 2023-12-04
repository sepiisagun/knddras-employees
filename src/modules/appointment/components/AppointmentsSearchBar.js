import {
	Box,
	Button,
	Flex,
	HStack,
	Icon,
	Input,
	InputGroup,
	InputLeftElement,
	useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { MdFilterList } from "react-icons/md";
import spiels from "../../../constants/spiels";
import SetAppointmentModal from "./SetAppointmentModal";

const AppointmentsSearchBar = () => {
	const { onOpen: onOpenForgot } = useDisclosure();
	const {
		isOpen: isOpenModal,
		onClose: onCloseModal,
		onOpen: onOpenModal,
	} = useDisclosure();
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
			<SetAppointmentModal
				isOpenModal={isOpenModal}
				onCloseModal={onCloseModal}
				onOpenForgot={onOpenForgot}
				onOpenModal={onOpenModal}
			/>
		</HStack>
	);
};

export default AppointmentsSearchBar;
