import { useContext } from "react";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/AuthProvider";

import { useData } from "../../context/DataProvider";
import { updateLikedVideo } from "../../services/likedVideos/likedVideos";

export const LikeButton = ({ likedVideo }) => {
  const navigate = useNavigate();
  const { state, dispatch } = useData();
  const {
    state: { token },
  } = useLogin();
  const isLiked = state?.likedVideos?.some((video) => video._id === likedVideo);
  const likedButtonHandler = () => {
    token
      ? updateLikedVideo(likedVideo) &&
        dispatch({ type: "TOGGLE_LIKE", payload: { _id: likedVideo } })
      : navigate("/login", { replace: true });
  };

  return (
    <>
      <button
        className="rounded-full text-red-500  p-2.5 m-1 "
        onClick={() => {
          likedButtonHandler();
        }}
      >
        {!isLiked ? <RiHeart3Line size={30} /> : <RiHeart3Fill size={30} />}
      </button>
    </>
  );
};
