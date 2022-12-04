import "./App.css";

import { PrivateRoute } from "./privateRoutes/PrivateRoute";

import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Navbar, NavbarBottom, Sidebar } from "./components";
import { useLogin } from "./context/AuthProvider";
import { useData } from "./context/DataProvider";
import {
	Home,
	LikedVideo,
	Login,
	NoMatch,
	Playlist,
	Profile,
	Signup,
	VideoDetails,
	WatchHistory,
} from "./pages";
import {
	getLikedVideos,
	getPlaylist,
	getUserNotes,
	getWatchHistory,
} from "./services";

function App() {
	const { state, dispatch } = useData();
	const {
		state: { token },
	} = useLogin();
	useEffect(() => {
		getLikedVideos(dispatch);
		getWatchHistory(dispatch);
		getUserNotes(dispatch);
		getPlaylist(dispatch);
	}, [token]);
	return (
		<div className="bg-slate-900 min-h-screen pb-7">
			<Navbar />
			<div className=" flex flex-row">
				<Sidebar />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/videos/:id" element={<VideoDetails />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />

					<Route path="*" element={<NoMatch />} />

					<Route
						path="/user"
						element={<PrivateRoute>{<Profile />}</PrivateRoute>}
					/>

					<Route
						path="/likedVideos"
						element={
							<PrivateRoute>
								<LikedVideo />
							</PrivateRoute>
						}
					/>
					<Route
						path="/playlists"
						element={
							<PrivateRoute>
								<Playlist />
							</PrivateRoute>
						}
					/>
					<Route
						path="/watchHistory"
						element={<PrivateRoute>{<WatchHistory />}</PrivateRoute>}
					/>
				</Routes>
			</div>
			<NavbarBottom />
		</div>
	);
}

export default App;
