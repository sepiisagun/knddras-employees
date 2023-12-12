import { Card, CardHeader, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import MiniStatistics from "../MiniStatisticsGlobalCount";
import WalletIcon from "../Icons/Icons";
import spiels from "../../constants/spiels";
import { ENDPOINTS } from "../../constants/Endpoints";

const AddRecord = () => {
	const iconBoxInside = useColorModeValue("white", "white");
	return (
		<Link href={`${ENDPOINTS.ADD_RECORD}`} passHref>
			<Card
				_hover={{
					bgColor: "gray.50",
				}}
				borderRadius="3xl"
				cursor="pointer"
				h="80px"
				variant="outline"
			>
				<CardHeader mb="1px">
					<MiniStatistics
						icon={
							<WalletIcon
								color={iconBoxInside}
								h="24px"
								w="24px"
							/>
						}
						title={spiels.COUNTER_ADD_RECORD}
					/>
				</CardHeader>
			</Card>
		</Link>
	);
};

export default AddRecord;
