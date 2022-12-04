import axios from "axios";
import { baseURL } from "../API/api.instance";

export const getLikedVideos = async (dispatch) => {
	try {
		const { data } = await axios.get(`${baseURL}/likedVideos`);
		if (data.success) {
			dispatch({ type: "SET_LIKE", payload: data.likedVideos });
		}
	} catch (error) {
		console.error(error);
	}
};

export const updateLikedVideo = async (_id) => {
	try {
		const { data } = await axios.post(`${baseURL}/likedVideos`, {
			_id,
		});
		if (data.success) {
			return data;
		}
	} catch (error) {
		console.error(error);
	}
};

export const removeLikedVideo = async (_id) => {
	try {
		const { data } = await axios.post(`${baseURL}/likedVideos/remove`, {
			_id,
		});
		if (data.success) {
			return data;
		}
	} catch (error) {
		console.error(error);
	}
};
