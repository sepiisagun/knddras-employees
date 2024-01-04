import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import _ from "lodash";

import { Box, Flex, HStack, Image, Spacer, useDisclosure } from "@chakra-ui/react";

import {
	isLoggedInSelector,
	tokenSelector,
	// userRoleTypeSelector,
	userDetailsSelector,
} from "../modules/auth/engine/auth.selectors";

import { attachToken } from "../utils/api";

import CompleteAccountModal from "./Modals/CompleteAccountModal";
import TOCandPrivacyPolicy from "./Modals/TOCandPrivacyPolicy";

// import { ENDPOINTS } from "../constants/Endpoints";
// import { ADMIN } from "../constants/userRoles";

const NavBar = () => {
	const isLoggedIn = useSelector(isLoggedInSelector);
	const token = useSelector(tokenSelector);
	// const role = useSelector(userRoleTypeSelector);
	const user = useSelector(userDetailsSelector);
	const router = useRouter();
	const [incompleteInfo, setIncompleteInfo] = useState(false);

	useEffect(() => {
		if (isLoggedIn) {
			attachToken(token);
			// if (role === ADMIN) router.push(`${ENDPOINTS.EMPLOYEES}`);
			// else router.push(`${ENDPOINTS.DASHBOARD}`);
		}
	}, []);

	useEffect(() => {
		if (!_.isEmpty(user) && _.isEmpty(_.get(user, "firstName"))) {
			setIncompleteInfo(true);
		} else {
			setIncompleteInfo(false);
		}
	}, [user]);
	const iconsize = "4vh";
	const px = "10px";
	const py = "15px";
	const { isOpen, onOpen, onClose } = useDisclosure()
	return (
		<Flex
			alignItems="center"
			justifyContent="space-between"
			borderBottom="1px"
			borderBottomColor="gray.300"
			px={px}
			py={py}
		>
			{incompleteInfo && router.pathname !== "/account" && (
				<CompleteAccountModal />
			)}
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
			<TOCandPrivacyPolicy isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
			{isLoggedIn && (
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
			)}
		</Flex>
	);
};

export default NavBar;
