import { useEffect } from "react";
import { useSelector } from "react-redux";

import { Box, Flex, HStack, Image, Spacer } from "@chakra-ui/react";

import {
	isLoggedInSelector,
	tokenSelector,
} from "../modules/auth/engine/auth.selectors";

import { attachToken } from "../utils/api";

const NavBar = () => {
	const isLoggedIn = useSelector(isLoggedInSelector);
	const token = useSelector(tokenSelector);

	useEffect(() => {
		if (isLoggedIn) {
			attachToken(token);
		}
	}, []);
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
