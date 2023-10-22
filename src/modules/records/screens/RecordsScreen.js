import React from "react";
import { Box } from "@chakra-ui/react";
import ProfileLayout from "../../../layout/ProfileLayout";
import MedicalRecordTab from "../components/AddRecordTab";

const RecordsScreen = () => {
	return (
		<ProfileLayout>
			<Box maxW="auto" p={{ base: 4, md: 5 }}>
				<MedicalRecordTab />
			</Box>
		</ProfileLayout>
	);
};

export default RecordsScreen;
