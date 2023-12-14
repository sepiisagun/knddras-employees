import {
	Box,
	Card,
	CardBody,
	Flex,
	Tab,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import spiels from "../../../constants/spiels";
import PersonalInfoTab from "./PersonalInfoTab";
import PasswordTab from "./PasswordTab";

const EditAccountTab = () => {
	return (
		<Flex alignItems="center" justifyContent="center" p={50} w="full">
			<Box
				bg={useColorModeValue("white", "gray.800")}
				borderWidth="1px"
				position="relative"
				rounded="lg"
				shadow="lg"
				w="2xl"
			>
				<Card p={4}>
					<CardBody>
						<Tabs align="center">
							<TabList>
								<Tab>{spiels.PERSONAL_INFO}</Tab>
								<Tab>{spiels.FORM_PASSWORD}</Tab>
							</TabList>

							<TabPanels>
								<TabPanel>
									<PersonalInfoTab />
								</TabPanel>

								<TabPanel>
									<PasswordTab />
								</TabPanel>
							</TabPanels>
						</Tabs>
					</CardBody>
				</Card>
			</Box>
		</Flex>
	);
};

export default EditAccountTab;
