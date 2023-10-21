import { Box, Flex, HStack, Icon, Spacer } from "@chakra-ui/react";
import React from "react";
import { RiFlashlightFill } from "react-icons/ri";

const NavBar = () => {
	const iconsize = "40px";
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
					bg="teal.300"
					borderRadius="50px"
					h={iconsize}
					justifyContent="center"
					mr="10px"
					w={iconsize}
				>
					<Icon as={RiFlashlightFill} color="white" h={8} w={8} />
				</Flex>
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
