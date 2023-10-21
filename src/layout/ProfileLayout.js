import { Box, Center, Flex } from "@chakra-ui/react";
import SideBarNavigation from "../components/SideBar/SideBarNavigation";

const ProfileLayout = ({ children }) => {
	return (
		<Flex bgColor="gray.100" minH="calc(100vh - 85px)">
			<Center>
				<SideBarNavigation />
			</Center>

			<Box flex="1">{children}</Box>
		</Flex>
	);
};

export default ProfileLayout;
