import Link from "next/link";

import { Card, CardHeader, useColorModeValue } from "@chakra-ui/react";
import MiniStatistics from "../MiniStatisticsGlobalCount";
import WalletIcon from "../Icons/Icons";
import spiels from "../../constants/spiels";
import { ENDPOINTS } from "../../constants/Endpoints";

const CheckRequests = () => {
	const iconBoxInside = useColorModeValue("white", "white");
	return (
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
				<Link href={`${ENDPOINTS.REQUEST}`}>
					<MiniStatistics
						icon={
							<WalletIcon
								color={iconBoxInside}
								h="24px"
								w="24px"
							/>
						}
						title={spiels.COUNTER_CHECK_REQUESTS}
					/>
				</Link>
			</CardHeader>
		</Card>
	);
};

export default CheckRequests;
