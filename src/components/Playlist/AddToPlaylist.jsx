import { AiOutlineEdit } from "react-icons/ai";
import { RiPlayListAddFill } from "react-icons/ri";

import { useState } from "react";
import { useData } from "../../context/DataProvider";
import {
  createPlaylist,
  updatePlaylistVideo,
} from "../../services/playlist/playlist";

export const AddToPlaylist = ({ playlistVideo }) => {
  const { state, dispatch, addToPlaylist, check, setCheck } = useData();

  const [playlistName, setPlaylistName] = useState("");
  const [toggle, setToggle] = useState(true);
  const playlistHandler = (e) => {
    createPlaylist(playlistName);
    e.preventDefault();
    dispatch({
      type: "CREATE_PLAYLIST",
      payload: { name: playlistName },
    });
  };
  const togglePlaylist = (playlistItem) => {
    updatePlaylistVideo(playlistVideo, playlistItem._id);
    dispatch({
      type: "UPDATE_PLAYLIST",
      payload: { name: playlistItem.name, videoId: playlistVideo },
    });
  };
  const checkplaylist = (playlistItem) => {
    return state.playlists?.filter((item) => item.name === playlistItem)?.[0];
  };
  const checkVideo = (playlistItem) => {
    const playlist = checkplaylist(playlistItem);

    return playlist?.videos?.find(({ _id }) => _id === playlistVideo);
  };

  return (
    <div>
      <button
        className="text-white"
        onClick={() => {
          setToggle(!toggle);
        }}
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        type="button"
      >
        <RiPlayListAddFill size={24} />
      </button>

      <div
        id="dropdown"
        className={`${
          toggle ? "hidden" : "visible"
        } absolute w-60 bg-white rounded shadow`}
      >
        <form
          onSubmit={playlistHandler}
          className={toggle ? "hidden" : "visible"}
        >
          <div>
            <div className="relative">
              <div className="flex  absolute inset-y-0 text-white items-center pl-3 pointer-events-none">
                {" "}
                <label htmlFor="vehicle1" href="#">
                  <AiOutlineEdit />
                </label>
              </div>
              <input
                className="bg-gray-50 border rounded mb-4 border-gray-300 text-gray-900 text-sm block w-full pl-10 p-2.5 "
                type="text"
                name="example"
                list="exampleList"
                placeholder="Create Playlist"
                onChange={(e) => setPlaylistName(e.target.value)}
              />
            </div>
          </div>
        </form>
        {state.playlists.map((playlistItem) => (
          <div
            key={playlistItem.name}
            className="flex   p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <input
              checked={checkVideo(playlistItem.name)}
              type="checkbox"
              onChange={() => togglePlaylist(playlistItem)}
            />
            <label
              htmlFor="vehicle1"
              className="ml-2 w-full text-sm font-medium text-gray-900 rounded dark:text-gray-300"
            >
              {playlistItem.name}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
