import axios from "axios";
import { baseURL } from "../API/api.instance";

export const createUserNote = async (_id, description) => {
	try {
		const { data } = await axios.post(`${baseURL}/notes`, {
			_id,
			description,
		});
		if (data.success) {
			return data;
		}
	} catch (error) {
		console.error(error);
	}
};
export const deleteUserNote = async (_id, description) => {
	try {
		const { data } = await axios.post(`${baseURL}/notes/remove`, {
			_id,
			description,
		});
		if (data.success) {
			return data;
		}
	} catch (error) {
		console.error(error);
	}
};

export const getUserNotes = async (dispatch) => {
	try {
		const { data } = await axios.get(`${baseURL}/notes`);
		console.log(data.userNotes);
		dispatch({ type: "SET_NOTE", payload: data.userNotes });
	} catch (error) {
		console.error(error);
	}
};
