import { VideoCard } from "../../components";
import { useData } from "../../context/DataProvider";

export const Videos = () => {
	const { state } = useData();

	return (
		<div className="m-10  col-span-4">
			<h2 className="text-4xl  text-white py-10 px-6">Videos</h2>
			<div className="grid gap-y-10 gap-x-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
				{state?.videos?.map((video) => (
					<VideoCard key={video?._id} videoDetails={video} />
				))}{" "}
			</div>
		</div>
	);
};
