"use client";

import { useEffect, useState } from "react";
import { lilita_one } from "../layout";
import { twMerge } from "tailwind-merge";
import NewComponent from "../components/NewComponent";
import { motion } from "framer-motion";
import { Select, SelectItem } from "@tremor/react";

const defaultNews = [
  {
    image:
      "https://media-manager.noticiasaominuto.com/1920/naom_64706394a7c0a.jpg",
    title: "PSG - Gonçalo Ramos",
    date: new Date(),
    clubs: [
      {
        name: "Benfica",
        icon: "https://cdn.icon-icons.com/icons2/1059/PNG/256/Benfica_icon-icons.com_76754.png",
      },
      {
        name: "PSG",
        icon: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png",
      },
    ],
    description:
      "Gonçalo Ramos muito próximo de ParisGonçalo Ramos muito próximo de ParisGonçalo Ramos muito próximo de ParisGonçalo Ramos muito próximo de ParisGonçalo Ramos muito próximo de Paris Gonçalo Ramos muito próximo de ParGonçalo Ramos muito próximo de Par Gonçalo Ramos muito próximo de Par Gonçalo Ramos muito próximo de Par Gonçalo Ramos muito próximo de Par vGonçalo Ramos muito próximo de ParisGonçalo Ramos Gonçalo Ramos muito próximo de ParisGonçalo Ramos ",
  },
  {
    image:
      "https://static.globalnoticias.pt/oj/image.jpg?brand=OJ&type=generate&guid=e34bd3ef-a5d2-4697-8694-7d7f7e791d30&w=768&h=512&t=20230804213255",
    title: "PSG - Gonçalo Ramos",
    date: new Date(),
    description: "Gonçalo Ramos muito próximo de Paris",
    clubs: [
      {
        name: "Benfica",
        icon: "https://cdn.icon-icons.com/icons2/1059/PNG/256/Benfica_icon-icons.com_76754.png",
      },
      {
        name: "PSG",
        icon: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png",
      },
    ],
  },
  {
    image:
      "https://media-manager.noticiasaominuto.com/1920/naom_64706394a7c0a.jpg",
    title: "PSG - Gonçalo Ramos",
    date: new Date(),
    description: "Gonçalo Ramos muito próximo de Paris",
    clubs: [
      {
        name: "Benfica",
        icon: "https://cdn.icon-icons.com/icons2/1059/PNG/256/Benfica_icon-icons.com_76754.png",
      },
      {
        name: "PSG",
        icon: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png",
      },
    ],
  },
  {
    image:
      "https://media-manager.noticiasaominuto.com/1920/naom_64706394a7c0a.jpg",
    title: "PSG - Gonçalo Ramos",
    date: new Date(),
    clubs: [
      {
        name: "Benfica",
        icon: "https://cdn.icon-icons.com/icons2/1059/PNG/256/Benfica_icon-icons.com_76754.png",
      },
      {
        name: "PSG",
        icon: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png",
      },
    ],
    description: "Gonçalo Ramos muito próximo de Paris",
  },
  {
    image:
      "https://media-manager.noticiasaominuto.com/1920/naom_64706394a7c0a.jpg",
    title: "PSG - Gonçalo Ramos",
    date: new Date(),
    clubs: [
      {
        name: "Benfica",
        icon: "https://cdn.icon-icons.com/icons2/1059/PNG/256/Benfica_icon-icons.com_76754.png",
      },
      {
        name: "PSG",
        icon: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png",
      },
    ],
    description: "Gonçalo Ramos muito próximo de Paris",
  },
  {
    image:
      "https://media-manager.noticiasaominuto.com/1920/naom_64706394a7c0a.jpg",
    title: "PSG - Gonçalo Ramos",
    date: new Date(),
    clubs: [
      {
        name: "Benfica",
        icon: "https://cdn.icon-icons.com/icons2/1059/PNG/256/Benfica_icon-icons.com_76754.png",
      },
      {
        name: "PSG",
        icon: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Paris_Saint-Germain_F.C..svg/1200px-Paris_Saint-Germain_F.C..svg.png",
      },
    ],
    description: "Gonçalo Ramos muito próximo de Paris",
  },
];

type NewsProps = {
  id: number;
  title: string;
  description: string;
  image: string;
  created_at: string | Date | any;
  users: {
    full_name: any;
  };
  club: {
    name: any;
    icon: any;
  }[];
};

export default function News({ newsPosts }: { newsPosts: NewsProps[] }) {
  const [news, setNews] = useState(newsPosts);
  const [selectedFilter, setSelectedFilter] = useState<string>("recent");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (!search) {
      setNews(newsPosts);
      return;
    }
    const newsItems = newsPosts.filter((newItem) =>
      newItem.title.toLowerCase().includes(search.toLowerCase())
    );
    setNews(newsItems);
  }, [search]);

  return (
    <div className="mx-auto flex flex-col h-fit w-full  px-5 py-3 text-zinc-200 lg:max-w-[90%] xl:max-w-[80%] 2xl:max-w-[80%] mt-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className=" flex flex-col"
        >
          <p className="text-sm text-blue-600 ">Latest News</p>
          <p className={`${lilita_one.className} text-4xl mt-2`}>
            Recent News Articles
          </p>
          <p className="text-zinc-400 text-sm mt-1 max-w-[400px]">
            This is the latest news about your favourite sport, the king sport,
            Football and your favourite teams.
          </p>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 mr-3 mt-3 md:mt-0"
        >
          <button
            onClick={() => setSelectedFilter("recent")}
            className={twMerge(
              ` text-blue-600 text-sm px-4 py-1.5 rounded-[4px] border border-zinc-700`,
              selectedFilter === "recent" ? "bg-zinc-200" : ""
            )}
          >
            Most recent
          </button>
          <button
            onClick={() => setSelectedFilter("popular")}
            className={twMerge(
              ` text-blue-600 text-sm px-4 py-1.5 rounded-[4px] border border-zinc-700`,
              selectedFilter === "popular" ? "bg-zinc-200" : ""
            )}
          >
            Most popular
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full flex mt-2 justify-end"
      >
        <div className="relative w-full md:w-[300px] flex justify-end overflow-hidden">
          <input
            autoComplete="off"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="w-full rounded-md border border-form-stroke p-1.5 pl-12 mr-3 text-black  text-sm placeholder-[#929DA7] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-[#F5F7FD]"
          />
          <input
            type="text"
            autoComplete="on"
            className="bg-red-500 absolute right-[-4000px]"
          />

          <span className="absolute top-1/2 left-4 -translate-y-1/2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.8">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.72039 12.8864C4.50179 12.105 5.5616 11.666 6.66667 11.666H13.3333C14.4384 11.666 15.4982 12.105 16.2796 12.8864C17.061 13.6678 17.5 14.7276 17.5 15.8327V17.4993C17.5 17.9596 17.1269 18.3327 16.6667 18.3327C16.2064 18.3327 15.8333 17.9596 15.8333 17.4993V15.8327C15.8333 15.1696 15.5699 14.5338 15.1011 14.0649C14.6323 13.5961 13.9964 13.3327 13.3333 13.3327H6.66667C6.00363 13.3327 5.36774 13.5961 4.8989 14.0649C4.43006 14.5338 4.16667 15.1696 4.16667 15.8327V17.4993C4.16667 17.9596 3.79357 18.3327 3.33333 18.3327C2.8731 18.3327 2.5 17.9596 2.5 17.4993V15.8327C2.5 14.7276 2.93899 13.6678 3.72039 12.8864Z"
                  fill="#637381"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0007 3.33268C8.61994 3.33268 7.50065 4.45197 7.50065 5.83268C7.50065 7.21339 8.61994 8.33268 10.0007 8.33268C11.3814 8.33268 12.5006 7.21339 12.5006 5.83268C12.5006 4.45197 11.3814 3.33268 10.0007 3.33268ZM5.83398 5.83268C5.83398 3.5315 7.69946 1.66602 10.0007 1.66602C12.3018 1.66602 14.1673 3.5315 14.1673 5.83268C14.1673 8.13387 12.3018 9.99935 10.0007 9.99935C7.69946 9.99935 5.83398 8.13387 5.83398 5.83268Z"
                  fill="#637381"
                ></path>
              </g>
            </svg>
          </span>
        </div>
      </motion.div>
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-4 grid grid-cols-1 xl:grid-cols-2 gap-4 overflow-y-auto max-h-[70vh] scrollbar-thin pr-3 scrollbar-thumb-blue-500 "
      >
        {news.map((item, idx) => (
          <NewComponent key={idx} item={item} />
        ))}
      </motion.div>
    </div>
  );
}
