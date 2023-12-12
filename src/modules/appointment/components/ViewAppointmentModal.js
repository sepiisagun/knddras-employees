import _ from "lodash";
import { DateTime } from "luxon";

import {
	Button,
	Divider,
	Grid,
	GridItem,
	Icon,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useDisclosure,
} from "@chakra-ui/react";
import { IoNewspaperOutline, IoPersonSharp } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

import spiels from "../../../constants/spiels";
import RebookAppointmentModal from "./RebookAppointmentModal";

const ViewAppointmentModal = ({ data }) => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	return (
		<>
			<Button
				colorScheme="blackAlpha"
				mx={1}
				onClick={onOpen}
				size="md"
				variant="link"
			>
				{spiels.BUTTON_VIEW}
			</Button>

			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{spiels.VIEW_APPOINTMENT}</ModalHeader>
					<ModalCloseButton mt={2} />
					<ModalBody>
						{/* User Info */}
						<Grid templateColumns="repeat(8, 1fr)">
							<GridItem
								colSpan={1}
								position="relative"
								style={{ position: "relative" }}
								w={4}
							>
								<Icon
									as={IoPersonSharp}
									boxSize={6}
									style={{
										left: "100%",
										position: "absolute",
										top: "50%",
										transform: "translate(-50%, -50%)",
									}}
								/>
							</GridItem>
							<GridItem colSpan={6} maxH="fit-content">
								<Text fontWeight="bold">
									{_.get(data, "patient.data.firstName")}{" "}
									{_.get(data, "patient.data.lastName")}
								</Text>
								<Text fontSize="sm">
									{_.get(data, "patient.data.email")}
								</Text>
							</GridItem>
						</Grid>
						<Divider py={2} />
						{/* Schedule Info */}
						<Grid py={2} templateColumns="repeat(8, 1fr)">
							<GridItem
								colSpan={1}
								position="relative"
								style={{ position: "relative" }}
								w={4}
							>
								<Icon
									as={FaRegCalendar}
									boxSize={6}
									style={{
										left: "100%",
										position: "absolute",
										top: "50%",
										transform: "translate(-50%, -50%)",
									}}
								/>
							</GridItem>
							<GridItem colSpan={6} maxH="fit-content">
								<Text fontWeight="semibold">
									{DateTime.fromSQL(
										_.get(data, "time"),
									).toFormat("hh:mm a")}
								</Text>
								<Text fontSize="sm">
									{DateTime.fromSQL(
										_.get(data, "date"),
									).toFormat("MMMM d, yyyy")}
								</Text>
							</GridItem>
						</Grid>
						{/* Dentist Info */}
						<Grid py={2} templateColumns="repeat(8, 1fr)">
							<GridItem
								colSpan={1}
								position="relative"
								style={{ position: "relative" }}
								w={4}
							>
								<Icon
									as={FaUserDoctor}
									boxSize={6}
									style={{
										left: "100%",
										position: "absolute",
										top: "50%",
										transform: "translate(-50%, -50%)",
									}}
								/>
							</GridItem>
							<GridItem colSpan={6} maxH="fit-content">
								<Text fontWeight="bold">
									{_.get(data, "doctor.data.firstName")}{" "}
									{_.get(data, "doctor.data.lastName")}
								</Text>
							</GridItem>
						</Grid>
						{/* Procedure Info */}
						<Grid py={2} templateColumns="repeat(8, 1fr)">
							<GridItem
								colSpan={1}
								position="relative"
								style={{ position: "relative" }}
								w={4}
							>
								<Icon
									as={IoNewspaperOutline}
									boxSize={6}
									style={{
										left: "100%",
										position: "absolute",
										top: "50%",
										transform: "translate(-50%, -50%)",
									}}
								/>
							</GridItem>
							<GridItem colSpan={6} maxH="fit-content">
								<Text fontWeight="bold">
									{_.get(data, "purpose.data.readableName")}
								</Text>
							</GridItem>
						</Grid>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="gray" mr={3} onClick={onClose}>
							{spiels.BUTTON_CANCEL_APPOINTMENT}
						</Button>
						<RebookAppointmentModal />
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ViewAppointmentModal;
