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
	const [pendingStatus, setPendingStatus] = useState();
	const [acceptedStatus, setAcceptedStatus] = useState();
	const [cancelledStatus, setCancelledStatus] = useState();
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
					$or: [
						{
							status: pendingStatus,
						},
						{
							status: cancelledStatus,
						},
						{
							status: acceptedStatus,
						},
					],
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
					setAccepted={(e) => setAcceptedStatus(e)}
					setCancelled={(e) => setCancelledStatus(e)}
					setEndRange={(e) => setDateEndInput(e)}
					setPending={(e) => setPendingStatus(e)}
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
