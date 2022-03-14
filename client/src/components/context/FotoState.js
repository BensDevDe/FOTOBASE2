import React, { useState } from "react";
import SignUpContext from "./FotoContext";
import axios from "axios";

const FotoState = (props) => {
  const [isSortA, SetIsSortA] = useState(false);

  const handleSortA = () => {
    SetIsSortA((isSortA) => !isSortA);
  };

  return (
    <SignUpContext.Provider
      value={{
        isSortA,
        SetIsSortA,
        handleSortA,
      }}
    >
      {props.children}
    </SignUpContext.Provider>
  );
};

export default FotoState;
