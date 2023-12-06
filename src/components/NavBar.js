import { Box, Flex, HStack, Image, Spacer } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { isLoggedInSelector } from "../modules/auth/engine/auth.selectors";

const NavBar = () => {
	const isLoggedIn = useSelector(isLoggedInSelector);
	const iconsize = "4vh";
	const px = "10px";
	const py = "15px";
	return (
		<Flex
			alignItems="center"
			borderBottom="1px"
			borderBottomColor="gray.300"
			px={px}
			py={py}
		>
			<HStack>
				<Flex
					alignItems="center"
					borderRadius="50px"
					h={iconsize}
					justifyContent="center"
					mr="10px"
					w={iconsize}
				>
					<Image
						alt="Dan Abramov"
						boxSize={iconsize}
						objectFit="cover"
						src="./Klinika ng Dentista Logo.png"
					/>
				</Flex>
				<Box fontWeight="medium">Klinika ng Dentista</Box>
			</HStack>
			<Spacer />
			{isLoggedIn && (
				<Flex
					alignItems="center"
					bg="blue.400"
					borderRadius="50px"
					h={iconsize}
					justifyContent="center"
					w={iconsize}
				>
					<Box fontWeight="bold">EM</Box>
				</Flex>
			)}
		</Flex>
	);
};

export default NavBar;
