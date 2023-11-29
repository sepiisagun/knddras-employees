import React from "react";
import { Flex, Box, Icon, Button } from "@chakra-ui/react";
import { Router } from "next/router";

const SideBarMenuItem = ({ item }) => {
	const minW = "100%";
	return (
		<Box key={item.key} w={minW}>
			<Button
				key={item.title}
				_hover={{
					bg: "gray.200",
				}}
				alignItems="center"
				borderRadius="15px"
				boxSize="initial"
				colorScheme="teal"
				justifyContent="flex-start"
				mb={{
					xl: "4px",
				}}
				mx={1}
				ps={{
					sm: "10px",
					xl: "10px",
				}}
				py="8px"
				variant={
					Router.pathname === `/${item.href}` ? "solid" : "ghost"
				}
				w={minW}
			>
				<Flex
					bg="white"
					borderRadius="15px"
					justifyContent="center"
					mr="12px"
					p="18px"
				>
					<Icon as={item.icon} color="teal.300" h={6} w={6} />
				</Flex>
				{item.title}
			</Button>
		</Box>
	);
};

export default SideBarMenuItem;
