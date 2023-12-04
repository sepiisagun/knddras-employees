import { Box } from "@chakra-ui/react";
import ProfileLayout from "../../../layout/ProfileLayout";
import RequestSearchBar from "../components/RequestSearchBar";
import StrapiTable from "../../../components/Table";

const RequestScreen = () => {
	return (
		<ProfileLayout>
			<Box maxW="auto" p={{ base: 4, md: 5 }}>
				<RequestSearchBar />
				<StrapiTable
					action={["View"]}
					headerTitles={[
						"Name",
						"Procedure",
						"Contact Number",
						"Prospect Schedule",
						"Status",
						"Action",
					]}
					title="CTTable"
				/>
			</Box>
		</ProfileLayout>
	);
};

export default RequestScreen;
