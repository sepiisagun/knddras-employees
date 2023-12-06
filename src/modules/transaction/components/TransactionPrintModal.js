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

const TransactionPrintModal = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<>
			<Button
				colorScheme="teal"
				float="right"
				mx={1}
				onClick={onOpen}
				size="md"
				variant="solid"
			>
				{spiels.BUTTON_PRINT_TABLE}
			</Button>

			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						{spiels.GENERATE_TRANSACTION_REPORT}
					</ModalHeader>
					<ModalCloseButton mt={2} />
					<ModalBody>
						<Text>
							{spiels.PRINT_TRANSACTION_TABLE}{" "}
							<Text as="b"> May 1, 2023</Text> to{" "}
							<Text as="b">May 5, 2023</Text>?
						</Text>
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

export default TransactionPrintModal;
