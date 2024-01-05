import { Tbody, Td, Text, Tr } from "@chakra-ui/react";
import React from "react";

const TreatmentBreakdownFee = ({ amount }) => {
	return (
		<Tbody>
			<Tr>
				<>
					<Td borderBottom="none">
						<Text fontSize="sm" fontWeight="light">
							Total
						</Text>
					</Td>

					<Td borderBottom="none">
						<Text fontWeight="light" textAlign="right">
							{`₱ ${amount}`}
						</Text>
					</Td>
				</>
			</Tr>
		</Tbody>
	);
};

export default TreatmentBreakdownFee;
