/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { Badge, Button, Flex, Td, Text, Tr } from "@chakra-ui/react";

import _ from "lodash";

const TableRow = ({ action = [], data = [], headerTitles = [] }) => {
	const renderAction = () => {
		if (_.includes(action, "View")) {
			return (
				<Button bg="transparent" p="0px" variant="no-hover">
					<Text
						color="gray.400"
						cursor="pointer"
						fontSize="md"
						fontWeight="bold"
					>
						View
					</Text>
				</Button>
			);
		}
		if (_.includes(action, "Edit")) {
			return (
				<Button bg="transparent" p="0px" variant="no-hover">
					<Text
						color="gray.400"
						cursor="pointer"
						fontSize="md"
						fontWeight="bold"
					>
						Edit
					</Text>
				</Button>
			);
		}
		if (_.includes(action, "Cancel")) {
			return (
				<Button bg="transparent" p="0px" variant="no-hover">
					<Text
						color="gray.400"
						cursor="pointer"
						fontSize="md"
						fontWeight="bold"
					>
						Cancel
					</Text>
				</Button>
			);
		}
	};
	const statusStyle = (status) => {
		if (status === "ACCEPTED") return "green.400";
		if (status === "REJECTED") return "red.400";
		return "gray.400";
	};

	return (
		<Tr>
			{!_.isEmpty(data) &&
				headerTitles.map((title, index) => {
					if (_.isObject(data[_.toLower(title)])) {
						if (_.has(data[_.toLower(title)].data, "username")) {
							return (
								<Td
									key={index}
									minWidth={{ sm: "250px" }}
									pl="0px"
								>
									<Flex
										align="center"
										flexWrap="nowrap"
										minWidth="100%"
										py=".8rem"
									>
										<Flex direction="column">
											<Text
												color="gray.700"
												fontSize="md"
												fontWeight="bold"
												minWidth="100%"
											>
												{
													data[_.toLower(title)].data
														.firstName
												}{" "}
												{
													data[_.toLower(title)].data
														.lastName
												}
											</Text>
											<Text
												color="gray.400"
												fontSize="sm"
												fontWeight="normal"
											>
												{
													data[_.toLower(title)].data
														.email
												}
											</Text>
										</Flex>
									</Flex>
								</Td>
							);
						}
						if (
							_.has(data[_.toLower(title)].data, "readableName")
						) {
							return (
								<Td
									key={index}
									minWidth={{ sm: "250px" }}
									pl="0px"
								>
									<Flex
										align="center"
										flexWrap="nowrap"
										minWidth="100%"
										py=".8rem"
									>
										<Flex direction="column">
											<Text
												color="gray.700"
												fontSize="md"
												fontWeight="bold"
												minWidth="100%"
											>
												{
													data[_.toLower(title)].data
														.readableName
												}
											</Text>
											<Text
												color="gray.400"
												fontSize="sm"
												fontWeight="normal"
											>
												{
													data[_.toLower(title)].data
														.name
												}
											</Text>
										</Flex>
									</Flex>
								</Td>
							);
						}
					} else if (!_.isObject(data[_.toLower(title)])) {
						if (title === "Date") {
							return (
								<Td key={index}>
									<Flex direction="column">
										<Text
											color="gray.700"
											fontSize="md"
											fontWeight="bold"
										>
											Date
										</Text>
										<Text
											color="gray.400"
											fontSize="sm"
											fontWeight="normal"
										>
											Time
										</Text>
									</Flex>
								</Td>
							);
						}
						if (title === "Status") {
							return (
								<Td key={index}>
									<Badge
										bg={statusStyle(data[_.toLower(title)])}
										borderRadius="8px"
										color="white"
										fontSize="16px"
										p="3px 10px"
									>
										{_.capitalize(data[_.toLower(title)])}
									</Badge>
								</Td>
							);
						}

						if (title === "Contact Number") {
							return (
								<Td
									key={index}
									minWidth={{ sm: "250px" }}
									pl="0px"
								>
									<Flex
										align="center"
										flexWrap="nowrap"
										minWidth="100%"
										py=".8rem"
									>
										<Flex direction="column">
											<Text
												color="gray.700"
												fontSize="md"
												fontWeight="bold"
												minWidth="100%"
											>
												Contact Number
											</Text>
										</Flex>
									</Flex>
								</Td>
							);
						}
						if (title === "Action" && !_.isEmpty(action))
							return <Td key={index}>{renderAction()}</Td>;
						return (
							<Td key={index}>
								<Text
									color="gray.700"
									fontSize="md"
									fontWeight="bold"
									pb=".5rem"
								>
									Action
								</Text>
							</Td>
						);
					}
				})}
		</Tr>
	);
};

export default TableRow;
