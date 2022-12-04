import { Link } from "react-router-dom";
import { LikeButton } from "../LikedVideo/LikeButton";

export const VideoCard = ({ videoDetails }) => {
  const { _id, title, thumbnail, videoId, views } = videoDetails;

  return (
    <div>
      <Link to={`/videos/${_id}`} state={{ videoDetails }}>
        <div>
          <img
            alt={title}
            src={thumbnail}
            className="h-full w-full object-cover object-center rounded-lg	group-hover:opacity-75"
          />
        </div>
      </Link>
      <div className=" h-20 pt-2 m-1 flex justify-between items-center align-middle ">
        <h2 className="  text-sm  sm:text-base  truncate  overflow-hidden text-white">
          {title}
        </h2>

        <LikeButton likedVideo={_id} />
      </div>
    </div>
  );
};
