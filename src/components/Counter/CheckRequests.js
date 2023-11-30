import { Card, CardHeader, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import MiniStatistics from "../MiniStatisticsGlobalCount";
import WalletIcon from "../Icons/Icons";
import spiels from "../../constants/spiels";

const CheckRequests = () => {
	const iconBoxInside = useColorModeValue("white", "white");
	return (
		<Card
			_hover={{
				bgColor: "gray.50",
			}}
			borderRadius="3xl"
			cursor="pointer"
			h="120px"
			p="16px"
			variant="outline"
		>
			<CardHeader mb="1px">
				<MiniStatistics
					icon={
						<WalletIcon color={iconBoxInside} h="24px" w="24px" />
					}
					title={spiels.COUNTER_CHECK_REQUESTS}
				/>
			</CardHeader>
		</Card>
	);
};

export default CheckRequests;
