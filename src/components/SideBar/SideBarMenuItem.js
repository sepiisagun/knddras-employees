import React from "react";
import { Flex, Box, Icon, Link } from "@chakra-ui/react";

const SideBarMenuItem = ({ item }) => {
	const iconRad = "15px";
	const inactiveColor = "gray.400";
	const pyInactive = "8px";
	const iconP = "12px";
	const iconSize = 6;
	const minW = "100%";
	return (
		<Link
			_hover={{
				textDecoration: "none",
			}}
			href={item.path}
		>
			<Flex
				_hover={{
					bg: "gray.200",
				}}
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
				<Flex
					bg="white"
					borderRadius={iconRad}
					justifyContent="center"
					mr="16px"
					p={iconP}
				>
					<Icon
						as={item.icon}
						color="teal.300"
						h={iconSize}
						w={iconSize}
					/>
				</Flex>
				<Box color={inactiveColor}>{item.name}</Box>
			</Flex>
		</Link>
	);
};

export default SideBarMenuItem;
