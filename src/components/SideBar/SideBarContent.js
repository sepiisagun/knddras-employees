import {
	Flex,
	Button,
	Box,
	Icon,
	useColorModeValue,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import {
	MdOutlineDashboardCustomize,
	MdOutlineCalendarToday,
	MdOutlinePhotoFilter,
	MdSchedule,
	MdOutlineTopic,
	MdOutlineMultipleStop,
	MdOutlineLogout,
} from "react-icons/md";
import Titles from "../../constants/titles";
import SideBarMenuItem from "./SideBarMenuItem";

const SideBarContent = () => {
	// const bg = "red.200";
	const minH = "100%";
	const minW = "100%";
	const iconRad = "15px";
	const activeBg = useColorModeValue("white", "gray.700");
	const pyInactive = "8px";
	const iconP = "12px";
	const iconSize = 6;
	const appointmentItems = [
		{
			icon: MdOutlinePhotoFilter,
			key: 0,
			name: Titles.TXT_REQUESTS,
			path: "#",
		},
		{
			icon: MdSchedule,
			key: 1,
			name: Titles.TXT_APPOINTMENT,
			path: "#",
		},
		{
			icon: MdOutlineCalendarToday,
			key: 2,
			name: Titles.TXT_CALENDAR,
			path: "#",
		},
	];
	const recordsTransactionsItems = [
		{
			icon: MdOutlineTopic,
			key: 0,
			name: Titles.TXT_RECORDS,
			path: "#",
		},
		{
			icon: MdOutlineMultipleStop,
			key: 1,
			name: Titles.TXT_TRANSACTIONS,
			path: "#",
		},
	];
	return (
		<VStack h={minH}>
			<Button
				_active={{
					bg: "inherit",
					borderColor: "transparent",
					transform: "none",
				}}
				_focus={{
					boxShadow: "none",
				}}
				_hover="none"
				alignItems="center"
				bg={activeBg}
				borderRadius="15px"
				boxSize="initial"
				justifyContent="flex-start"
				mb={{
					xl: "4px",
				}}
				mx={{
					xl: "auto",
				}}
				ps={{
					sm: "10px",
					xl: "16px",
				}}
				py="8px"
				w={minW}
			>
				<Flex alignItems="center" gap="8px">
					<Flex
						bg="teal.300"
						borderRadius={iconRad}
						justifyContent="center"
						mr="8px"
						p={iconP}
					>
						<Icon
							as={MdOutlineDashboardCustomize}
							color="white"
							h={iconSize}
							w={iconSize}
						/>
					</Flex>
					<Box>{Titles.TXT_DASHBOARD}</Box>
				</Flex>
			</Button>
			{/* Appointment Items */}
			<Flex justifyContent="flex-start" w={minW}>
				<VStack w={minW}>
					<Box fontWeight="bold" textTransform="uppercase" w={minW}>
						{Titles.TXT_APPOINTMENT}
					</Box>
					<Box w={minW}>
						{appointmentItems.map((item) => (
							<SideBarMenuItem key={item.key} item={item} />
						))}
					</Box>
				</VStack>
			</Flex>
			{/* Records and Transactions Items */}
			<Flex
				borderBottom="1px"
				borderColor="gray.300"
				justifyContent="flex-start"
				w={minW}
			>
				<VStack w={minW}>
					<Box fontWeight="bold" textTransform="uppercase" w={minW}>
						{Titles.TXT_RECNTRANS}
					</Box>
					<Box w={minW}>
						{recordsTransactionsItems.map((item) => (
							<SideBarMenuItem key={item.key} item={item} />
						))}
					</Box>
				</VStack>
			</Flex>
			{/* Log Out Button */}
			<Flex w={minW}>
				<Button
					alignItems="center"
					borderRadius="15px"
					boxSize="initial"
					justifyContent="flex-start"
					mb={{
						xl: "4px",
					}}
					mx={{
						xl: "auto",
					}}
					ps={{
						sm: "10px",
						xl: "16px",
					}}
					py={pyInactive}
					w={minW}
				>
					<Flex alignItems="center">
						<Flex
							bg="white"
							borderRadius={iconRad}
							justifyContent="center"
							mr="16px"
							p={iconP}
						>
							<Icon
								as={MdOutlineLogout}
								color="teal.300"
								h={iconSize}
								w={iconSize}
							/>
						</Flex>
						<Box>{Titles.TXT_LOGOUT}</Box>
					</Flex>
				</Button>
			</Flex>
		</VStack>
	);
};

export default SideBarContent;
