import { usePathname } from "next/navigation";

import checkAuthentication from "../src/utils/routing";

import Error403Screen from "../src/components/Error403Screen";
import RequestScreen from "../src/modules/request/screens/RequestScreen";

const Request = () => {
	const path = usePathname();

	if (checkAuthentication(path)) return <RequestScreen />;
	return <Error403Screen />;
};

export default Request;
