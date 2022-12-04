import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import { useData } from "../../context/DataProvider";
import { removeLikedVideo } from "../../services/likedVideos/likedVideos";

export const LikedVideoCard = ({ item }) => {
  const { state, dispatch } = useData();
  const videoDetails = state.videos?.find((video) => video._id == item._id);

  const { _id, channelName, title, thumbnail } = videoDetails;

  const likedRemoveHandler = () => {
    removeLikedVideo(_id) &&
      dispatch({ type: "REMOVE_LIKE", payload: { _id } });
  };

  return (
    <div className="flex static flex-wrap wrap p-4   items-center  justify-around group  select-none cursor-pointer  rounded-md  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg ">
      <Link to={`/videos/${_id}`} state={{ videoDetails }}>
        <img alt={title} src={thumbnail} className=" rounded-lg w-72 h-40 " />
      </Link>
      <div className="flex flex-col p-4  pt-2 m-1 w-72  md:w-96">
        <h1 className=" flex text-base overflow-hidden  flex-wrap  text-white">
          {title}
        </h1>

        <h1 className=" flex font-medium   text-sm items-center    text-slate-400">
          {channelName}
        </h1>
        <button
          className="  items-center absolute lg:top-2 lg:right-1  top-8 right-1/4
					 hidden group-hover:block"
          onClick={() => likedRemoveHandler()}
        >
          <RiCloseLine
            size={24}
            className="text-red-500  bg-slate-50 rounded-full "
          />
        </button>
      </div>
    </div>
  );
};
