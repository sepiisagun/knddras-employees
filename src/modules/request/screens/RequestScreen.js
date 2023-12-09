import { useQuery } from "react-query";
import { Box } from "@chakra-ui/react";
import ProfileLayout from "../../../layout/ProfileLayout";
import RequestSearchBar from "../components/RequestSearchBar";
import StrapiTable from "../../../components/Table";

import { retrieveRequests } from "../engine/request.queries";

const RequestScreen = () => {
	const {
		data: { data: requestData },
	} = useQuery({
		initialData: [],
		placeholderData: [],
		queryFn: retrieveRequests,
		queryKey: [
			"requests",
			{
				// filters: {
				// 	patient: {
				// 		id: _.get(user, "id", 0),
				// 	},
				// },
				// paginate: {
				// 	page: 1,
				// 	pageSize: 10,
				// },
				populate: ["purpose", "patient"],
				// sort: ["date:desc"],
			},
		],
	});
	return (
		<ProfileLayout>
			<Box maxW="auto" p={{ base: 4, md: 5 }}>
				<RequestSearchBar />
				<StrapiTable
					action={["View"]}
					data={requestData}
					headerTitles={[
						"Name",
						"Procedure",
						"Contact Number",
						"Schedule",
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
