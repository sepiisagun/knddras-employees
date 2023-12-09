import { useQuery } from "react-query";

import {
	Box,
	Card,
	CardHeader,
	Grid,
	useColorModeValue,
} from "@chakra-ui/react";
// import { DateTime } from "luxon";

import ProfileLayout from "../../../layout/ProfileLayout";
import StrapiTable from "../../../components/Table";
import MiniStatistics from "../../../components/MiniStatisticsCount";
import WalletIcon from "../../../components/Icons/Icons";
import SearchBar from "../components/SearchBar";

import { retrieveRecords } from "../engine/record.queries";
import { retrievePatientAccounts } from "../../auth/engine/auth.queries";

const RequestScreen = () => {
	// const today = DateTime.now().minus({ month: 1 }).toISO();
	const {
		data: { data, total: recordTotal },
	} = useQuery({
		initialData: [],
		placeholderData: [],
		queryFn: retrieveRecords,
		queryKey: [
			"total-records-count",
			{
				// filters: {
				// 	createdAt: {
				// 		$gte: today,
				// 	},
				// },
				populate: "*",
			},
		],
	});

	const {
		data: { data: patientData, total: patientTotal },
	} = useQuery({
		initialData: [],
		placeholderData: [],
		queryFn: retrievePatientAccounts,
		queryKey: ["total-patient-count"],
	});

	const RECORDS_COUNTERS = [
		{
			title: "New Records",
			value: "25",
		},
		{
			title: "Total Records",
			value: recordTotal,
		},
		{
			title: "Inactive",
			value: "1, 250",
		},
	];
	const iconBoxInside = useColorModeValue("white", "white");
	return (
		<ProfileLayout>
			<Box maxW="auto" p={{ base: 4, md: 5 }}>
				<Grid
					gap="2"
					templateColumns={{ sm: "5fr", xl: "repeat(3, 1fr)" }}
				>
					{RECORDS_COUNTERS.map((counterValue, index) => (
						<Card
							key={index}
							borderRadius="3xl"
							h="120px"
							mb={2}
							p="16px"
							variant="outline"
						>
							<CardHeader mb="1px">
								<MiniStatistics
									count={counterValue.value}
									icon={
										<WalletIcon
											color={iconBoxInside}
											h="24px"
											w="24px"
										/>
									}
									title={counterValue.title}
								/>
							</CardHeader>
						</Card>
					))}
				</Grid>
				<SearchBar />
				<StrapiTable
					action={[]}
					data={patientData}
					headerTitles={[
						"Name",
						"Contact Number",
						"Last Visit",
						"Status",
					]}
				/>
			</Box>
		</ProfileLayout>
	);
};

export default RequestScreen;
