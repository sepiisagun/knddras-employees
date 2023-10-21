import { Box, Flex } from "@chakra-ui/react";
import SideBarNavigation from "../components/SideBar/SideBarNavigation";

const ProfileLayout = ({ children }) => {
	return (
		<Box bgColor="gray.100" minH="100vh">
			<Flex w="100vw">
				<Flex maxW="30%" minW="fit-content">
					<SideBarNavigation />
				</Flex>

				<Flex maxW="full">{children}</Flex>
			</Flex>
		</Box>
	);
};

export default ProfileLayout;
