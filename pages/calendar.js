import { usePathname } from "next/navigation";

import checkAuthentication from "../src/utils/routing";

import Error403Screen from "../src/components/Error403Screen";
import CalendarScreen from "../src/modules/calendar/screens/CalendarScreen";

const calendar = () => {
	const path = usePathname();

	if (checkAuthentication(path)) return <CalendarScreen />;
	return <Error403Screen />;
};

export default calendar;
