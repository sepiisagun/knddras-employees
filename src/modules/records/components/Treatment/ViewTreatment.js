import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	StackDivider,
	Table,
	TableContainer,
	useDisclosure,
} from "@chakra-ui/react";
import spiels from "../../../../constants/spiels";
import { TRANSACTION_AMOUNT } from "../../../../constants/temporaryValues";
// import StrapiTable from "../../../../components/Table";
import TreatmentHeader from "./TreatmentHeader";
import TreatmentBreakdownFee from "./TreatmentBreakdownFee";

const ViewTreatment = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const total = TRANSACTION_AMOUNT[2];
	return (
		<>
			<Button
				colorScheme="blue"
				// float="right"
				mx={1}
				onClick={onOpen}
				size="md"
				variant="link"
			>
				{spiels.BUTTON_VIEW}
			</Button>

			<Modal isCentered isOpen={isOpen} onClose={onClose} size="2xl">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{spiels.TABLE_CHECKUP_HISTORY}</ModalHeader>
					<ModalCloseButton mt={2} />
					<ModalBody>
						<TableContainer>
							<TreatmentHeader />
							<StackDivider />
							<Table mt={6} size="sm">
								<TreatmentBreakdownFee
									key={total.value}
									amount={total}
								/>
							</Table>
						</TableContainer>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ViewTreatment;
