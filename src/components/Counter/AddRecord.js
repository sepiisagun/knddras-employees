import { Card, CardHeader, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import MiniStatistics from "../MiniStatisticsGlobalCount";
import WalletIcon from "../Icons/Icons";
import spiels from "../../constants/spiels";

const AddRecord = () => {
	const iconBoxInside = useColorModeValue("white", "white");
	return (
		<Card
			_hover={{
				bgColor: "gray.50",
			}}
			cursor="pointer"
			h="120px"
			p="16px"
		>
			<CardHeader mb="1px">
				<MiniStatistics
					icon={
						<WalletIcon color={iconBoxInside} h="24px" w="24px" />
					}
					title={spiels.COUNTER_ADD_RECORD}
				/>
			</CardHeader>
		</Card>
	);
};

export default AddRecord;
