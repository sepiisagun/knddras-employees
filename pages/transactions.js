import { usePathname } from "next/navigation";

import checkAuthentication from "../src/utils/routing";

import Error403Screen from "../src/components/Error403Screen";
import TransactionsScreen from "../src/modules/transaction/screens/TransactionsScreen";

const Transaction = () => {
	const path = usePathname();

	if (checkAuthentication(path)) return <TransactionsScreen />;
	return <Error403Screen />;
};

export default Transaction;
