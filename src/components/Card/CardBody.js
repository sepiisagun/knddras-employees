import { Box, useStyleConfig } from "@chakra-ui/react";

const CardBody = (props) => {
	const { children, variant, ...rest } = props;
	const styles = useStyleConfig("CardBody", { variant });
	return (
		<Box __css={styles} {...rest}>
			{children}
		</Box>
	);
};

export default CardBody;
