"use client";

import { lilita_one } from "../layout";

export default function NewComponent({ item }: any) {
  return (
    <div className="flex flex-col md:flex-row relative items-center w-full md:h-[190px] cursor-pointer hover:bg-zinc-200 hover:text-zinc-700 rounded-md transition-all duration-300 border shadow-xl border-zinc-700">
      <div className="flex justify-center items-center w-full md:w-[270px] mt-1">
        {" "}
        <img
          src={item.image}
          className="w-full object-contain pl-2 flex text-left "
        />
      </div>
      <div className="relative ml-3 px-2 py-3 md:py-0 overflow-hidden w-full flex flex-col ">
        <div className="flex justify-between items-center w-full">
          <p className={`${lilita_one.className} text-lg`}>{item.title}</p>

          <p className="text-[10px] pr-2">
            {new Date(item.created_at).toDateString()}
          </p>
        </div>
        <div className="flex items-center text-xs mt-1 gap-2">
          {item?.club?.map((clubItem: any, idx: number) => (
            <div key={idx} className="flex items-center space-x-1">
              <img src={clubItem?.icon} className="w-4 h-4" />
              <p>{clubItem?.name}</p>
            </div>
          ))}
        </div>
        <p className="text-xs mt-2 text-zinc-400 break-all overflow-y-auto nax-h-[150px] md:max-h-[100px] scrollbar-thin scrollbar-thumb-purple-700 pr-2">
          {item.description}
        </p>
      </div>

      <a className="absolute bottom-1.5 underline right-4 text-xs flex items-center ">
        <p>Read More</p>{" "}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#ffffff"
          className="h-3 w-3 ml-1"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              className="hover:text-zinc-300"
              d="M4 12H20M20 12L16 8M20 12L16 16"
              stroke="#ffffff"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{" "}
          </g>
        </svg>
      </a>
    </div>
  );
}
