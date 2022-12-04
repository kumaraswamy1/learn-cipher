import { AiOutlineClose } from "react-icons/ai";
import { useData } from "../../context/DataProvider";
import { updatePlaylistVideo } from "../../services";

export const PlaylistCard = ({ list, item }) => {
  const { state, dispatch } = useData();

  const itemFound = state.videos?.find(({ _id }) => _id === item);
  const playlistId = list._id;
  const { _id, channelName, title, thumbnail } = itemFound || {};
  const playlistVideoHandler = () => {
    updatePlaylistVideo(_id, playlistId);
    dispatch({
      type: "REMOVE_PLAYLIST_VIDEO",
      payload: { name: list.name, videoId: _id },
    });
  };
  return (
    <>
      <ul className="flex flex-col  p-4  ">
        <li className=" flex-row mb-2 flex flex-wrap md:flex-nowrap">
          <div className=" group cursor-pointer text-slate-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div className="flex flex-col rounded-md justify-center items-center mr-4">
              <img alt={title} src={thumbnail} className=" w-60" />
            </div>
            <div className=" pl-1 mr-16">
              <div className="font-medium text-base sm:text-sm"> {title}</div>
              <div className=" text-sm sm:text-xs">{channelName}</div>
            </div>
            <div className=" hidden group-hover:block">
              <button onClick={() => playlistVideoHandler()}>
                <AiOutlineClose size={22} className="hover:text-red-400" />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};
