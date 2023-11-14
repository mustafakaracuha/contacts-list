import React, { useState } from "react";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { BsPlus } from "react-icons/bs";

function index() {
  const [value, setValue] = useState(0);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 mx-auto rounded-full overflow-hidden mb-6 shadow-xl"
      style={{ width: 67 }}
    >
      <BottomNavigation
        showLabels
        value={value}
        className="!h-16"
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          className="!h-16"
          icon={<BsPlus className="text-violet-500" size={44} />}
        />
      </BottomNavigation>
    </div>
  );
}

export default index;
