import { useQuery } from "react-query";

import { Box } from "@chakra-ui/react";

import { retrieveEmployeeAccounts } from "../../auth/engine/auth.queries";

import ProfileLayout from "../../../layout/ProfileLayout";
import SearchBar from "../../records/components/SearchBar";
import StrapiTable from "../../../components/Table";

const EmployeesScreen = () => {
	const {
		data: { data: employeeData },
	} = useQuery({
		initialData: [],
		placeholderData: [],
		queryFn: retrieveEmployeeAccounts,
		queryKey: [
			"employees-data",
			{
				fields: [
					"blocked",
					"firstName",
					"lastName",
					"email",
					"mobileNumber",
					"username",
				],
				populate: "*",
			},
		],
	});

	return (
		<ProfileLayout>
			<Box maxW="auto" p={{ base: 4, md: 5 }}>
				<SearchBar location="Employees" />
				<StrapiTable
					action={["Edit"]}
					data={employeeData}
					headerTitles={["Name", "Contact Number", "Role", "Action"]}
				/>
			</Box>
		</ProfileLayout>
	);
};

export default EmployeesScreen;
