import { Box, Flex, HStack, Image, Spacer } from "@chakra-ui/react";
import React from "react";

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
