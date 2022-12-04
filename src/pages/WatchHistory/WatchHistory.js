import { WatchHistoryCard } from "../../components";
import { useData } from "../../context/DataProvider";

export const WatchHistory = () => {
	const {
		state: { watchHistory },
	} = useData();

	return (
		<div className="  flex-col flex-wrap mt-10  ">
			<h1 className="text-white text-4xl p-6 mx-auto sm:m-2">History</h1>
			{watchHistory.length === 0 ? (
				<div>
					<p className="text-center text-slate-300 p-8 pt-2">
						watchHistory is empty.
					</p>
				</div>
			) : (
				watchHistory?.map((item, i) => <WatchHistoryCard item={item} key={i} />)
			)}
		</div>
	);
};
