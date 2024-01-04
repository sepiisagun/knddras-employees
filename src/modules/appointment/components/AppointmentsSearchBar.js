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
	useDisclosure,
} from "@chakra-ui/react";
import { useQueryClient, useQuery } from "react-query";
import React, { useState } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import { MdFilterList } from "react-icons/md";
import spiels from "../../../constants/spiels";
import SetAppointmentModal from "../../../components/Modals/SetAppointmentModal";
import {
	retrieveDoctorAccounts,
	retrieveProcedures,
} from "../../../modules/auth/engine/auth.queries";
const AppointmentsSearchBar = ({
	setDoctor,
	setEndRange,
	setProcedure,
	setRange,
	setValue,
}) => {
	// const { onOpen: onOpenForgot } = useDisclosure();
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
	const {
		data: { data: doctorData = [] },
	} = useQuery({
		initialData: [],
		placeholderData: [],
		queryFn: retrieveDoctorAccounts,
		queryKey: ["doctor-data"],
	});
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
					<Box py={3}>
						<HStack justifyContent="space-between">
							<HStack>
								<HStack>
									<Box fontWeight="medium">Start Date</Box>
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
									<Box fontWeight="medium">End Date</Box>
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
								<HStack px={5}>
									<Box fontWeight="medium">Dentist</Box>
									<Select
										data-testid="doctor"
										id="doctor"
										name="doctor"
										onChange={(event) => {
											const selectedDoctorId =
												event.target.value;
											setDoctor(selectedDoctorId);
										}}
										placeholder="Select Dentist"
									>
										{doctorData.map((dentist) => (
											<option
												key={dentist.id}
												value={dentist.id}
											>
												Dr.{" "}
												{_.get(dentist, "firstName")}{" "}
												{_.get(dentist, "lastName")}
											</option>
										))}
									</Select>
								</HStack>

								<HStack px={5}>
									<Box fontWeight="medium">Procedure</Box>
									<Select
										data-testid="purpose"
										id="purpose"
										name="purpose"
										onChange={(event) => {
											const selectedProcedureId =
												event.target.value;
											setProcedure(selectedProcedureId);
										}}
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
		</>
	);
};

export default AppointmentsSearchBar;
