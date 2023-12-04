import { Card, CardHeader, Grid, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import MiniStatistics from "../MiniStatisticsCount";
import WalletIcon from "../Icons/Icons";

const Counters = ({ countersValue }) => {
	const iconBoxInside = useColorModeValue("white", "white");
	return (
		<Grid gap="2" templateRows={{ sm: "5fr", xl: "repeat(3, 1fr)" }}>
			{countersValue.map((counterValue) => (
				<Card
					key={counterValue}
					borderRadius="3xl"
					h="135px"
					mb={1}
					p="22px"
					variant="outline"
					w="lg"
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
	);
};

export default Counters;
