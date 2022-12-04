import { LikedVideoCard } from "../../components";
import { useData } from "../../context/DataProvider";

export const LikedVideo = () => {
	const {
		state: { likedVideos },
	} = useData();

	return (
		<div className="  flex-col flex-wrap mt-10  ">
			<h1 className="text-white text-4xl p-6 mx-auto sm:m-2">Liked Videos</h1>

			{likedVideos.length === 0 ? (
				<div>
					<p className="text-center  text-slate-300">Playlist is empty.</p>
				</div>
			) : (
				likedVideos.map((item) => (
					<>
						<LikedVideoCard item={item} />
					</>
				))
			)}
		</div>
	);
};
