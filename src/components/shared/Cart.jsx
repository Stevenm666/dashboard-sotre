import React from "react";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";

const Cart = (props) => {

  const { showOrder, toggleOrders} = props;

  return (
    <div>
      <div
        className={`lg:col-span-2 fixed lg:right-0 top-0 bg-[#1F1D2B] lg:w-96 md:w-full h-full ${
          showOrder ? "right-0" : "-right-full"
        } transition-all`}
      >
        {/* orders */}
        <div className="relative pt-16 lg:p-8 text-gray-300 p-8 h-full">
          <IoClose
            onClick={toggleOrders}
            className="absolute left-4 top-4 p-3 box-content text-gray-300 bg-[#262837] rounded-full text-xl lg:hidden"
          />
          <h1 className="text-2xl mb-2">Order #314232</h1>
          <div className="flex items-center gap-4 flex-wrap mb-8">
            <button className="bg-[#ec7c6a] text-white py-2 px-4 rounded-xl">
              Dine in
            </button>
            <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
              To go
            </button>
            <button className="text-[#ec7c6a] py-2 px-4 rounded-xl border border-gray-500">
              Delivery
            </button>
          </div>
          {/* car */}
          <div>
            <div className="grid grid-cols-6 mb-4 p-4">
              <h5 className="col-span-4">Item</h5>
              <h5>Qty</h5>
              <h5>Price</h5>
            </div>
            {/* products */}
            <div className="h-[400px] overflow-scroll lg:h-[580px] md:h-[460px]">
              {/* product */}
              <div className="p-4 rounded-xl mb-6 border border-gray-500">
                <div className="grid grid-cols-6 mb-2">
                  <div className="col-span-4 flex items-center gap-3">
                    <img src="comida1.png" className="w-10 h-10 object-cover" />
                    <div>
                      <h5 className="text-sm">Spaicy seaso...</h5>
                      <p className="text-xs text-gray-500">$2.29</p>
                    </div>
                  </div>
                  <div>
                    <span>2</span>
                  </div>
                  <div>
                    <span>$4.58</span>
                  </div>
                </div>
                <div className="grid grid-cols-6">
                  <form className="col-span-5 pr-4">
                    <input
                      type="text"
                      className="w-full py-2 px-4 bg-[#262837] text-gray-300 outline-none rounded-xl"
                      placeholder="Order description..."
                    />
                  </form>
                  <div className="text-center">
                    <button className="border border-red-500 p-2 rounded-lg">
                      <MdDeleteOutline className="text-red-500 text-xl" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl mb-6 border border-gray-500">
                <div className="grid grid-cols-6 mb-2">
                  <div className="col-span-4 flex items-center gap-3">
                    <img src="comida1.png" className="w-10 h-10 object-cover" />
                    <div>
                      <h5 className="text-sm">Spaicy seaso...</h5>
                      <p className="text-xs text-gray-500">$2.29</p>
                    </div>
                  </div>
                  <div>
                    <span>2</span>
                  </div>
                  <div>
                    <span>$4.58</span>
                  </div>
                </div>
                <div className="grid grid-cols-6">
                  <form className="col-span-5 pr-4">
                    <input
                      type="text"
                      className="w-full py-2 px-4 bg-[#262837] text-gray-300 outline-none rounded-xl"
                      placeholder="Order description..."
                    />
                  </form>
                  <div className="text-center">
                    <button className="border border-red-500 p-2 rounded-lg">
                      <MdDeleteOutline className="text-red-500 text-xl" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl mb-6 border border-gray-500">
                <div className="grid grid-cols-6 mb-2">
                  <div className="col-span-4 flex items-center gap-3">
                    <img src="comida1.png" className="w-10 h-10 object-cover" />
                    <div>
                      <h5 className="text-sm">Spaicy seaso...</h5>
                      <p className="text-xs text-gray-500">$2.29</p>
                    </div>
                  </div>
                  <div>
                    <span>2</span>
                  </div>
                  <div>
                    <span>$4.58</span>
                  </div>
                </div>
                <div className="grid grid-cols-6">
                  <form className="col-span-5 pr-4">
                    <input
                      type="text"
                      className="w-full py-2 px-4 bg-[#262837] text-gray-300 outline-none rounded-xl"
                      placeholder="Order description..."
                    />
                  </form>
                  <div className="text-center">
                    <button className="border border-red-500 p-2 rounded-lg">
                      <MdDeleteOutline className="text-red-500 text-xl" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl mb-6 border border-gray-500">
                <div className="grid grid-cols-6 mb-2">
                  <div className="col-span-4 flex items-center gap-3">
                    <img src="comida1.png" className="w-10 h-10 object-cover" />
                    <div>
                      <h5 className="text-sm">Spaicy seaso...</h5>
                      <p className="text-xs text-gray-500">$2.29</p>
                    </div>
                  </div>
                  <div>
                    <span>2</span>
                  </div>
                  <div>
                    <span>$4.58</span>
                  </div>
                </div>
                <div className="grid grid-cols-6">
                  <form className="col-span-5 pr-4">
                    <input
                      type="text"
                      className="w-full py-2 px-4 bg-[#262837] text-gray-300 outline-none rounded-xl"
                      placeholder="Order description..."
                    />
                  </form>
                  <div className="text-center">
                    <button className="border border-red-500 p-2 rounded-lg">
                      <MdDeleteOutline className="text-red-500 text-xl" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-xl mb-6 border border-gray-500">
                <div className="grid grid-cols-6 mb-2">
                  <div className="col-span-4 flex items-center gap-3">
                    <img src="comida1.png" className="w-10 h-10 object-cover" />
                    <div>
                      <h5 className="text-sm">Spaicy seaso...</h5>
                      <p className="text-xs text-gray-500">$2.29</p>
                    </div>
                  </div>
                  <div>
                    <span>2</span>
                  </div>
                  <div>
                    <span>$4.58</span>
                  </div>
                </div>
                <div className="grid grid-cols-6">
                  <form className="col-span-5 pr-4">
                    <input
                      type="text"
                      className="w-full py-2 px-4 bg-[#262837] text-gray-300 outline-none rounded-xl"
                      placeholder="Order description..."
                    />
                  </form>
                  <div className="text-center">
                    <button className="border border-red-500 p-2 rounded-lg">
                      <MdDeleteOutline className="text-red-500 text-xl" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* submit payment */}
          <div className="absolute bottom-0 left-0 p-4 w-full">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400">Discount</span>
              <span>$0</span>
            </div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-gray-400">Subtotal</span>
              <span>$201.13</span>
            </div>
            <div>
              <button className="bg-[#ec7c6a] w-full py-2 px-4 rounded-lg">
                Continue to payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
