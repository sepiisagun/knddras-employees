import React, { useState } from "react";
import LogInPage from "../../login/LogInPage";
// import DashboardScreen from "../../dashboard/screens/DashboardScreen";
import RecordsScreen from "../../records/screens/RecordsScreen";

const HomeScreen = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	const Status = (status) => {
		setLoggedIn(status);
	};
	const isLoggedIn = () => {
		if (loggedIn) {
			return <RecordsScreen />;
		}
		return <LogInPage getStatus={Status} />;
	};
	return isLoggedIn();
};

export default HomeScreen;
