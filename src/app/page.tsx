import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import MichiImage from "./MichiImage";
import MichisList from "./MichisList";

const inter = Inter({ subsets: ["latin"] });
// create a componet for the image

export default function Home() {
  return (
    <div className=" bg-gray-200 p-14">
      <div className=" bg-white relative aspect-ratio-375/667  rounded-lg shadow-lg p-5">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-3">
            <h1 className="text-xl font-bold">Michis Breeds</h1>
          </div>
          <div className="w-full md:w-1/2 p-3 flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="red"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="red"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                fill="red"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-wrap p-5">
          <div className="w-full flex">
            <input
              type="text"
              className="bg-gray-200 p-1 w-3/4 border border-gray-400"
              placeholder="Search..."
            />
            <button className=" bg-blue-500 text-white p-2  hover:bg-blue-600 w-1/4">
              Search
            </button>
          </div>
        </div>

        <div className="flex flex-wrap p-5">
          <div className="container grid grid-cols-3 gap-2 mx-auto">
            <div className="w-full rounded">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="image"
              />
            </div>
            <div className="w-full rounded">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="image"
              />
            </div>
            <div className="w-full rounded">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="image"
              />
            </div>
            <div className="w-full rounded">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="image"
              />
            </div>
            <div className="w-full rounded">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="image"
              />
            </div>
            <div className="w-full rounded">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="divide-y divide-solid">
          <div></div>
          <div></div>
        </div>
        <div className="flex flex-wrap p-5">
          <h1 className="text-xl font-bold">Favoritos</h1>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="red"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="red"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              fill="red"
            />
          </svg>
        </div>
        <div className="flex flex-wrap p-5">
          <div className="container grid grid-cols-3 gap-2 mx-auto">
            <MichiImage />
            <MichiImage />
          </div>
        </div>
      </div>
    </div>
  );
}
