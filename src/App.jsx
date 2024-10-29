import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { LuPieChart } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

// Components
import Sidebar from "./components/shared/Sidebar";
import Cart from "./components/shared/Cart";
import Card from "./components/shared/Card";
import Header from "./components/shared/Header";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowOrder(false);
  };

  const toggleOrders = () => {
    setShowOrder(!showOrder);
    setShowMenu(false);
  };

  return (
    <>
      <div className="bg-[#262837] w-full min-h-screen">
        <Sidebar showMenu={showMenu} />
        <Cart showOrder={showOrder} toggleOrders={toggleOrders} />
        {/* Mobile menu */}
        <nav className="bg-[#1F1D2B] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-4 px-8 flex justify-between rounded-tr-xl rounded-tl-xl">
          <button className=" p-2">
            <FaRegUser />
          </button>
          <button className="p-2">
            <FaPlus />
          </button>
          <button onClick={toggleOrders} className="p-2">
            <LuPieChart />
          </button>
          <button onClick={toggleMenu} className="text-white p-2">
            {showMenu ? <IoClose /> : <RiMenu3Fill />}
          </button>
        </nav>
        <main className="lg:pl-32 lg:pr-96 pb-20">
          <div className="lg:col-span-6 md:p-8 p-4">
            {/* Header */}
            <Header />
            {/* title content */}
            <div className="flex items-center justify-between mb-16">
              <h2 className="text-xl text-gray-300">Choose Dishes</h2>
              <button className="flex items-center gap-4 text-gray-300 bg-[#1F1D2B] py-2 px-4 ">
                <MdKeyboardArrowDown /> Dine in
              </button>
            </div>
            {/* Content */}
            <div className="p-8 grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
              {/* cards */}
              {[...Array(10)].map((x, i) => (
                <Card
                  key={i}
                  img="comida1.png"
                  description="Spicy seasoned seafood doodles"
                  price="2.20"
                  inventory="20"
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
