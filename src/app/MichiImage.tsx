"use client"; // this is a client component

import React from "react";
import { useState } from "react";
import MichisList from "./MichisList";

const MichiImage = ({ data }) => {
  const [favorite, setFavorite] = useState(false);
  const ah = favorite === true ? "favorito" : "umm";
  console.log(data);
  return (
    <div className="w-full rounded">
      {ah}
      <img
        src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
        alt="image"
      />

      <button className=" " onClick={() => setFavorite(!favorite)}>
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
      </button>
    </div>
  );
};

// This gets called on every request
export async function getServerSideProps() {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10`
  );
  const data = await res.json();
  return data;
}

export default MichiImage;
