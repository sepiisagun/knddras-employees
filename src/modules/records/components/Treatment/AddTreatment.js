import { useEffect, useState } from "react";
import { useQuery } from "react-query";
// import { FormikProvider, useFormik } from "formik";
// import _ from "lodash";

import {
	Button,
	Checkbox,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Select,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useDisclosure,
} from "@chakra-ui/react";
import spiels from "../../../../constants/spiels";
import { TRANSACTION_AMOUNT } from "../../../../constants/temporaryValues";
import TreatmentHeader from "./TreatmentHeader";
import TreatmentBreakdownFee from "./TreatmentBreakdownFee";

import { retrieveTeeth } from "../../engine/record.queries";

import { retrieveProcedures } from "../../../../utils/engine/procedure.queries";

const AddTreatment = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();
	const [teethCollection, setTeethCollection] = useState([]);

	const {
		data: { data: { data } = {} },
		isFetched,
	} = useQuery({
		initialData: {},
		queryFn: retrieveTeeth,
		queryKey: ["teeth-data"],
	});

	const { data: { data: procedureData = [] } = {} } = useQuery({
		initialData: {},
		queryFn: retrieveProcedures,
		queryKey: ["procedures-data"],
	});

	useEffect(() => {
		if (isFetched) {
			setTeethCollection([
				...data.sectionOne,
				...data.sectionTwo,
				...data.sectionThree,
				...data.sectionFour,
			]);
		}
	}, [data]);

	return (
		<>
			<Button
				colorScheme="teal"
				float="right"
				mt={3}
				mx={1}
				onClick={onOpen}
				size="md"
				variant="solid"
			>
				{spiels.BUTTON_NEW_PROCEDURE}
			</Button>

			<Modal isCentered isOpen={isOpen} onClose={onClose} size="2xl">
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{spiels.PROCEDURE_SUMMARY}</ModalHeader>
					<ModalCloseButton mt={2} />
					<ModalBody>
						<TableContainer>
							<TreatmentHeader />
							<TableContainer>
								<Table variant="simple">
									<Thead>
										<Tr>
											<Th>Tooth No.</Th>
											<Th>Procedure</Th>
											<Th isNumeric>Cost</Th>
										</Tr>
									</Thead>
									<Tbody>
										<Tr>
											<Td>
												<Select
													data-testid="tooth"
													id="tooth"
													name="tooth"
													// onChange={handleChange}
													placeholder="Tooth no."
													size="sm"
													value=""
												>
													{teethCollection
														.sort()
														.map((teeth) => (
															<option
																key={teeth}
																value={teeth}
															>
																{teeth}
															</option>
														))}
												</Select>
											</Td>
											<Td>
												{" "}
												<Select
													data-testid="procedure"
													id="procedure"
													name="procedure"
													// onChange={handleChange}
													placeholder="Select treatment"
													size="sm"
													value=""
												>
													{procedureData.map(
														(procedure) => (
															<option
																key={
																	procedure.id
																}
																value={
																	procedure.id
																}
															>
																{procedure.name}
															</option>
														),
													)}
												</Select>
											</Td>
											<Td isNumeric>
												<Input
													data-testid="Cost"
													id="Cost"
													isDisabled
													name="Cost"
													// onChange={handleChange}
													p={0}
													placeholder="₱"
													size="sm"
													// value={values[`${item}`]}
													variant="flushed"
													w={20}
												/>
											</Td>
										</Tr>
									</Tbody>
								</Table>
							</TableContainer>
							<Checkbox pt={2} px={2}>
								Is the patient senior/PWD?
							</Checkbox>
							<Text fontWeight="normal" pl={8} textAlign="left">
								{spiels.FORM_ID_NUMBER}:{" "}
								<Input
									p={0}
									size="sm "
									variant="flushed"
									w={40}
								/>
							</Text>
							<Table mt={6} size="sm">
								{TRANSACTION_AMOUNT.map((amount) => (
									<TreatmentBreakdownFee
										key={amount.value}
										amount={amount}
									/>
								))}
							</Table>
						</TableContainer>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="gray" mr={3} onClick={onClose}>
							{spiels.BUTTON_CANCEL}
						</Button>
						<Button colorScheme="blue" variant="solid">
							{spiels.BUTTON_ADD}
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default AddTreatment;
