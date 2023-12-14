/* eslint-disable prettier/prettier */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import _ from "lodash";

import { Badge, Button, Flex, Td, Text, Tr, useDisclosure} from "@chakra-ui/react";
import { DateTime } from "luxon";

import ViewRequestModal from "../modules/request/components/ViewRequestModal";
import ViewAppointmentModal from "../modules/appointment/components/ViewAppointmentModal";
import ViewTreatment from "../modules/records/components/Treatment/ViewTreatment";
import EmployeeModal from "./Modals/EmployeeModal";

import { ENDPOINTS } from "../constants/Endpoints";

const TableRow = ({
	action = [],
	data = [],
	handleSubmit,
	headerTitles = [],
	setFieldValue,
}) => {
	const [price, setPrice] = useState(0);
	const [mobileNumber, setMobileNumber] = useState("");
	const currentPath = usePathname();
	const { isOpen: isOpenView, onClose: onCloseView, onOpen: onOpenView } = useDisclosure();
	const router = useRouter();

	const renderAction = (status, actionItem) => {
		if (actionItem === "View" &&
			(status === "PENDING" ||
			!status  ||
			(currentPath === "/appointments" && (status === "CANCELLED" || status === "ACCEPTED")))
		) {
			if (currentPath === "/appointments") {
				return (<ViewAppointmentModal data={data} />);
			}
			if (currentPath === "/records") {
				return (
					<Button bg="transparent" p="0px" variant="no-hover">
						<Text
							color="gray.400"
							cursor="pointer"
							fontSize="md"
							fontWeight="bold"
							onClick={() => router.push(`${ENDPOINTS.RECORDS}/${_.get(data, "id")}`)}
						>
							View
						</Text>
					</Button>
				);
			}
			if (_.includes(currentPath, "/records/")) {
				return <ViewTreatment data={data} />
			}
			return (
				<ViewRequestModal id={_.get(data, "id")} isOpen={isOpenView} onClose={onCloseView} onOpen={onOpenView} />
			);
			
		}
		if (actionItem === "Edit") {
			if (status === "REBOOKING") {
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
			if (currentPath === "/employees") {
				// Change to edit user modal
				return <EmployeeModal location="Edit" userData={data} />;
			}
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
			// console.log(_.get(data, 'procedure.price'),);
			setPrice(_.get(data, "procedure.price"), 0);
			// console.log(price);
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
					if (_.isObject(data[_.toLower(title)]) || title === "Assigned To" || title === "Name" || title === "Procedure" || title === "Patient") {
						if (title === "Patient" || title === "Assigned To" || title === "Name") {
							if (_.has(_.get(data, 'patient.data'), "username") || _.has(_.get(data, "doctor.data"), "username") || _.has(data, "username") || _.has(data, 'record')) {
								let user;
								if (_.has(_.get(data, 'patient.data'), "username") && (title === "Name" || title === "Patient")) user = _.get(data, 'patient.data');
								else if (_.has(data, 'record')) user = _.get(data, 'record.data');
								else if (_.has(data, "username")) user = data;
								else user = _.get(data, 'doctor.data');
								return (
									<Td
										key={index}
									>
										<Flex
											align="center"
											flexWrap="nowrap"
											minWidth="100%"
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
									>
										<Flex
											align="center"
											flexWrap="nowrap"
											minWidth="100%"
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
									>
										<Flex
											align="center"
											flexWrap="nowrap"
											minWidth="100%"
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
								>
									<Flex
										align="center"
										flexWrap="nowrap"
										minWidth="100%"
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
						if (title === "Role") {
							return (
								<Td
									key={index}
								>
									<Flex
										align="center"
										flexWrap="nowrap"
										minWidth="100%"
									>
										<Flex direction="column">
											<Text
												color="gray.700"
												fontSize="md"
												fontWeight="bold"
												minWidth="100%"
											>
												{_.capitalize(data[_.toLower(title)].name)}
											</Text>
										</Flex>
									</Flex>
								</Td>
							);
						}
					} else if (!_.isObject(data[_.toLower(title)])) {
						if (title === "Date" || title === "Schedule" || title === "Transaction Date") {
							let titleName;
							if (title === "Date" && _.has(data, "Date")) titleName = "Date";
							else titleName = "Schedule";
							if (title === "Schedule" && _.has(data, "Schedule")) titleName = "Schedule";
							else titleName = "Date";
							if (title === "Transaction Date") titleName = "createdAt";
							return (
								<Td key={index}>
									<Flex direction="column">
										<Text
											color="gray.700"
											fontSize="md"
											fontWeight="bold"
										>
											{!_.isEmpty(data[_.toLower(titleName)])
												? DateTime.fromSQL(
													data[_.toLower(titleName)],
												  ).toFormat("MMMM d, yyyy")
												: DateTime.fromISO(
													data.createdAt,
												  ).toFormat("MMMM d, yyyy")}
										</Text>
										{
											titleName !== "createdAt" && (
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
											)
										}
										
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
						if (title === "Price" || title === "Total Fee") {
							return (
								<Td key={index}>
									<Text
										color="gray.700"
										fontSize="md"
										fontWeight="bold"
									>
										{`₱ ${price.toLocaleString()}`}
									</Text>
								</Td>
							);
						}
						if (
							title === "Mobile Number" || title === "Contact Number"
						) {
							return (
								<Td
									key={index}
								>
									<Flex
										align="center"
										flexWrap="nowrap"
										minWidth="100%"
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
