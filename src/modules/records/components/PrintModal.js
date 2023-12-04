import {
	Button,
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
import spiels from "../../../constants/spiels";

const PrintModal = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<>
			<Button
				colorScheme="purple"
				float="right"
				mt={3}
				mx={1}
				onClick={onOpen}
				size="md"
				variant="solid"
			>
				{spiels.BUTTON_PRINT}
			</Button>

			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{spiels.BUTTON_PRINT_RECORD}</ModalHeader>
					<ModalCloseButton mt={2} />
					<ModalBody>
						<Text>{spiels.PRINT_CONFIRMATION}</Text>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="gray" mr={3} onClick={onClose}>
							{spiels.BUTTON_CANCEL}
						</Button>
						<Button colorScheme="blue" variant="solid">
							{spiels.BUTTON_PROCEED}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default PrintModal;
