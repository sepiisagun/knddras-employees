import { Grid, GridItem } from "@chakra-ui/react";
import SideBarNavigation from "../components/SideBar/SideBarNavigation";

const ProfileLayout = ({ children }) => {
	return (
		<Grid gap={2} templateColumns="repeat(10, 1fr)">
			<GridItem colSpan="2" maxH="fit-content">
				<SideBarNavigation />
			</GridItem>
			<GridItem colSpan="8" maxH="fit-content">
				{children}
			</GridItem>
		</Grid>
	);
};

export default ProfileLayout;
