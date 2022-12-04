import axios from "axios";
import { baseURL } from "../API/api.instance";

export const addToWatchHistory = async (_id) => {
	try {
		const { data } = await axios.post(`${baseURL}/watchHistory/add`, {
			_id,
		});
		if (data.success) {
			return data;
		}
	} catch (error) {
		console.error(error);
	}
};

export const removeWatchHistory = async (_id) => {
	try {
		const { data } = await axios.post(`${baseURL}/watchHistory/remove`, {
			_id,
		});
		if (data.success) {
			return data;
		}
	} catch (error) {
		console.error(error);
	}
};

export const getWatchHistory = async (dispatch) => {
	try {
		const { data } = await axios.get(`${baseURL}/watchHistory`);
		dispatch({ type: "SET_WATCH_HISTORY", payload: data.videos.videos });
	} catch (error) {
		console.error(error);
	}
};
