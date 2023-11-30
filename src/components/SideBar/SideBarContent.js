import { Flex, Box, VStack, Divider } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import Links from "../../constants/Links";
import SideBarMenuItem from "./SideBarMenuItem";

const SideBarContent = () => {
	const minH = "100%";
	const minW = "100%";
	return (
		<VStack h={minH} pr={2}>
			<Flex justifyContent="flex-start" w={minW}>
				<VStack w={minW}>
					{Links.map((headerItem) => {
						// Dashboard
						if (headerItem.key === 0) {
							return (
								<Box key={headerItem.key} w={minW}>
									<Link href={`/${headerItem.href}`}>
										<SideBarMenuItem item={headerItem} />
									</Link>
								</Box>
							);
						}
						return null;
					})}
					<Box fontWeight="bold" textTransform="uppercase" w={minW}>
						APPOINTMENTS
					</Box>
					{/* // Appointments Item */}
					{Links.map((headerItem) => {
						if (headerItem.key === 1) {
							return (
								<Box key={headerItem.key} w={minW}>
									<Link href={`/${headerItem.href}`}>
										<SideBarMenuItem item={headerItem} />
									</Link>
								</Box>
							);
						}
						return null;
					})}
					{/* Records and Transaction Item */}
					<Box fontWeight="bold" textTransform="uppercase" w={minW}>
						RECORDS AND TRANSACTION
					</Box>
					{Links.map((headerItem) => {
						if (headerItem.key === 2) {
							return (
								<Box key={headerItem.key} w={minW}>
									<Link href={`/${headerItem.href}`}>
										<SideBarMenuItem item={headerItem} />
									</Link>
								</Box>
							);
						}
						return null;
					})}
					{Links.map((headerItem) => {
						if (headerItem.key === 3) {
							return (
								<Box key={headerItem.key} w={minW}>
									<Divider mb={2} />
									<Link href={`/${headerItem.href}`}>
										<SideBarMenuItem item={headerItem} />
									</Link>
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
