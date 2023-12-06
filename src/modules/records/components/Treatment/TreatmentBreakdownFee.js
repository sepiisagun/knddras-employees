import { Tbody, Td, Text, Tr } from "@chakra-ui/react";
import React from "react";

const TreatmentBreakdownFee = ({ amount }) => {
	return (
		<Tbody>
			<Tr key={amount.label}>
				<>
					<Td borderBottom="none">
						<Text fontSize="sm" fontWeight="light">
							{amount.label}
						</Text>
					</Td>

					<Td borderBottom="none">
						<Text fontWeight="light" textAlign="right">
							{amount.value}
						</Text>
					</Td>
				</>
			</Tr>
		</Tbody>
	);
};

export default TreatmentBreakdownFee;
