import { useState } from "react";
import { useQuery } from "react-query";
import { Box } from "@chakra-ui/react";
import ProfileLayout from "../../../layout/ProfileLayout";
import RequestSearchBar from "../components/RequestSearchBar";
import StrapiTable from "../../../components/Table";

import { retrieveRequests } from "../engine/request.queries";

const RequestScreen = () => {
	const [searchInput, setSearchInput] = useState();
	const [dateStartInput, setDateStartInput] = useState();
	const [dateEndInput, setDateEndInput] = useState();
	const {
		data: { data: requestData },
		refetch,
	} = useQuery({
		initialData: [],
		placeholderData: [],
		queryFn: retrieveRequests,
		queryKey: [
			"requests",
			{
				filters: {
					...searchInput,
					date: {
						$between: [dateStartInput, dateEndInput],
					},
				},
				populate: ["purpose", "patient"],
				sort: ["date:desc"],
			},
		],
	});
	return (
		<ProfileLayout>
			<Box maxW="auto" p={{ base: 4, md: 5 }}>
				<RequestSearchBar
					refetch={refetch}
					setEndRange={(e) => setDateEndInput(e)}
					setRange={(e) => setDateStartInput(e)}
					setValue={(e) => setSearchInput(e)}
				/>
				<StrapiTable
					action={["View"]}
					data={requestData}
					headerTitles={[
						"Name",
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
