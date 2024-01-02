import { useQuery } from "react-query";

import {
	Box,
	Card,
	CardHeader,
	Grid,
	useColorModeValue,
} from "@chakra-ui/react";
import { DateTime } from "luxon";
import { useState } from "react";
import ProfileLayout from "../../../layout/ProfileLayout";
import StrapiTable from "../../../components/Table";
import MiniStatistics from "../../../components/MiniStatisticsCount";
import WalletIcon from "../../../components/Icons/Icons";
import AppointmentsSearchBar from "../components/AppointmentsSearchBar";

import { retrieveAppointments } from "../engine/appointment.queries";
import { retrieveRequests } from "../../request/engine/request.queries";

const AppointmentsScreen = () => {
	const today = DateTime.now().toFormat("yyyy-MM-dd");
	const [searchInput, setSearchInput] = useState();
	const [dateStartInput, setDateStartInput] = useState();
	const [dateEndInput, setDateEndInput] = useState();
	const {
		data: { total: upcomingTotal },
	} = useQuery({
		initialData: [],
		queryFn: retrieveAppointments,
		queryKey: [
			"upcoming-appointments-count",
			{
				filters: {
					$and: [
						{
							status: "ACCEPTED",
						},
						{
							date: {
								$gte: `${today}`,
							},
						},
					],
				},
			},
		],
	});

	const {
		data: { total: totalAppointments },
	} = useQuery({
		initialData: [],
		queryFn: retrieveAppointments,
		queryKey: ["total-appointments-count"],
	});

	const {
		data: { total: pendingTotal },
	} = useQuery({
		initialData: [],
		queryFn: retrieveRequests,
		queryKey: [
			"pending-requests-count",
			{
				filters: {
					status: "PENDING",
				},
			},
		],
	});

	const {
		data: { data },
		refetch,
	} = useQuery({
		initialData: [],
		queryFn: retrieveAppointments,
		queryKey: [
			"appointments-data",
			{
				date: {
					...dateStartInput,
					...dateEndInput,
				},
				filters: {
					...searchInput,
				},
				populate: "*",
				sort: "date:desc",
			},
		],
	});

	// eslint-disable-next-line no-console
	console.log("Start date:", dateStartInput);
	// eslint-disable-next-line no-console
	console.log("End date:", dateEndInput);

	const RECORDS_COUNTERS = [
		{
			title: "Upcoming Appointments",
			value: upcomingTotal,
		},
		{
			title: "Total Appointments",
			value: totalAppointments,
		},
		{
			title: "Pending Requests",
			value: pendingTotal,
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
					{RECORDS_COUNTERS.map((counterValue) => (
						<Card
							key={counterValue}
							borderRadius="3xl"
							h="90px"
							mb={2}
							px="4px"
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
				<AppointmentsSearchBar
					refetch={refetch}
					setEndRange={(e) => setDateEndInput(e)}
					setRange={(e) => setDateStartInput(e)}
					setValue={(e) => setSearchInput(e)}
				/>
				<StrapiTable
					action={["View", "Edit"]}
					data={data}
					headerTitles={[
						"Patient",
						"Purpose",
						"Assigned To",
						"Schedule",
						"Status",
						"Action",
					]}
				/>
			</Box>
		</ProfileLayout>
	);
};

export default AppointmentsScreen;
