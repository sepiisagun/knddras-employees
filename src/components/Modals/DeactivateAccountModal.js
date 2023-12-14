import {
	Button,
	FormControl,
	FormErrorMessage,
	FormHelperText,
	Input,
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
import React, { useState } from "react";
import spiels from "../../constants/spiels";

const DeactivateAccountModal = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const [password, setPassword] = useState("");

	const handlePasswordChange = (e) => setPassword(e.target.value);

	const isPasswordError = password === "";
	return (
		<>
			<Button
				colorScheme="red"
				float="right"
				fontWeight="semibold"
				onClick={onOpen}
				size="sm"
				variant="outline"
				w={130}
			>
				{spiels.BUTTON_DEACTIVATE_ACCOUNT}
			</Button>

			<Modal isCentered isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>
						{spiels.HEADER_DEACTIVATE_ACCOUNT}
					</ModalHeader>
					<ModalCloseButton mt={3} />
					<ModalBody>
						<Text>{spiels.DELETE_CONFIRMATION}</Text>
						<FormControl isInvalid={isPasswordError} my={3}>
							<Input
								borderRadius="md"
								fontSize="sm"
								ms="4px"
								onChange={handlePasswordChange}
								placeholder="Your password"
								size="lg"
								type="password"
								value={password}
							/>
							{!isPasswordError ? (
								<FormHelperText />
							) : (
								<FormErrorMessage mb="24px" px={2}>
									Error Message
								</FormErrorMessage>
							)}
						</FormControl>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="gray" mr={3} onClick={onClose}>
							{spiels.BUTTON_CANCEL}
						</Button>
						<Button colorScheme="red" variant="solid">
							{spiels.BUTTON_DEACTIVATE}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default DeactivateAccountModal;
