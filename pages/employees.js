import { usePathname } from "next/navigation";

import checkAuthentication from "../src/utils/routing";

import Error403Screen from "../src/components/Error403Screen";
import EmployeesScreen from "../src/modules/employees/screens/EmployeesScreen";

const employees = () => {
	const path = usePathname();

	if (checkAuthentication(path)) return <EmployeesScreen />;
	return <Error403Screen />;
};

export default employees;
