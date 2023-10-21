// Chakra imports
import React from "react";
import { Flex, Stat, StatLabel, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "./Card/Card";
import CardBody from "./Card/CardBody";
import IconBox from "./Icons/IconBox";

const MiniStatistics = ({ icon, title }) => {
	const iconTeal = useColorModeValue("teal.300", "teal.300");

	return (
		<Card minH="83px">
			<CardBody>
				<Flex
					align="center"
					flexDirection="row"
					justify="center"
					w="100%"
				>
					<Stat me="auto">
						<StatLabel
							color="blackAlpha.800"
							fontSize="lg"
							fontWeight="bold"
							pb=".1rem"
						>
							{title}
						</StatLabel>
					</Stat>
					<IconBox as="box" bg={iconTeal} h="45px" w="45px">
						{icon}
					</IconBox>
				</Flex>
			</CardBody>
		</Card>
	);
};

export default MiniStatistics;
