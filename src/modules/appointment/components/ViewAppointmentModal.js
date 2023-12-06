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
import React from "react";
import { IoPersonSharp } from "react-icons/io5";
import spiels from "../../../constants/spiels";
import { APPOINTMENT_USER_ONE } from "../../../constants/temporaryValues";
import RebookAppointmentModal from "./RebookAppointmentModal";

const ViewAppointmentModal = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<>
			<Button
				colorScheme="blackAlpha"
				float="right"
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
								<Text fontWeight="bold">Segun Adebayo</Text>
								<Text fontSize="sm">UI Engineer</Text>
							</GridItem>
						</Grid>
						<Divider py={2} />
						{APPOINTMENT_USER_ONE.map((patient) => (
							<Grid
								key={patient.key}
								py={2}
								templateColumns="repeat(8, 1fr)"
							>
								<GridItem
									colSpan={1}
									position="relative"
									style={{ position: "relative" }}
									w={4}
								>
									<Icon
										as={patient.icon}
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
										{patient.value}
									</Text>
									<Text fontSize="sm">
										{patient.subValue}
									</Text>
								</GridItem>
							</Grid>
						))}
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
