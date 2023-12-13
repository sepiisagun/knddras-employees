import Link from "next/link";
import { useSelector } from "react-redux";

import { Heading, Image, Stack, Text } from "@chakra-ui/react";

import { isLoggedInSelector } from "../modules/auth/engine/auth.selectors";

import spiels from "../constants/spiels";
import { ENDPOINTS } from "../constants/Endpoints";

const Error403Screen = () => {
	const isLoggedIn = useSelector(isLoggedInSelector);
	return (
		<Stack
			align="center"
			height="90vh"
			justify="center"
			spacing={1}
			textAlign="center"
		>
			<Image alt="#" boxSize="40" src="/Error404.png" />
			<Heading as="h1" noOfLines={1} size="4xl">
				{spiels.ERROR_403}
			</Heading>
			<Text fontSize="4xl">{spiels.ERROR_403_FORBIDDEN_ACCES}</Text>
			<Text color="blue" fontWeight="medium">
				<Link
					href={isLoggedIn ? `${ENDPOINTS.DASHBOARD}` : "/"}
					style={{
						color: "#3182CE",
						fontSize: 15,
						marginLeft: 5,
					}}
				>
					{spiels.ERROR_GO_BACK}
				</Link>
			</Text>
		</Stack>
	);
};

export default Error403Screen;
