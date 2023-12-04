import { Box } from "@chakra-ui/react";
import React from "react";

import ProfileLayout from "../../../layout/ProfileLayout";
import ViewRecordProfileTable from "../components/ViewRecordProfileTable";
import ViewRecordSearchBar from "../components/ViewRecordSearchBar";
import CTTable from "../components/CTTable";

const ViewRecordScreen = () => {
	return (
		<ProfileLayout>
			<Box maxW="auto" p={{ base: 4, md: 5 }}>
				<ViewRecordProfileTable />
				<ViewRecordSearchBar />
				<CTTable />
			</Box>
		</ProfileLayout>
	);
};

export default ViewRecordScreen;
