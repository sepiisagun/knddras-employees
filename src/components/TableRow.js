/* eslint-disable prettier/prettier */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { useEffect, useState } from "react";
import _ from "lodash";

import { Badge, Button, Flex, Td, Text, Tr, useDisclosure} from "@chakra-ui/react";
import { DateTime } from "luxon";

import ViewRequestModal from "../modules/request/components/ViewRequestModal";

const TableRow = ({
	action = [],
	data = [],
	handleSubmit,
	headerTitles = [],
	setFieldValue,
}) => {
	const [price, setPrice] = useState(0);
	const [mobileNumber, setMobileNumber] = useState("");
	const { isOpen: isOpenView, onClose: onCloseView, onOpen: onOpenView } = useDisclosure();

	const renderAction = (status, actionItem) => {
		if (
			(status === "PENDING" && actionItem === "View") ||
			(!status && actionItem === "View")
		) {
			return (
				<ViewRequestModal id={_.get(data, "id")} isOpen={isOpenView} onClose={onCloseView} onOpen={onOpenView} />
			);
		}
		if (actionItem === "Edit") {
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
		if (
			(status === "PENDING" && actionItem === "Cancel") ||
			(!status && actionItem === "Cancel")
		) {
			return (
				<Button
					bg="transparent"
					onClick={() => {
						setFieldValue("id", data.id);
						handleSubmit();
					}}
					p="0px"
					variant="no-hover"
				>
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
		if (status === "CANCELLED") return "orange.400";
		return "gray.400";
	};

	useEffect(() => {
		if (!_.isEmpty(data) && !_.isEmpty(_.get(data, "purpose"))) {
			setPrice(_.get(data, "purpose.data.price"), 0);
		} else if (!_.isEmpty(data) && !_.isEmpty(_.get(data, "procedure"))) {
			setPrice(_.get(data, "procedure.price"), 0);
		}
		if (!_.isEmpty(data) && (!_.isEmpty(_.get(data, "patient")) || _.has(data, "mobileNumber"))) {
			if (!_.isEmpty(_.get(data, "patient.data.mobileNumber"))) {
				setMobileNumber(_.get(data, "patient.data.mobileNumber"), "");
			} else {
				setMobileNumber(_.get(data, 'mobileNumber'));
			}
		}
	}, [data]);

	return (
		<Tr>
			{!_.isEmpty(data) &&
				headerTitles.map((title, index) => {
					if (_.isObject(data[_.toLower(title)]) || title === "Assigned To" || title === "Name" || title === "Procedure") {
						if (title === "Patient" || title === "Assigned To" || title === "Name") {
							if (_.has(_.get(data, 'patient.data'), "username") || _.has(_.get(data, "doctor.data"), "username") || _.has(data, "username")) {
								let user;
								if (_.has(_.get(data, 'patient.data'), "username") && (title === "Name" || title === "Patient")) user = _.get(data, 'patient.data');
								else if (_.has(data, "username")) user = data;
								else user = _.get(data, 'doctor.data');
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
														user.firstName
													}{" "}
													{
														user.lastName
													}
												</Text>
												<Text
													color="gray.400"
													fontSize="sm"
													fontWeight="normal"
												>
													{
														user.email
													}
												</Text>
											</Flex>
										</Flex>
									</Td>
								);
							}
						}
						if (
							(title === "Procedure" || title === "Purpose") && (_.has(data, "purpose") ||
							_.has(data, "procedure"))
						) {
							let dataTitle;
							if (_.has(data, 'procedure')) dataTitle = 'procedure';
							else dataTitle = 'purpose';
							if (
								data[`${dataTitle}`].data &&
								_.has(
									data[`${dataTitle}`].data,
									"readableName",
								)
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
														data[`${dataTitle}`]
															.data.readableName
													}
												</Text>
												<Text
													color="gray.400"
													fontSize="sm"
													fontWeight="normal"
												>
													{
														data[`${dataTitle}`]
															.data.name
													}
												</Text>
											</Flex>
										</Flex>
									</Td>
								);
							}
							if (_.has(data[_.toLower(title)], "readableName")) {
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
														data[_.toLower(title)]
															.readableName
													}
												</Text>
												<Text
													color="gray.400"
													fontSize="sm"
													fontWeight="normal"
												>
													{
														data[_.toLower(title)]
															.name
													}
												</Text>
											</Flex>
										</Flex>
									</Td>
								);
							}
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
												-
											</Text>
										</Flex>
									</Flex>
								</Td>
							);
						}
					} else if (!_.isObject(data[_.toLower(title)])) {
						if (title === "Date" || title === "Schedule") {
							return (
								<Td key={index}>
									<Flex direction="column">
										<Text
											color="gray.700"
											fontSize="md"
											fontWeight="bold"
										>
											{!_.isEmpty(data[_.toLower(title)])
												? DateTime.fromSQL(
													data[_.toLower(title)],
												  ).toFormat("MMMM d, yyyy")
												: DateTime.fromISO(
													data.createdAt,
												  ).toFormat("MMMM d, yyyy")}
										</Text>
										<Text
											color="gray.400"
											fontSize="sm"
											fontWeight="normal"
										>
											{!_.isEmpty(data.time) &&
												DateTime.fromSQL(
													data.time,
												).toFormat("hh:mm a")}
											{_.isEmpty(data.time) &&
												data.slot &&
												data.slot}
											{_.isEmpty(data.time) &&
												_.isEmpty(data.slot) &&
												DateTime.fromISO(
													data.createdAt,
												).toFormat("hh:mm a")}
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
						if (title === "Price") {
							return (
								<Td key={index}>
									<Text
										color="gray.700"
										fontSize="md"
										fontWeight="bold"
										pb=".5rem"
									>
										{`₱ ${price.toLocaleString()}`}
									</Text>
								</Td>
							);
						}
						if (
							title === "Mobile Number" || title === "Contact Number"
						) {
							console.log(data, "test");
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
												{!_.isEmpty(mobileNumber) ? mobileNumber : '-'}
											</Text>
										</Flex>
									</Flex>
								</Td>
							);
						}
						if (title === "Action" && !_.isEmpty(action))
							return (
								<Td key={index}>
									{action.map((actionItem) =>
										renderAction(data.status, actionItem),
									)}
								</Td>
							);
						return (
							<Td key={index}>
								<Text
									color="gray.700"
									fontSize="md"
									fontWeight="bold"
									pb=".5rem"
								>
									{data[_.toLower(title)]}
								</Text>
							</Td>
						);
					}
				})}
		</Tr>
	);
};

export default TableRow;
