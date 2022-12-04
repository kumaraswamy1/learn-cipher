import { AiFillDelete } from "react-icons/ai";
import { useData } from "../../context/DataProvider";
import { deletePlaylist } from "../../services/playlist/playlist";
const playlistHandler = () => {
  {
    dispatch({
      type: "REMOVE_PLAYLIST",

      payload: { name: list.name },
    });
    deletePlaylist(list._id);
  }
};
export const PlaylistHeader = ({ list }) => {
  const { dispatch } = useData();
  return (
    <div className="flex justify-between   text-white  ">
      <h1 className="text-3xl"> {list.name}</h1>
      <button
        disabled={list.name === "watchlater"}
        onClick={() => playlistHandler()}
      >
        <AiFillDelete
          size={26}
          className={`text-red-400 ${
            list.name === "watchlater" ? "hidden" : "visible"
          }`}
        />
      </button>
    </div>
  );
};
