import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import {
	isLoggedInSelector,
	userRoleTypeSelector,
} from "../src/modules/auth/engine/auth.selectors";

import HomeScreen from "../src/modules/home/screens/HomeScreen";

import { ENDPOINTS } from "../src/constants/Endpoints";
import { ADMIN } from "../src/constants/userRoles";

const Index = () => {
	const isLoggedIn = useSelector(isLoggedInSelector);
	const role = useSelector(userRoleTypeSelector);
	const router = useRouter();

	if (isLoggedIn) {
		if (role === ADMIN) router.push(`${ENDPOINTS.EMPLOYEES}`);
		else router.push(`${ENDPOINTS.DASHBOARD}`);
	}
	return <HomeScreen />;
};

export default Index;
