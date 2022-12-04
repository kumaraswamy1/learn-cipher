import { NavLink } from "react-router-dom";
import { createElement } from "react";
import { menus } from "../../utils/Navbar";

export const Sidebar = () => {
  return (
    <div
      className=" z-10
  lg:flex
 lativere w-56 hidden "
    >
      <div className="lg:flex flex-col  min-h-screen fixed  items-center mx-auto p-6 bg-gray-800  border-r-2 border-gray-800 ">
        <ul className=" mt-8 flex flex-col p-2  text-white">
          {menus.map((menu) => (
            <>
              <li className="mt-10  gap-4 relative">
                {" "}
                <NavLink
                  to={`/${menu.link}`}
                  end={menu.end}
                  className={({ isActive }) =>
                    isActive ? "text-yellow-500" : undefined
                  }
                >
                  {" "}
                  <div className="flex ">
                    {createElement(menu.icon, {
                      size: "24",
                      className: "mr-4",
                    })}
                    <h1>{menu.name}</h1>
                  </div>
                </NavLink>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};
