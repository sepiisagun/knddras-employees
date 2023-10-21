import { Grid, GridItem } from "@chakra-ui/react";
import SideBarNavigation from "../components/SideBar/SideBarNavigation";

const ProfileLayout = ({ children }) => {
	return (
		<Grid templateAreas={`"nav main"`}>
			<GridItem area="nav" maxW="30%" minW="fit-content" pl="2">
				<SideBarNavigation />
			</GridItem>

			<GridItem area="main" flex="1" maxW="full">
				{children}
			</GridItem>
		</Grid>
	);
};

export default ProfileLayout;
