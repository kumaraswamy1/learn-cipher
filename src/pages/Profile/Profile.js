import { useLogin } from "../../context/AuthProvider";
import jwt_decode from "jwt-decode";
import { Playlist } from "../Playlist/Playlist";
import { getLikedVideos } from "../../services";
import { useData } from "../../context/DataProvider";
export const Profile = () => {
	const {
		state: { token },
		logoutHandler,
	} = useLogin();
	const { username } = jwt_decode(token);
	const {
		state: { likedVideos, playlists },
	} = useData();
	return (
		<div className="flex flex-col items-center justify-center mx-auto m-10 px-6 py-10 lg:px-8 border w-96 border-gray-800 rounded-t-xl">
			<h1 className="text-white text-4xl pb-4 ">Profile</h1>
			<div className="">
				<div className="font-bold text-2xl text-white">{username}</div>
			</div>
			<div className="px-6 py-4 m-1">
				<span className=" bg-gray-200 rounded-full px-6 py-1 text-sm  text-gray-700 mr-2">
					{Playlist.length} playlists
				</span>
				<span className=" bg-gray-200 rounded-full px-3 py-1 text-sm  text-gray-700">
					{likedVideos.length} likedVideos
				</span>
			</div>
			<button
				className="group relative flex w-full justify-center  mt-4  rounded-full  text-lg bg-indigo-600 py-2 px-4 font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				onClick={() => logoutHandler()}
			>
				Logout
			</button>
		</div>
	);
};
