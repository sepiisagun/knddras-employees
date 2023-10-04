import { Flex } from "@chakra-ui/react";
import React from "react";
import SideBarNavigation from "../../sideBar/SideBarNavigation";

const HomeScreen = () => {
	const secondary = "gray.100";
	const fullscreenH = "100vh";
	return (
		<Flex bg={secondary} minHeight={fullscreenH}>
			<SideBarNavigation />
		</Flex>
	);
};

export default HomeScreen;
