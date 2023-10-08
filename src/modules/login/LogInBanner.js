import { Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import spiels from "../../constants/spiels";

const LogInBanner = () => {
	const imgPath = "/knddrasLogo.png";
	return (
		<Flex alignItems="center" justifyContent="center">
			<Image
				alt="Klinika ng Dentista Logo"
				boxSize="100px"
				objectFit="cover"
				src={imgPath}
			/>
			<Heading
				as="h1"
				fontWeight="medium"
				maxW="50%"
				size="3xl"
				textAlign="center"
			>
				{spiels.COMP_NAME}
			</Heading>
		</Flex>
	);
};

export default LogInBanner;
