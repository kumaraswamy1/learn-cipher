import axios from "axios";
import { baseURL } from "../API/api.instance";

export const getPlaylist = async (dispatch, state) => {
	try {
		const { data } = await axios.get(`${baseURL}/playlists`);
		dispatch({ type: "SET_PLAYLISTS", payload: data.playlist });
	} catch (error) {
		console.error(error);
	}
};
export const createPlaylist = async (name) => {
	try {
		const { data } = await axios.post(`${baseURL}/playlists/create`, {
			name,
		});
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const updatePlaylistVideo = async (_id, playlistId) => {
	try {
		const { data } = await axios.post(`${baseURL}/playlists/${playlistId}`, {
			_id,
		});
	} catch (error) {
		console.error(error);
	}
};

export const deletePlaylist = async (_id) => {
	try {
		const { data } = await axios.delete(`${baseURL}/playlists/${_id}`, {
			_id,
		});
		return data;
	} catch (error) {
		console.error(error);
	}
};

export const deletePlaylistVideo = async (_id, playlistId) => {
	try {
		const { data } = await axios.put(`${baseURL}/playlists/${playlistId}`, {
			_id,
		});
		return data;
	} catch (error) {
		console.error(error);
	}
};
