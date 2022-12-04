import { NavLink } from "react-router-dom";
import { createElement } from "react";
import { useLogin } from "../../context/AuthProvider";
import { menus } from "../../utils/Navbar";

export const NavbarBottom = () => {
  return (
    <>
      <footer className="p-4   fixed bottom-0 items-center w-full mt-14 bg-black lg:hidden ">
        <ul className="flex justify-evenly items-center mb-2 mt-2 text-sm text-white sm:mb-0 dark:text-gray-400">
          {menus.slice(0, 4).map((menu) => (
            <>
              <li className="  gap-6 relative">
                <NavLink
                  to={menu.link}
                  className="flex items-center  gap-4  text-sm"
                >
                  {createElement(menu.icon, { size: "24" })}

                  <h1 className="hidden sm:flex">{menu.name}</h1>
                </NavLink>
              </li>
            </>
          ))}
        </ul>
      </footer>
    </>
  );
};
