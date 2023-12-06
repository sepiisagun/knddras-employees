import {
	Box,
	Card,
	CardHeader,
	Grid,
	useColorModeValue,
} from "@chakra-ui/react";
import ProfileLayout from "../../../layout/ProfileLayout";
import StrapiTable from "../../../components/Table";
import MiniStatistics from "../../../components/MiniStatisticsCount";
import WalletIcon from "../../../components/Icons/Icons";
import TransactionsSearchBar from "../components/TransactionsSearchBar";

const TransactionsScreen = () => {
	const TRANSACTION_COUNTERS = [
		{
			title: "Transactions this Month",
			value: "25",
		},
		{
			title: "Annual Transactions",
			value: "3,500",
		},
		{
			title: "Total Transactions",
			value: "1,250",
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
					{TRANSACTION_COUNTERS.map((counterValue) => (
						<Card
							key={counterValue}
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
				<TransactionsSearchBar />
				<StrapiTable
					action={["View"]}
					headerTitles={[
						"Name",
						"Procedure",
						"Assigned To",
						"Transaction Date",
						"Total Fee",
						"Action",
					]}
				/>
			</Box>
		</ProfileLayout>
	);
};

export default TransactionsScreen;
