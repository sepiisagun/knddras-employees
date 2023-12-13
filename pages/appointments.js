import { usePathname } from "next/navigation";

import checkAuthentication from "../src/utils/routing";

import Error403Screen from "../src/components/Error403Screen";
import AppointmentsScreen from "../src/modules/appointment/screens/AppointmentsScreen";

const Appointment = () => {
	const path = usePathname();

	if (checkAuthentication(path)) return <AppointmentsScreen />;
	return <Error403Screen />;
};

export default Appointment;
