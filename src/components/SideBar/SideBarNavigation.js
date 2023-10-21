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
				h="100vh"
				pr="2"
				py="2"
			>
				<Box
					bg={sidebarBg}
					borderRadius={sidebarRadius}
					h="100vh"
					m={sidebarMargins}
					maxH="100%"
					minW="300px"
					ms={{
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
