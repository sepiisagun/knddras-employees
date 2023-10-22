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
import React, { useState } from "react";
import AddHistoryTab from "./AddHistoryTab";
import spiels from "../../../constants/spiels";
import AddPersonalInfoTab from "./AddPersonalInfoTab";

const AddRecordTab = () => {
	const [currentTab, setCurrentTab] = useState(0);

	const handleTabChange = (index) => {
		setCurrentTab(index);
	};
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
						<Tabs
							align="center"
							index={currentTab}
							onChange={handleTabChange}
						>
							<TabList>
								<Tab>{spiels.PERSONAL_INFO}</Tab>
								<Tab>{spiels.MEDICAL_HISTORY}</Tab>
							</TabList>

							<TabPanels>
								<TabPanel>
									<AddPersonalInfoTab
										currentTab={currentTab}
										switchToNextTab={() => setCurrentTab(1)}
									/>
								</TabPanel>
								<TabPanel>
									<AddHistoryTab
										switchToPreviousTab={() =>
											setCurrentTab(0)
										}
									/>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</CardBody>
				</Card>
			</Box>
		</Flex>
	);
};

export default AddRecordTab;
