import { useDisclosure } from "@chakra-ui/react";
import SetAppointmentModal from "../Modals/SetAppointmentModal";

const AddAppointment = () => {
	const {
		isOpen: isOpenSetAppointment,
		onClose: onCloseSetAppointment,
		onOpen: onOpenSetAppointment,
	} = useDisclosure();
	return (
		<SetAppointmentModal
			isOpenSetAppointment={isOpenSetAppointment}
			onCloseSetAppointment={onCloseSetAppointment}
			onOpenSetAppointment={onOpenSetAppointment}
		/>
	);
};

export default AddAppointment;
