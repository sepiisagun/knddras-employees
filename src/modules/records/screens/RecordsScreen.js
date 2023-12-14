import { useQuery } from "react-query";
import _ from "lodash";

import {
	Button,
	Box,
	Card,
	CardHeader,
	Grid,
	useColorModeValue,
} from "@chakra-ui/react";
// import { DateTime } from "luxon";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import ProfileLayout from "../../../layout/ProfileLayout";
import StrapiTable from "../../../components/Table";
import MiniStatistics from "../../../components/MiniStatisticsCount";
import WalletIcon from "../../../components/Icons/Icons";
import SearchBar from "../components/SearchBar";
import spiels from "../../../constants/spiels";
import { retrieveRecords } from "../engine/record.queries";
import { retrievePatientAccounts } from "../../auth/engine/auth.queries";

const generatePDF = (patientData, header) => {
	const pdf = new jsPDF();
	pdf.text("KNDDRAS Records", 15, 10);
	const tableData = patientData.map((row) => [
		`${row.firstName} ${row.lastName}`, // "Name"
		row.mobileNumber, // "Contact Number"
		"", // "Last Visit"
		"", // "Status"
	]);
	pdf.autoTable({
		body: tableData,
		head: [header],
		startY: 20,
	});
	pdf.save("generateRecord.pdf");
};

const RequestScreen = () => {
	// const today = DateTime.now().minus({ month: 1 }).toISO();
	const {
		data: { total: recordTotal },
	} = useQuery({
		initialData: [],
		placeholderData: [],
		queryFn: retrieveRecords,
		queryKey: [
			"total-records-count",
			{
				populate: "*",
			},
		],
	});

	const {
		data: { data: patientData },
	} = useQuery({
		initialData: [],
		placeholderData: [],
		queryFn: retrievePatientAccounts,
		queryKey: ["total-patient-count", { populate: "*" }],
	});

	const RECORDS_COUNTERS = [
		{
			title: "Total Users",
			value: _.size(patientData),
		},
		{
			title: "Total Records",
			value: recordTotal,
		},
		{
			title: "Inactive",
			value: "-",
		},
	];
	const iconBoxInside = useColorModeValue("white", "white");

	const header = ["Name", "Contact Number", "Last Visit", "Status"];
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
				<SearchBar />
				<StrapiTable
					action={["View"]}
					data={patientData}
					headerTitles={[
						"Name",
						"Contact Number",
						"Last Visit",
						"Status",
						"Action",
					]}
				/>
				<Button
					colorScheme="teal"
					onClick={() => generatePDF(patientData, header)}
					w="full"
				>
					{spiels.BUTTON_GENERATE_RECORD}
				</Button>
			</Box>
		</ProfileLayout>
	);
};

export default RequestScreen;
