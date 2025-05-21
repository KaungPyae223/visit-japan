import React from "react";
import { BiSearch } from "react-icons/bi";

const PackagesFilter = () => {
  return (
    <div
      style={backgroundImage}
      className="py-24 flex flex-row items-center justify-center"
    >
      <div className="bg-white p-6 pt-9">
        <p className="font-poppins text-center text-gray-800 text-4xl font-medium">
          Explore and Feel the Heritage of Japan
        </p>
        <p className="text-center mt-3 text-gray-800">
          日本の伝統を探求し、感じよう
        </p>
        <div className="mt-9  p-3 border-t border-t-gray-300 pt-6 flex flex-row items-end gap-3">
          <div>
            <p className="text-sm">🗺️ Destination ( 行き先 )</p>
            <input
              type="text"
              className="outline-none border border-gray-300 mt-1 p-2"
              placeholder="e.g., Tokyo, Kyoto"
            />
          </div>
          <div>
            <p className="text-sm">⏳ Duration ( 間隔 )</p>
            <input
              type="text"
              className="outline-none border border-gray-300 mt-1.5 p-2"
              placeholder="e.g., 7 days, 2 weeks"
            />
          </div>
          <div>
            <p className="text-sm">👥 Guests ( ゲスト )</p>
            <input
              type="text"
              className="outline-none h-10 border border-gray-300 mt-1.5 p-2"
               placeholder="e.g., 2 adults"
            />
          </div>
          <div className=" flex flex-co h-full">
            <div className="w-10 cursor-pointer h-10 mt-auto flex items-center justify-center bg-gray-700 text-white">
              <BiSearch className="size-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const backgroundImage = {
  backgroundImage: `url(https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export default PackagesFilter;
