import { Table, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import spiels from "../../constants/spiels";

const AppointmentRequestHeader = ({
	dateAndSlot,
	fullName,
	mobileNumber,
	procedureName,
}) => {
	return (
		<Table variant="simple">
			<Tbody>
				<Tr>
					<Td pb={4} pt={0} px={1}>
						<Text fontWeight="bold">
							{spiels.LABEL_NAME}
							<Text as="b" fontWeight="normal">
								{fullName}
							</Text>
						</Text>
						<Text fontWeight="bold">
							{spiels.LABEL_PROCEDURE}
							<Text as="b" fontWeight="normal">
								{procedureName}
							</Text>
						</Text>
						<Text fontWeight="bold">
							{spiels.LABEL_MOBILE}
							<Text as="b" fontWeight="normal">
								{mobileNumber}
							</Text>
						</Text>
						<Text fontWeight="bold">
							{spiels.LABEL_SCHEDULE}
							<Text as="b" fontWeight="normal">
								{dateAndSlot}
							</Text>
						</Text>
					</Td>
				</Tr>
			</Tbody>
		</Table>
	);
};

export default AppointmentRequestHeader;
