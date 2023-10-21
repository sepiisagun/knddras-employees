import { Box } from "@chakra-ui/react";
import React from "react";
import SideBarContent from "./SideBarContent";

const SideBarNavigation = () => {
	const mainPanel = React.useRef();
	const variantChange = "0.2s linear";
	const sidebarBg = "none";
	const sidebarRadius = "0px";
	const sidebarMargins = "0px";
	return (
		<Box ref={mainPanel}>
			<Box
				borderRightColor="gray.300"
				borderRightWidth="1px"
				display={{ sm: "none", xl: "block" }}
				position="fixed"
			>
				<Box
					bg={sidebarBg}
					borderRadius={sidebarRadius}
					h="calc(100vh - 32px)"
					m={sidebarMargins}
					maxW="320px"
					minW="fit-content"
					ms={{
						sm: "16px",
					}}
					my={{
						sm: "16px",
					}}
					pe="15px"
					transition={variantChange}
					w="full"
				>
					<SideBarContent />
				</Box>
			</Box>
		</Box>
	);
};

export default SideBarNavigation;
