"use client";
import React from "react";
import axios from "axios";

export default function Home() {
  const handleClick = async () => {
    alert("test success.check the console");

    const response = await axios.get("/api/testEndpt");
    console.log(response);
  };

  return (
    <div className="flex justify-center items-center">
      <button onClick={handleClick}>test</button>
    </div>
  );
}
