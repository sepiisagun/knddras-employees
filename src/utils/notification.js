import { compact, get } from "lodash";

import {
	CONFIG,
	DEFAULT_ERROR_MESSAGE,
	DEFAULT_ERROR_TITLE,
	messageOverrides,
	titleOverrides,
	LOGIN_FAILED,
} from "../constants/notification";

export const show = (toast, message, title, status = "success") => {
	toast({
		...CONFIG,
		description: message,
		status,
		title,
	});
};

export const showSuccess = (toast, message, title) => {
	show(toast, message, title, "success");
};

export const showWarning = (toast, message, title) => {
	show(toast, message, title, "warning");
};

const parseErrors = (error) => {
	if (typeof error === "string") return error;

	const errors = get(error, "response.data.message", []);

	if (typeof errors !== "string" && errors.length > 0) {
		return compact(
			errors.reduce((errorsAcc, err) => {
				const messages = get(err, "messages", []);

				if (messages.length > 0) {
					errorsAcc.push(
						compact(
							messages.reduce((messagesAcc, message) => {
								messagesAcc.push(message.message);

								return messagesAcc;
							}, []),
						).join("\n"),
					);
				}

				return errorsAcc;
			}, []),
		).join("\n");
	}

	if (typeof errors === "string") {
		if (messageOverrides[errors]) {
			return messageOverrides[errors];
		}

		return errors;
	}

	return DEFAULT_ERROR_MESSAGE;
};

const parseTitle = (error) => {
	const title = get(error, "response.data.error");

	if (titleOverrides[title]) {
		return titleOverrides[title];
	}

	return title || DEFAULT_ERROR_TITLE;
};

export const showError = (toast, error, title) => {
	show(toast, parseErrors(error), title || parseTitle(error), "error");
};

export const defaultErrorHandler = (toast, error) => {
	showError(toast, error);
};

export const loginErrorHandler = (toast) => {
	showError(toast, LOGIN_FAILED.ERROR, LOGIN_FAILED.TITLE);
};
