import _ from "lodash";
import { DateTime } from "luxon";

import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Flex,
	Text,
} from "@chakra-ui/react";

import spiels from "../../../constants/spiels";

import PrintModal from "./PrintModal";
import AddTreatment from "./Treatment/AddTreatment";

const ViewRecordProfileTable = ({ data }) => {
	const currentYear = new Date().getFullYear();
	const age =
		currentYear -
		DateTime.fromSQL(_.get(data, "birthdate")).toFormat("yyyy");
	return (
		<Card borderRadius="3xl" mb={1} variant="outline">
			<CardHeader mb="1px" px="12px" py="2px">
				{/* Not sure why the buttons are glitching when hovering over them */}
				{/* The logo on the navbar also disappears */}
				<Button
					colorScheme="blue"
					float="right"
					mt={3}
					mx={1}
					p={5}
					size="md"
					variant="solid"
				>
					Edit
				</Button>

				<PrintModal />
				<AddTreatment />

				<Text
					color="black"
					fontSize="4xl"
					fontWeight="bold"
					px={4}
					py={2}
				>
					{_.get(data, "firstName")} {_.get(data, "middleInitial")}
					{". "}
					{_.get(data, "lastName")}
				</Text>
			</CardHeader>
			<CardBody px="10px" py={0}>
				<Flex direction="row" p={4}>
					<Flex direction="column" w="50%">
						<Text as="span" color="black" fontWeight="semibold">
							{spiels.FORM_EMAIL_ADDRESS}:{" "}
							<Text as="span" color="gray.400">
								{_.get(data, "patient.email", "-")}
							</Text>
						</Text>

						<Text as="span" color="black" fontWeight="semibold">
							{spiels.FORM_CONTACT_NO}:{" "}
							<Text as="span" color="gray.400">
								{_.get(data, "patient.mobileNumber", "-")}
							</Text>
						</Text>
						<Text as="span" color="black" fontWeight="semibold">
							{spiels.FORM_ADDRESS}:{" "}
							<Text as="span" color="gray.400">
								{_.get(data, "address", "-")}
							</Text>
						</Text>
					</Flex>
					<Flex direction="column" w="50%">
						<Text as="span" color="black" fontWeight="semibold">
							{spiels.FORM_BIRTHDATE}:{" "}
							<Text as="span" color="gray.400">
								{!_.isEmpty(data)
									? DateTime.fromSQL(
											_.get(data, "birthdate"),
										).toFormat("MMMM d, yyyy")
									: "-"}
							</Text>
						</Text>
						<Text as="span" color="black" fontWeight="semibold">
							{spiels.FORM_AGE}:{" "}
							<Text as="span" color="gray.400">
								{age || "-"}
							</Text>
						</Text>
						<Text as="span" color="black" fontWeight="semibold">
							{spiels.FORM_SEX}:{" "}
							<Text as="span" color="gray.400">
								{_.capitalize(_.get(data, "sex", "-"))}
							</Text>
						</Text>
					</Flex>
				</Flex>
			</CardBody>
		</Card>
	);
};

export default ViewRecordProfileTable;
