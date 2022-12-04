import { PlaylistCard } from "../../components/Playlist/PlaylistCard";
import { PlaylistHeader } from "../../components/Playlist/PlaylistHeader";
import { useLogin } from "../../context/AuthProvider";
import { useData } from "../../context/DataProvider";

export const Playlist = () => {
	const {
		state: { playlists },
	} = useData();

	const { state } = useLogin();

	return (
		<div className="container flex flex-col  w-3/4 justify-center p-6 ">
			{playlists.length === 0 ? (
				<div>
					<p className="text-center text-slate-300">Playlist is empty.</p>
				</div>
			) : (
				playlists.map((list) => (
					<div key={list.name} className="p-4 border border-slate-800 ">
						<PlaylistHeader list={list} key={list.name} />
						{list.videos.length === 0 ? (
							<p className="text-slate-600 pt-4"> Empty playlist </p>
						) : (
							list.videos?.map(({ _id }) => (
								<PlaylistCard item={_id} list={list} key={_id} />
							))
						)}
					</div>
				))
			)}
		</div>
	);
};
