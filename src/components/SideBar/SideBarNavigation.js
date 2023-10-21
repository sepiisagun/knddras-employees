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
				pr="2"
				py="2"
			>
				<Box
					bg={sidebarBg}
					borderRadius={sidebarRadius}
					m={sidebarMargins}
					minH="calc(100vh - 90px)"
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
