import React from "react";
import { Center, Flex } from "@chakra-ui/react";
import LogInForm from "./LogInForm";

const LogInPage = ({ getStatus }) => {
	return (
		<Flex height="100vh">
			<Center flex="1">
				<LogInForm getStatus={getStatus} />
			</Center>
			<Center bg="teal.400" color="white" flex="1">
				Right panel here
			</Center>
		</Flex>
	);
};

export default LogInPage;
