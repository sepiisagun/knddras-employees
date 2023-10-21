// Chakra imports
import React from "react";
import {
	Flex,
	Stat,
	StatLabel,
	StatNumber,
	useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "./Card/Card";
import CardBody from "./Card/CardBody";
import IconBox from "./Icons/IconBox";

const MiniStatistics = ({ count, icon, title }) => {
	const iconTeal = useColorModeValue("teal.300", "teal.300");
	const textColor = useColorModeValue("gray.700", "white");

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
							color="blackAlpha.900"
							fontSize="lg"
							fontWeight="bold"
							pb=".1rem"
						>
							{title}
						</StatLabel>
						<Flex>
							<StatNumber color={textColor} fontSize="lg">
								{count}
							</StatNumber>
						</Flex>
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
