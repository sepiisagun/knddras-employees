import { useQuery } from "react-query";
import { useState } from "react";
import { Box } from "@chakra-ui/react";

import { retrieveEmployeeAccounts } from "../../auth/engine/auth.queries";

import ProfileLayout from "../../../layout/ProfileLayout";
import SearchBar from "../../records/components/SearchBar";
import StrapiTable from "../../../components/Table";

const EmployeesScreen = () => {
	const [searchInput, setSearchInput] = useState();
	const {
		data: { data: employeeData },
		refetch,
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
				filters: {
					...searchInput,
				},
				populate: "*",
			},
		],
	});

	return (
		<ProfileLayout>
			<Box maxW="auto" p={{ base: 4, md: 5 }}>
				<SearchBar
					isAdmin={true}
					location="Employees"
					refetch={refetch}
					setValue={(e) => setSearchInput(e)}
				/>
				<StrapiTable
					action={["Edit"]}
					data={employeeData}
					headerTitles={[
						"Name",
						"Contact Number",
						"Role",
						"Blocked",
						"Action",
					]}
				/>
			</Box>
		</ProfileLayout>
	);
};

export default EmployeesScreen;
