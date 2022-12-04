import { useLocation } from "react-router-dom";
import { VideoDetail } from "../../components";

import { Notes } from "../Notes/Notes";
export const VideoDetails = () => {
	const {
		state: { videoDetails },
	} = useLocation();

	return (
		<div className=" m-6 ">
			<VideoDetail VideoDetail={videoDetails} />
			<Notes item={videoDetails} />
		</div>
	);
};
