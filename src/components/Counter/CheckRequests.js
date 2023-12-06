import { Card, CardHeader, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import MiniStatistics from "../MiniStatisticsGlobalCount";
import WalletIcon from "../Icons/Icons";
import spiels from "../../constants/spiels";
import { ENDPOINTS } from "../../constants/Endpoints";

const CheckRequests = () => {
	const iconBoxInside = useColorModeValue("white", "white");
	return (
		<Link href={`${ENDPOINTS.REQUEST}`} passHref>
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
							<WalletIcon
								color={iconBoxInside}
								h="24px"
								w="24px"
							/>
						}
						title={spiels.COUNTER_CHECK_REQUESTS}
					/>
				</CardHeader>
			</Card>
		</Link>
	);
};

export default CheckRequests;
