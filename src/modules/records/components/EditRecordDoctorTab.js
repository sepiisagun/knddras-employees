import { useMutation, useQuery, useQueryClient } from "react-query";
import { FormikProvider, useFormik } from "formik";
import { useRouter } from "next/router";
import _ from "lodash";

import {
	Box,
	Button,
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

import spiels from "../../../constants/spiels";
import DentalChartTab from "./DentalChartTab";

import {
	createDentalRecords,
	updateDentalRecords,
} from "../engine/record.mutations";
import { retrieveDentalRecords } from "../engine/record.queries";

const EditRecordTab = () => {
	const router = useRouter();
	const { id } = router.query;
	const queryClient = useQueryClient();
	const createDentalRecordsMutation = useMutation(createDentalRecords);
	const updateDentalRecordsMutation = useMutation(updateDentalRecords);

	const {
		data: { data: dentalRecord = [] },
	} = useQuery({
		initialData: [],
		queryFn: retrieveDentalRecords,
		queryKey: [
			"appointments-data",
			{
				filters: {
					record: id,
				},
			},
		],
	});

	const formikPersonalInfo = useFormik({
		enableReinitialize: true,
		initialValues: {
			advancedPeriodontitis: _.get(
				dentalRecord[0],
				"periodental.advancedPeriodontitis",
				false,
			),
			cephalometric: _.get(dentalRecord[0], "xRay.cephalometric", false),
			clenching: _.get(dentalRecord[0], "tmd.clenching", false),
			clicking: _.get(dentalRecord[0], "tmd.clicking", false),
			crossbite: _.get(dentalRecord[0], "occlusion.crossbite", false),
			earlyPeriodontitis: _.get(
				dentalRecord[0],
				"periodental.earlyPeriodontitis",
				false,
			),
			gingivitis: _.get(dentalRecord[0], "periodental.gingivitis", false),
			midlineDeviation: _.get(
				dentalRecord[0],
				"occlusion.midlineDeviation",
				false,
			),
			moderatePeriodontitis: _.get(
				dentalRecord[0],
				"periodental.moderatePeriodontitis",
				false,
			),
			molar: _.get(dentalRecord[0], "occlusion.molar", false),
			muscleSpasm: _.get(dentalRecord[0], "tmd.muscleSpasm", false),
			occlusal: _.get(dentalRecord[0], "xRay.occlusal", false),
			orthodontic: _.get(
				dentalRecord[0],
				"appliances.orthodontic",
				false,
			),
			overbite: _.get(dentalRecord[0], "occlusion.overbite", false),
			overjet: _.get(dentalRecord[0], "occlusion.overjet", false),
			panoramic: _.get(dentalRecord[0], "xRay.panoramic", false),
			periapical: _.get(dentalRecord[0], "xRay.periapical", false),
			stayplate: _.get(dentalRecord[0], "appliances.stayplate", false),
			trismus: _.get(dentalRecord[0], "tmd.trismus", false),
		},
		onSubmit: async (data, { resetForm }) => {
			const payload = {
				appliances: {
					orthodontic: data.orthodontic,
					stayplate: data.stayplate,
				},
				occlusion: {
					crossbite: data.crossbite,
					midlineDeviation: data.midlineDeviation,
					molar: data.molar,
					overbite: data.overbite,
					overjet: data.overjet,
				},
				periodental: {
					advancedPeriodontitis: data.advancedPeriodontitis,
					earlyPeriodontitis: data.earlyPeriodontitis,
					gingivitis: data.gingivitis,
					moderatePeriodontitis: data.moderatePeriodontitis,
				},
				tmd: {
					clenching: data.clenching,
					clicking: data.clicking,
					muscleSpasm: data.muscleSpasm,
					trismus: data.trismus,
				},
				xRay: {
					cephalometric: data.cephalometric,
					occlusal: data.occlusal,
					panoramic: data.panoramic,
					periapical: data.periapical,
				},
			};
			if (_.isEmpty(dentalRecord)) {
				createDentalRecordsMutation
					.mutateAsync({ data: { ...payload, record: id } })
					.then(() => {
						router.back();
						queryClient.invalidateQueries({
							queryKey: "users-email-data",
						});
						resetForm();
					})
					.catch((error) => {
						// display error
						// eslint-disable-next-line no-console
						console.log(error);
					});
			} else {
				updateDentalRecordsMutation
					.mutateAsync({
						data: payload,
						id: _.get(dentalRecord[0], "id"),
					})
					.then(() => {
						router.back();
						queryClient.invalidateQueries({
							queryKey: "users-email-data",
						});
						resetForm();
					})
					.catch((error) => {
						// display error
						// eslint-disable-next-line no-console
						console.log(error);
					});
			}
		},
		validateOnBlur: true,
		validateOnMount: true,
	});

	const { handleSubmit, resetForm } = formikPersonalInfo;

	return (
		<Flex alignItems="center" justifyContent="center" p={50} w="full">
			<Box
				bg={useColorModeValue("white", "gray.800")}
				borderWidth="1px"
				position="relative"
				rounded="lg"
				shadow="lg"
				w="fit-content"
			>
				<Card p={4}>
					<CardBody>
						<Tabs align="center" index={0}>
							<TabList>
								<Tab>{spiels.DENTAL_CHART}</Tab>
							</TabList>

							<FormikProvider value={formikPersonalInfo}>
								<TabPanels>
									<TabPanel>
										<DentalChartTab />
									</TabPanel>
								</TabPanels>
							</FormikProvider>
						</Tabs>
						<Button
							colorScheme="blue"
							float="right"
							mt={10}
							onClick={handleSubmit}
							size="sm"
							variant="solid"
						>
							{spiels.BUTTON_SUBMIT}
						</Button>
						<Button
							colorScheme="blue"
							float="right"
							mr={2}
							mt={10}
							onClick={() => {
								resetForm();
								router.back();
							}}
							size="sm"
							variant="outline"
						>
							{spiels.BUTTON_CANCEL}
						</Button>
					</CardBody>
				</Card>
			</Box>
		</Flex>
	);
};

export default EditRecordTab;
