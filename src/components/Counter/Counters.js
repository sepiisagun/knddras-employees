import { Card, CardHeader, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import MiniStatistics from "../MiniStatisticsCount";
import WalletIcon from "../Icons/Icons";
import { COUNTER_VALUES } from "../../constants/temporaryValues";

const Counters = () => {
	const iconBoxInside = useColorModeValue("white", "white");
	return (
		<>
			{COUNTER_VALUES.map((counterValue) => (
				<Card key={counterValue} h="120px" mb={9} p="16px">
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
		</>
	);
};

export default Counters;
