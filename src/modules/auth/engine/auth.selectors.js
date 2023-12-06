import { get } from "lodash";
import { createSelector } from "reselect";

export const tokenSelector = createSelector(
	(state) => state.auth.jwt,
	(token) => token,
);

export const isLoggedInSelector = createSelector(
	(state) => state.auth.isLoggedIn,
	(token) => token,
);

export const userDetailsSelector = createSelector(
	(state) => state.auth.user.data,
	(user) => user,
);

export const userRoleTypeSelector = (state) =>
	get(state, "auth.user.data.role.type", "public");
