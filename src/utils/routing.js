import { useSelector } from "react-redux";
import { find, get, includes } from "lodash";

import {
	isLoggedInSelector,
	userRoleTypeSelector,
} from "../modules/auth/engine/auth.selectors";

import Links from "../constants/Links";

const checkAuthentication = (path) => {
	const isLoggedIn = useSelector(isLoggedInSelector);
	const role = useSelector(userRoleTypeSelector);
	const allowedRoles = get(
		find(Links, (link) => {
			if (`/${link.href}` === path) return link;
			return false;
		}),
		"allowed",
	);

	if (!isLoggedIn) return false;

	if (!includes(allowedRoles, role)) return false;

	return true;
};

export default checkAuthentication;
