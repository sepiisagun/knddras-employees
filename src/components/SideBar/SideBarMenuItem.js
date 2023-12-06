import { Router, useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { Flex, Box, Icon, Button } from "@chakra-ui/react";

import { logout } from "../../modules/auth/engine/auth.actions";

const SideBarMenuItem = ({ item }) => {
	const dispatch = useDispatch();
	const router = useRouter();

	const handleLogout = () => {
		dispatch(logout());
		router.push("/");
	};
	return (
		<Box key={item.key}>
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
				onClick={item.title === "Logout" ? handleLogout : () => {}}
				ps={{
					sm: "10px",
					xl: "10px",
				}}
				py="8px"
				variant={
					Router.pathname === `/${item.href}` ? "solid" : "ghost"
				}
				w="100%"
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
