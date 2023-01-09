import { NOTIFY_NAMESPACE } from './constants';

export const saveState = (state) => {
	try {
		const notificationJson = JSON.stringify(state);
		localStorage.setItem(NOTIFY_NAMESPACE, notificationJson);
	} catch (err) {
		throw new Error(err);
	}
};

export const loadState = () => {
	try {
		const current = localStorage.getItem(NOTIFY_NAMESPACE);
		return current !== null ? JSON.parse(current) : {};
	} catch (err) {
		throw new Error(err);
	}
};
