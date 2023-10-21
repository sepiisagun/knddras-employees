import { Flex } from "@chakra-ui/react";
import React from "react";

const IconBox = (props) => {
	const { children, ...rest } = props;
	return (
		<Flex
			alignItems="center"
			borderRadius="12px"
			justifyContent="center"
			{...rest}
		>
			{children}
		</Flex>
	);
};

export default IconBox;
