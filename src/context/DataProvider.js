import { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";

import { dataReducer } from "../reducer/Data-reducer";
import { useEffect } from "react";
export const DataContext = createContext();

export function DataProvider({ children }) {
	const intialArgs = {
		videos: [],
		playlists: [],
		likedVideos: [],
		watchHistory: [],
		userNotes: [],
	};

	const [check, setCheck] = useState(false);

	const [state, dispatch] = useReducer(dataReducer, intialArgs);
	useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.get(
					"https://VideoLibrary-2.kumaraswamya.repl.co/videos"
				);
				dispatch({ type: "ON_LOAD", payload: data.videos });
				return data;
			} catch (error) {
				console.error(error);
			}
		})();
	}, []);
	const addToPlaylist = async (name) => {
		try {
			const { data } = await axios.get(
				"https://VideoLibrary-2.kumaraswamya.repl.co/playlists",
				{ name }
			);

			return data;
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<DataContext.Provider
			value={{ state, dispatch, addToPlaylist, check, setCheck }}
		>
			{" "}
			{children}
		</DataContext.Provider>
	);
}

export function useData() {
	return useContext(DataContext);
}
