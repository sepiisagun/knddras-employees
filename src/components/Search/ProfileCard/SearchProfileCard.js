import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardHeader,
	Flex,
	HStack,
	Heading,
	Spacer,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { PATIENT_INFORMATION } from "../../../constants/temporaryValues";
import spiels from "../../../constants/spiels";

const SearchProfileCard = () => {
	return (
		<Box p={4}>
			<Card variant="elevated">
				{PATIENT_INFORMATION.map((patientInformation) => (
					<Box key={patientInformation}>
						<CardHeader>
							<Flex>
								<Heading as="h1" size="2xl">
									{patientInformation.name}
								</Heading>
								<Spacer />
								<ButtonGroup alignItems="center" gap={2}>
									<Button colorScheme="teal">
										{spiels.BUTTON_PRINT_RECORD}
									</Button>
									<Button colorScheme="purple">
										{spiels.BUTTON_VIEW_RECORD}
									</Button>
									<Button colorScheme="blue">
										{spiels.BUTTON_EDIT_RECORD}
									</Button>
								</ButtonGroup>
							</Flex>
						</CardHeader>
						<CardBody>
							<HStack>
								<Box flex="1">
									<Flex gap={3}>
										<Box color="gray">
											<Text>
												{spiels.FORM_EMAIL_ADDRESS}:
											</Text>
											<Text>
												{spiels.FORM_CONTACT_NO}:
											</Text>
											<Text>{spiels.FORM_ADDRESS}:</Text>
											<Text>
												{spiels.LABEL_LAST_VISIT}:
											</Text>
										</Box>
										<Box>
											<Text>
												{patientInformation.email}
											</Text>
											<Text>
												{
													patientInformation.contactNumber
												}
											</Text>
											<Text>
												{patientInformation.address}
											</Text>
											<Text>
												{patientInformation.lastVisit}
											</Text>
										</Box>
									</Flex>
								</Box>
								<Box flex="1">
									<Flex gap={3}>
										<Box color="gray">
											<Text>
												{spiels.FORM_BIRTHDATE}:
											</Text>
											<Text>{spiels.FORM_SEX}:</Text>
											<Text>{spiels.FORM_RELIGION}:</Text>
											<Text>
												{spiels.FORM_NATIONALITY}:
											</Text>
										</Box>
										<Box>
											<Text>
												{patientInformation.birthDate}
											</Text>
											<Text>
												{patientInformation.sex}
											</Text>
											<Text>
												{patientInformation.religion}
											</Text>
											<Text>
												{patientInformation.nationality}
											</Text>
										</Box>
									</Flex>
								</Box>
							</HStack>
						</CardBody>
					</Box>
				))}
			</Card>
		</Box>
	);
};

export default SearchProfileCard;
