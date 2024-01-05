import { useQuery } from "react-query";
import { useRouter } from "next/router";
import _ from "lodash";

import { Box } from "@chakra-ui/react";

import StrapiTable from "../../../components/Table";

import ProfileLayout from "../../../layout/ProfileLayout";
import ViewRecordProfileTable from "../components/ViewRecordProfileTable";
import ViewRecordSearchBar from "../components/ViewRecordSearchBar";

import { retrieveRecord, retrieveTreatments } from "../engine/record.queries";

const ViewRecordScreen = () => {
	const router = useRouter();
	const { id } = router.query;

	const {
		data: { data: userRecord = [] },
		isFetched,
	} = useQuery({
		initialData: [],
		placeholderData: [],
		queryFn: retrieveRecord,
		queryKey: ["user-record-data", { id }],
	});

	const {
		data: { data: treamentData = [] },
	} = useQuery({
		enabled: isFetched,
		initialData: [],
		queryFn: retrieveTreatments,
		queryKey: [
			"user-treament-data",
			{
				filters: {
					record: _.get(userRecord, "id"),
				},
				populate: "*",
			},
		],
	});

	return (
		<ProfileLayout>
			<Box maxW="auto" p={{ base: 4, md: 5 }}>
				<ViewRecordProfileTable data={userRecord} />
				<ViewRecordSearchBar />
				<StrapiTable
					action={["View"]}
					data={treamentData}
					headerTitles={["Procedure", "Date", "Price", "Action"]}
					title="Treatments"
				/>
			</Box>
		</ProfileLayout>
	);
};

export default ViewRecordScreen;
