import { Table, Tbody, Td, Text, Tr } from "@chakra-ui/react";

const AppointmentRequestHeader = ({ patient }) => {
	return (
		<Table variant="simple">
			<Tbody>
				<Tr>
					<Td pb={4} pt={0} px={1}>
						{patient.map((item) => (
							<Text key={item.value} fontWeight="bold">
								{item.label}
								<Text as="b" fontWeight="normal">
									{item.value}
								</Text>
							</Text>
						))}
					</Td>
				</Tr>
			</Tbody>
		</Table>
	);
};

export default AppointmentRequestHeader;
