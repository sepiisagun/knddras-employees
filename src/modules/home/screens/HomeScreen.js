import React, { useState } from "react";
import NavBar from "../../navbar/NavBar";
import LogInPage from "../../login/LogInPage";

const HomeScreen = () => {
	const [loggedIn, setLoggedIn] = useState(false);

	const Status = (status) => {
		setLoggedIn(status);
	};
	const isLoggedIn = () => {
		if (loggedIn) {
			return <NavBar />;
		}
		return <LogInPage getStatus={Status} />;
	};
	return isLoggedIn();
};

export default HomeScreen;
