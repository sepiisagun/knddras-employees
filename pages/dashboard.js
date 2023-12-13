import { usePathname } from "next/navigation";

import checkAuthentication from "../src/utils/routing";

import Error403Screen from "../src/components/Error403Screen";
import DashboardScreen from "../src/modules/dashboard/screens/DashboardScreen";

const Dashboard = () => {
	const path = usePathname();

	if (checkAuthentication(path)) return <DashboardScreen />;
	return <Error403Screen />;
};

export default Dashboard;
