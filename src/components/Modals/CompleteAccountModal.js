import Link from "next/link";

import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	Text,
	useDisclosure,
} from "@chakra-ui/react";

import spiels from "../../constants/spiels";

const CompleteAccountModal = () => {
	const { isOpen, onClose } = useDisclosure({
		defaultIsOpen: true,
	});

	return (
		<Modal
			closeOnOverlayClick={false}
			isCentered
			isOpen={isOpen}
			onClose={onClose}
		>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Information</ModalHeader>
				<ModalBody>
					<Text>
						To secure your account, you must change your password
						first before you proceed.
					</Text>
				</ModalBody>
				<ModalFooter>
					<Link
						href={{
							pathname: "/account",
							query: {
								tab: 1,
							},
						}}
					>
						<Button onClick={onClose}>
							{spiels.BUTTON_PROCEED}
						</Button>
					</Link>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default CompleteAccountModal;
