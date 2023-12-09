import axios from "axios";
import _ from "lodash";

import { CONFIG } from "../constants/Endpoints";

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || undefined,
	timeout: CONFIG.timeout,
});

export default instance;

export const attachToken = (token) => {
	instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const detachToken = () => {
	delete instance.defaults.headers.common.Authorization;
};

export const defaultThen = ({ data: payload }) => {
	let data;
	let meta;
	let pages;
	let count;

	if (!_.isEmpty(_.get(payload, "meta"))) {
		const { data: payloadData, meta: payloadMeta } = payload;
		data = payloadData;
		meta = payloadMeta;
	} else {
		data = payload;
	}

	if (!_.isEmpty(meta)) {
		pages = meta.pagination;
		count = pages.total;
	}

	const response = { count, data, pagination: pages };

	return response;
};
