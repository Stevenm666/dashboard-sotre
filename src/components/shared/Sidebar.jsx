import React from "react";
import { GoHome } from "react-icons/go";
import { LuBadgePercent, LuPieChart } from "react-icons/lu";
import {
  IoMailOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = (props) => {
  const { showMenu } = props;

  return (
    <div
      className={`bg-[#1F1D2B] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl transition-all ${
        showMenu ? "left-0" : "-left-full"
      } z-10`}
    >
      <div>
        <ul className="pl-4">
          <li>
            <h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5">
              LOGO
            </h1>
          </li>
          <li className="bg-[#262837] p-4 rounded-tl-xl rounded-bl-xl">
            <a
              href="#"
              className="bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-white"
            >
              <GoHome className="text-2xl" />
            </a>
          </li>
          <li className="group p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837]">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <LuBadgePercent className="text-2xl" />
            </a>
          </li>
          <li className="group p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837]">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <LuPieChart className="text-2xl" />
            </a>
          </li>
          <li className="group p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837]">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <IoMailOutline className="text-2xl" />
            </a>
          </li>
          <li className="group p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837]">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <IoNotificationsOutline className="text-2xl" />
            </a>
          </li>
          <li className="group p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837]">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <IoSettingsOutline className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="pl-4">
          <li className="group p-4 rounded-tl-xl rounded-bl-xl hover:bg-[#262837]">
            <a
              href="#"
              className="group-hover:bg-[#ec7c6a] p-4 flex justify-center rounded-lg text-[#ec7c6a] group-hover:text-white transition-colors"
            >
              <IoIosLogOut className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
