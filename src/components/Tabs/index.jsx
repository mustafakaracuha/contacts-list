import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function index({value, setValue}) {
  return (
    <div className="mb-3 w-full flex  bg-gray-100 mt-8 py-1 items-center justify-center rounded-full animation-slide">
      <Tabs
        onChange={(event,newValue)=> setValue(newValue)}
        value={value}
        aria-label="basic tabs example"
        className="!h-14 md:!h-14 max-sm:!h-14"
      >
        <Tab label="All" className="!h-12 md:!h-12 lg:!mr-[4rem] !mt-1 max-sm:!h-5 max-lg:!mr-[4rem] max-sm:!mr-[4rem] max-md:!mr-[4.5em]" />
        <Tab label="Favorite" className="!h-12 md:!h-12 !mt-1 max-sm:!h-5"  />
      </Tabs>
    </div>
  );
}

export default index;
