import { LikeButton } from "../LikedVideo/LikeButton";
import ReactPlayer from "react-player/youtube";
import { addToWatchHistory } from "../../services";
import { AddToPlaylist } from "../Playlist/AddToPlaylist";
import { useData } from "../../context/DataProvider";

export const VideoDetail = ({ VideoDetail }) => {
  const { dispatch } = useData();

  const {
    _id,
    channelName,
    channelDisplayPic,
    description,
    videoId,
    title,
    thumbnail,
    views,
  } = VideoDetail;

  const videoListener = () => {
    dispatch({
      type: "SET_HISTORY",
      payload: { _id: _id },
    });
    addToWatchHistory(_id);
  };

  return (
    <div className="sm:max-w-5xl overflow-hidden ">
      <div className=" sm:rounded-lg ">
        <div
          className=" aspect-video h-full w-4/5player-wrapper md:w-5/6 rounded-lg overflow-hidden
						"
        >
          <ReactPlayer
            url={`https://www.youtube.com/embed/${videoId}/${thumbnail}`}
            onStart={videoListener}
            width="100%"
            height="100%"
            controls={true}
          />
        </div>
      </div>
      <div className=" max-w-2xl  pt-6  lg:max-w-7xl  lg:pt-6 lg:pb-8">
        <h1 className="text-base    tracking-tight text-white sm:text-3xl">
          {title}
        </h1>
        <p className="p-2 text-slate-400 ">{views} views</p>
      </div>
      <div className=" max-w-2xl  pt-1  lg:max-w-7xl  ">
        <div className=" flex justify-between items-center pr-6">
          <div className="flex  items-center ">
            <div className="rounded-full m-1  w-16 h-16">
              <img
                src={channelDisplayPic}
                alt={channelName}
                className="rounded-full"
              />
            </div>
            <h1 className="  align-middle p-4 tracking-tight text-white ">
              {channelName}
            </h1>
          </div>
          <div className="flex items-center mr-10 ">
            <AddToPlaylist playlistVideo={_id} />
            <LikeButton likedVideo={_id} />
          </div>
        </div>
      </div>
      <div className=" lg:col-span-2 lg:col-start-1  lg:pt-6 lg:pb-16 lg:pr-8">
        <div>
          <div className="space-y-6">
            <p className="text-lg text-slate-300">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
