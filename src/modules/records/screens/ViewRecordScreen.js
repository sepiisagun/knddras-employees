import { useQuery } from "react-query";
import { useRouter } from "next/router";

import { Box } from "@chakra-ui/react";

import StrapiTable from "../../../components/Table";

import ProfileLayout from "../../../layout/ProfileLayout";
import ViewRecordProfileTable from "../components/ViewRecordProfileTable";
import ViewRecordSearchBar from "../components/ViewRecordSearchBar";

import {
	retrieveRecord,
	retrieveUserAppointments,
} from "../engine/record.queries";

const ViewRecordScreen = () => {
	const router = useRouter();
	const { id } = router.query;

	const {
		data: { data: userRecord = [] },
	} = useQuery({
		initialData: [],
		placeholderData: [],
		queryFn: retrieveRecord,
		queryKey: ["user-record-data", { id }],
	});

	const {
		data: { data },
	} = useQuery({
		initialData: [],
		queryFn: retrieveUserAppointments,
		queryKey: [
			"appointments-data",
			{
				populate: "*",
				sort: "date:desc",
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
					data={data}
					headerTitles={["Procedure", "Date", "Price", "Action"]}
					title="Treatments"
				/>
			</Box>
		</ProfileLayout>
	);
};

export default ViewRecordScreen;
