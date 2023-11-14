import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";

import Avvvatars from "avvvatars-react";
import { AiFillStar } from "react-icons/ai";

import Tabs from "../../components/Tabs";
import BottomNavigation from "../../components/BottomNavigation";
import Letter from "../../components/List/Letter";
import Input from "../../components/Input";

function Index({ data, isSearch }) {
  const [value, setValue] = useState(0);
  const [filterLetter, setFilterLetter] = useState(null);
  const [searchText, setSearchText] = useState("");

  const filteredData = data
    .filter((item) => (value === 0 ? true : item.favorite))
    .filter(
      (item) =>
        (!filterLetter || item.first_name.charAt(0) === filterLetter) &&
        (!searchText ||
          item.first_name.toLowerCase().includes(searchText) ||
          item.last_name.toLowerCase().includes(searchText) ||
          item.email.toLowerCase().includes(searchText))
    );

  return (
    <>
      {isSearch && <Input isSearch={isSearch} setSearchText={setSearchText} />}
      <Tabs value={value} setValue={setValue} />
      <List
        dense
        className="w-full h-screen overflow-auto !mb-10 !pr-5 animation-list"
      >
        {filteredData.map((value) => (
          <ListItem key={value.id}>
            <button
              onClick={() => handleOpenDialog(value)}
              className="w-full h-10 rounded-2xl transition-all duration-200 py-10 px-4 text-left flex items-center justify-between hover:bg-violet-50"
            >
              <ListItemAvatar>
                <Avvvatars size={47} value={value.email} />
              </ListItemAvatar>
              <div className="w-full flex items-center">
                <p className="text-sm ml-1 font-bold">
                  {value.first_name + " " + value.last_name}
                </p>
              </div>
              {value.favorite && (
                <AiFillStar
                  className="text-amber-500 animation-fav"
                  size={23}
                />
              )}
            </button>
          </ListItem>
        ))}
      </List>
      <Letter filterLetter={filterLetter} setFilterLetter={setFilterLetter} />
      <BottomNavigation />
    </>
  );
}

export default Index;
