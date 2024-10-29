import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      {/* title and search */}
      <div className="flex flex-col gap-4 mb-6 md:justify-between md:items-center md:flex-row">
        <div>
          <h1 className="text-2xl text-gray-300">Brian </h1>
          <p className="text-gray-500">07 de octubre 2022</p>
        </div>
        <form>
          <div className="w-full relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-10 pr-4 bg-[#1F1D2B]  text-gray-300 outline-none rounded-xl"
            />
          </div>
          <div></div>
        </form>
      </div>
      <nav className="text-gray-300 flex justify-between mb-6 lg:justify-start lg:gap-8">
        <a
          href="#"
          className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-[#ec7c6a] text-[#ec7c6a] before:left-0 before:rounded-full before:-bottom-[1px]"
        >
          Hot dishes
        </a>
        <a href="#" className="py-2 pr-4">
          Cold dishes
        </a>
        <a href="#" className="py-2 pr-4">
          Soup
        </a>
        <a href="#" className="py-2 pr-4">
          Grill
        </a>
      </nav>
    </header>
  );
};

export default Header;
