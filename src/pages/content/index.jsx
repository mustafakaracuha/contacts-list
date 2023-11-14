import React, {useState} from "react";

import List from "../../components/List";

import { BiSearch } from "react-icons/bi";

import MOCK_DATA from "../../Data/MOCK_DATA";

function index() {
  const [isSearch, isSetSearch] = useState(false)
  
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start pt-10 px-3 overflow-auto">
      <div className="w-full flex items-center  justify-between">
        <span></span>
        <h1 className="text-bold mt-2 ml-5 text-2xl font-bold animation-text">
          Contacts
        </h1>
        <BiSearch onClick={() => isSetSearch(!isSearch)} className="text-violet-500 mr-4 cursor-pointer animation-search" size={25}/>
      </div>
      <List data={MOCK_DATA} isSearch={isSearch}/>
    </div>
  );
}

export default index;
