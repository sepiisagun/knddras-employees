import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { isLoggedInSelector } from "../../auth/engine/auth.selectors";

import LogInPage from "../../login/LogInPage";
import { ENDPOINTS } from "../../../constants/Endpoints";

const HomeScreen = () => {
	const isLoggedIn = useSelector(isLoggedInSelector);
	const router = useRouter();

	if (isLoggedIn) {
		router.push(`${ENDPOINTS.DASHBOARD}`);
	}

	return <LogInPage />;
};

export default HomeScreen;
