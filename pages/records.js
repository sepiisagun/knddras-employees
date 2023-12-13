import { usePathname } from "next/navigation";

import checkAuthentication from "../src/utils/routing";

import Error403Screen from "../src/components/Error403Screen";
import RecordsScreen from "../src/modules/records/screens/RecordsScreen";

const Records = () => {
	const path = usePathname();

	if (checkAuthentication(path)) return <RecordsScreen />;
	return <Error403Screen />;
};

export default Records;
