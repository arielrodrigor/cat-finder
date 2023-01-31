"use client"; // this is a client component

import React from "react";
import { useState } from "react";

const MichisList = async () => {
  //make a get call with token
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=10`
  );
  const data = await res.json();
  return data;
};

export default MichisList;
