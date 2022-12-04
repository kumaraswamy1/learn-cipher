import {
	AiOutlineHistory,
	AiOutlineOrderedList,
	AiOutlineLike,
	AiOutlineHome,
} from "react-icons/ai";

export const menus = [
	{
		name: "Home",
		link: "",
		icon: AiOutlineHome,
		end: true,
	},
	{
		name: "Liked Videos",
		link: "likedVideos",
		icon: AiOutlineLike,
	},
	{
		name: "Playlists",
		link: "playlists",
		icon: AiOutlineOrderedList,
	},
	{
		name: "Watch History",
		link: "watchHistory",
		icon: AiOutlineHistory,
	},
];
