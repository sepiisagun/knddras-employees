import React, { useState } from "react";
import LogInPage from "../../login/LogInPage";
// import ProfileLayout from "../../../layout/ProfileLayout";
import DashboardScreen from "../../dashboard/screens/DashboardScreen";

const HomeScreen = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	const Status = (status) => {
		setLoggedIn(status);
	};
	const isLoggedIn = () => {
		if (loggedIn) {
			return <DashboardScreen />;
		}
		return <LogInPage getStatus={Status} />;
	};
	return isLoggedIn();
};

export default HomeScreen;
