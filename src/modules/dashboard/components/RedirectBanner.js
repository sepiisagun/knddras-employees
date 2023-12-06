import {
	Button,
	Card,
	CardBody,
	CardFooter,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import spiels from "../../../constants/spiels";

const RedirectBanner = () => {
	return (
		<Card
			borderRadius="3xl"
			direction={{ base: "column", sm: "row" }}
			overflow="hidden"
			variant="outline"
		>
			<Stack>
				<CardBody>
					<Text color="#A0AEC0" py="2">
						{spiels.REDIRECT_SUBHEADER}
					</Text>
					<Heading size="md">{spiels.REDIRECT_BANNER}</Heading>
					<Text color="#A0AEC0" py="2">
						{spiels.REDIRECT_BANNER_DESC}
					</Text>
				</CardBody>

				<CardFooter>
					<Button
						colorScheme="blue"
						onClick={() => {
							window.location.replace(
								`${process.env.NEXT_PUBLIC_CLIENT_BASE_URL}`,
							);
						}}
						rightIcon={<ArrowForwardIcon mt={1} />}
						variant="ghost"
					>
						Open
					</Button>
				</CardFooter>
			</Stack>
			<Image
				alt="Redirect Banner"
				maxW={{ base: "100%", sm: "600px" }}
				objectFit="cover"
				p={4}
				src="RedirectBanner.png"
			/>
		</Card>
	);
};

export default RedirectBanner;
