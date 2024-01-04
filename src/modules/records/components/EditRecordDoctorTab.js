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
import {
	retrieveDentalRecords,
	retrieveDentalCharts,
} from "../engine/record.queries";

const EditRecordTab = () => {
	const router = useRouter();
	const { id } = router.query;
	const queryClient = useQueryClient();
	const createDentalRecordsMutation = useMutation(createDentalRecords);
	const updateDentalRecordsMutation = useMutation(updateDentalRecords);

	const {
		data: { data: dentalRecord = [] },
		isFetched,
	} = useQuery({
		initialData: [],
		queryFn: retrieveDentalRecords,
		queryKey: [
			"dental-records-data",
			{
				filters: {
					record: id,
				},
			},
		],
	});

	const {
		data: { data: [dentalChart] = [] },
		isFetched: dentalChartFetched,
	} = useQuery({
		enabled: isFetched,
		initialData: [],
		queryFn: retrieveDentalCharts,
		queryKey: [
			"dental-charts-data",
			{
				filters: {
					record: dentalRecord.id,
				},
			},
		],
	});

	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			11: _.get(dentalChart, "dentalCondition.11", ""),
			12: _.get(dentalChart, "dentalCondition.12", ""),
			13: _.get(dentalChart, "dentalCondition.13", ""),
			14: _.get(dentalChart, "dentalCondition.14", ""),
			15: _.get(dentalChart, "dentalCondition.15", ""),
			16: _.get(dentalChart, "dentalCondition.16", ""),
			17: _.get(dentalChart, "dentalCondition.17", ""),
			18: _.get(dentalChart, "dentalCondition.18", ""),
			21: _.get(dentalChart, "dentalCondition.21", ""),
			22: _.get(dentalChart, "dentalCondition.22", ""),
			23: _.get(dentalChart, "dentalCondition.23", ""),
			24: _.get(dentalChart, "dentalCondition.24", ""),
			25: _.get(dentalChart, "dentalCondition.25", ""),
			26: _.get(dentalChart, "dentalCondition.26", ""),
			27: _.get(dentalChart, "dentalCondition.27", ""),
			28: _.get(dentalChart, "dentalCondition.28", ""),
			31: _.get(dentalChart, "dentalCondition.31", ""),
			32: _.get(dentalChart, "dentalCondition.32", ""),
			33: _.get(dentalChart, "dentalCondition.33", ""),
			34: _.get(dentalChart, "dentalCondition.34", ""),
			35: _.get(dentalChart, "dentalCondition.35", ""),
			36: _.get(dentalChart, "dentalCondition.36", ""),
			37: _.get(dentalChart, "dentalCondition.37", ""),
			38: _.get(dentalChart, "dentalCondition.38", ""),
			41: _.get(dentalChart, "dentalCondition.41", ""),
			42: _.get(dentalChart, "dentalCondition.42", ""),
			43: _.get(dentalChart, "dentalCondition.43", ""),
			44: _.get(dentalChart, "dentalCondition.44", ""),
			45: _.get(dentalChart, "dentalCondition.45", ""),
			46: _.get(dentalChart, "dentalCondition.46", ""),
			47: _.get(dentalChart, "dentalCondition.47", ""),
			48: _.get(dentalChart, "dentalCondition.48", ""),
			51: _.get(dentalChart, "dentalCondition.51", ""),
			52: _.get(dentalChart, "dentalCondition.52", ""),
			53: _.get(dentalChart, "dentalCondition.53", ""),
			54: _.get(dentalChart, "dentalCondition.54", ""),
			55: _.get(dentalChart, "dentalCondition.55", ""),
			61: _.get(dentalChart, "dentalCondition.61", ""),
			62: _.get(dentalChart, "dentalCondition.62", ""),
			63: _.get(dentalChart, "dentalCondition.63", ""),
			64: _.get(dentalChart, "dentalCondition.64", ""),
			65: _.get(dentalChart, "dentalCondition.65", ""),
			71: _.get(dentalChart, "dentalCondition.71", ""),
			72: _.get(dentalChart, "dentalCondition.72", ""),
			73: _.get(dentalChart, "dentalCondition.73", ""),
			74: _.get(dentalChart, "dentalCondition.74", ""),
			75: _.get(dentalChart, "dentalCondition.75", ""),
			81: _.get(dentalChart, "dentalCondition.81", ""),
			82: _.get(dentalChart, "dentalCondition.82", ""),
			83: _.get(dentalChart, "dentalCondition.83", ""),
			84: _.get(dentalChart, "dentalCondition.84", ""),
			85: _.get(dentalChart, "dentalCondition.85", ""),
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
				dentalCondition: {
					11: data["11"],
					12: data["12"],
					13: data["13"],
					14: data["14"],
					15: data["15"],
					16: data["16"],
					17: data["17"],
					18: data["18"],
					21: data["21"],
					22: data["22"],
					23: data["23"],
					24: data["24"],
					25: data["25"],
					26: data["26"],
					27: data["27"],
					28: data["28"],
					31: data["31"],
					32: data["32"],
					33: data["33"],
					34: data["34"],
					35: data["35"],
					36: data["36"],
					37: data["37"],
					38: data["38"],
					41: data["41"],
					42: data["42"],
					43: data["43"],
					44: data["44"],
					45: data["45"],
					46: data["46"],
					47: data["47"],
					48: data["48"],
					51: data["51"],
					52: data["52"],
					53: data["53"],
					54: data["54"],
					55: data["55"],
					61: data["61"],
					62: data["62"],
					63: data["63"],
					64: data["64"],
					65: data["65"],
					71: data["71"],
					72: data["72"],
					73: data["73"],
					74: data["74"],
					75: data["75"],
					81: data["81"],
					82: data["82"],
					83: data["83"],
					84: data["84"],
					85: data["85"],
				},
				dentalRecord: {
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
						data: {
							...payload,
							dentalChart: _.get(dentalChart, "id"),
						},
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
	});

	const { handleSubmit, resetForm } = formik;

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
				{dentalChartFetched && (
					<Card p={4}>
						<CardBody>
							<Tabs align="center" index={0}>
								<TabList>
									<Tab>{spiels.DENTAL_CHART}</Tab>
								</TabList>

								<FormikProvider value={formik}>
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
				)}
			</Box>
		</Flex>
	);
};

export default EditRecordTab;
