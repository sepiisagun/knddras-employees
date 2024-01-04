export const notifSpiels = {
	ERROR: "Error",
	SUCCESS: "Success",
	WARNING: "Warning",
};

export const toastCreateMessage = (message) => {
	return `Created ${message} successfully`;
};

export const toastUpdateMessage = (message) => {
	return `Updated ${message} successfully`;
};

export const toastDeleteMessage = (message) => {
	return `Deleted ${message} successfully`;
};

export const toastAcceptMessage = (message) => {
	return `${message} accepted`;
};

export const toastRejectedMessage = (message) => {
	return `${message} rejected`;
};

export const toastCancelledMessage = (message) => {
	return `${message} cancelled`;
};

export const toastSuccessfulLoginMessage = (message) => {
	return `${message} successfully`;
};

export const toastSuccessfulRecoveryMessage = () => {
	return `Please check your email.`;
};
