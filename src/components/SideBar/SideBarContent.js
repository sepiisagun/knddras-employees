import Link from "next/link";
import { useSelector } from "react-redux";
import _ from "lodash";

import { Flex, Box, VStack, Divider } from "@chakra-ui/react";

import {
	isLoggedInSelector,
	userRoleTypeSelector,
} from "../../modules/auth/engine/auth.selectors";

import Links from "../../constants/Links";
import { ADMIN } from "../../constants/userRoles";
import SideBarMenuItem from "./SideBarMenuItem";

const SideBarContent = () => {
	const isLoggedIn = useSelector(isLoggedInSelector);
	const userRole = useSelector(userRoleTypeSelector);

	const minH = "100%";
	const minW = "100%";
	return (
		<VStack h={minH} pr={2}>
			<Flex justifyContent="flex-start" w={minW}>
				<VStack w={minW}>
					{Links.map((headerItem) => {
						// Dashboard
						if (
							headerItem.location === "dashboard" &&
							isLoggedIn &&
							_.includes(headerItem.allowed, userRole)
						) {
							return (
								<Box key={headerItem.title} w={minW}>
									<Link href={`/${headerItem.href}`}>
										<SideBarMenuItem item={headerItem} />
									</Link>
								</Box>
							);
						}
						return null;
					})}
					{userRole !== ADMIN && (
						<Box
							fontWeight="bold"
							textTransform="uppercase"
							w={minW}
						>
							APPOINTMENTS
						</Box>
					)}
					{/* // Appointments Item */}
					{Links.map((headerItem) => {
						if (
							headerItem.location === "appointments" &&
							isLoggedIn &&
							_.includes(headerItem.allowed, userRole)
						) {
							return (
								<Box key={headerItem.title} w={minW}>
									<Link href={`/${headerItem.href}`}>
										<SideBarMenuItem item={headerItem} />
									</Link>
								</Box>
							);
						}
						return null;
					})}
					{userRole !== ADMIN && (
						<Box
							fontWeight="bold"
							textTransform="uppercase"
							w={minW}
						>
							RECORDS AND TRANSACTION
						</Box>
					)}
					{/* Records and Transaction Item */}
					{Links.map((headerItem) => {
						if (
							headerItem.location === "records" &&
							isLoggedIn &&
							_.includes(headerItem.allowed, userRole)
						) {
							return (
								<Box key={headerItem.title} w={minW}>
									<Link href={`/${headerItem.href}`}>
										<SideBarMenuItem item={headerItem} />
									</Link>
								</Box>
							);
						}
						return null;
					})}
					{Links.map((headerItem) => {
						if (headerItem.location === "logout") {
							return (
								<Box key={headerItem.title} w={minW}>
									<Divider mb={2} />
									{headerItem.title !== "Logout" ? (
										<Link href={`/${headerItem.href}`}>
											<SideBarMenuItem
												item={headerItem}
											/>
										</Link>
									) : (
										<SideBarMenuItem item={headerItem} />
									)}
								</Box>
							);
						}
						return null;
					})}
				</VStack>
			</Flex>
		</VStack>
	);
};

export default SideBarContent;
