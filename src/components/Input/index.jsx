import React from "react";

function index({ isSearch, setSearchText }) {
  return (
    <input
      onChange={(e) => setSearchText(e.target.value.toLowerCase())}
      placeholder="Search"
      className={
        isSearch
          ? "w-full h-24 animation-slide-input px-10 mt-5 -mb-4 text-lg font-medium rounded-full border-none outline-none bg-gray-100 text-gray-400 placeholder:text-gray-400"
          : "w-full h-24 animation-out-slide px-10 mt-5 text-lg font-medium rounded-full border-none outline-none bg-gray-100 text-gray-400 placeholder:text-gray-400"
      }
    />
  );
}

export default index;
