"use client";

import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-center items-center h-[12vh] bg-gradient-to-r from-indigo-500 via-indigo-400 to-indigo-900">
      <div className="flex justify-between items-center w-[75%] h-full">
        <div className="flex">
          <div className="flex items-center w-[60px] h-[40px]">
            <button>hello world</button>
          </div>
          <div className="flex items-center w-[40px] h-[40px]">logo</div>
        </div>
        <div>hello world</div>
        <div>hello world</div>
      </div>
    </header>
  );
};
