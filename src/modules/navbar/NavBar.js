import { Box, Flex, HStack, Spacer } from "@chakra-ui/react";
import React from "react";

const NavBar = () => {
	const iconsize = "40px";
	return (
		<Flex
			alignItems="center"
			borderBottom="1px"
			borderBottomColor="gray.300"
			px="30px"
			py="20px"
		>
			<HStack>
				<Box
					bg="teal.300"
					borderRadius="50px"
					h={iconsize}
					mr="10px"
					w={iconsize}
				/>
				<Box fontWeight="medium">Klinika ng Dentista</Box>
			</HStack>
			<Spacer />
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
		</Flex>
	);
};

export default NavBar;
