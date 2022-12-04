import { NavLink } from "react-router-dom";

import { default as logo } from "../../logo.svg";
import { AiOutlineUser } from "react-icons/ai";
import { useLogin } from "../../context/AuthProvider";

export const Navbar = () => {
  const {
    state: { token },
  } = useLogin();
  return (
    <div className=" border-b-2  border-yellow-500 flex z-10 sticky top-0 text-white p-3 px-10 align-middle items-center bg-black  flex-row justify-between mx-auto">
      <NavLink to={"/"}>
        <img src={logo} alt=" Logo" />
      </NavLink>
      <NavLink className="flex  " to={token ? "/user" : "/login"}>
        {token ? (
          <AiOutlineUser size={24} />
        ) : (
          <button className="outline outline-2  outline-offset-2  outline-blue-400 rounded p-1">
            Login
          </button>
        )}
      </NavLink>
    </div>
  );
};
