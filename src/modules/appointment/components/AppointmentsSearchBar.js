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
import { useQueryClient } from "react-query";
import React, { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { MdFilterList } from "react-icons/md";
import spiels from "../../../constants/spiels";
import SetAppointmentModal from "../../../components/Modals/SetAppointmentModal";

const AppointmentsSearchBar = ({ setEndRange, setRange, setValue }) => {
	const [searchValue, setSearchValue] = useState("");
	const queryClient = useQueryClient();
	const {
		isOpen: isOpenModal,
		onClose: onCloseModal,
		onOpen: onOpenModal,
	} = useDisclosure();
	const [showFilter, setShowFilter] = useState(false);
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");

	return (
		<>
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
										patient: {
											$or: [
												{
													firstName: {
														$containsi:
															e.target.value,
													},
												},
												{
													lastName: {
														$containsi:
															e.target.value,
													},
												},
											],
										},
									},
									{
										doctor: {
											$or: [
												{
													firstName: {
														$containsi:
															e.target.value,
													},
												},
												{
													lastName: {
														$containsi:
															e.target.value,
													},
												},
											],
										},
									},
									{
										purpose: {
											$or: [
												{
													name: {
														$containsi:
															e.target.value,
													},
												},
												{
													readableName: {
														$containsi:
															e.target.value,
													},
												},
											],
										},
									},
								],
							});
							queryClient.invalidateQueries({
								queryKey: "requests",
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
				<SetAppointmentModal
					isOpenSetAppointment={isOpenModal}
					onCloseSetAppointment={onCloseModal}
					onOpenSetAppointment={onOpenModal}
				/>
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
											onChange={(e) => {
												setStartDate(e.target.value);
												setRange(e.target.value);
												queryClient.invalidateQueries({
													queryKey: "requests",
												});
											}}
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
											onChange={(e) => {
												setEndDate(e.target.value);
												setEndRange(e.target.value);
												queryClient.invalidateQueries({
													queryKey: "requests",
												});
											}}
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
		</>
	);
};

export default AppointmentsSearchBar;
