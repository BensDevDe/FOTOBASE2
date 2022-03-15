import React, { useState } from "react";
import SignUpContext from "./FotoContext";
import axios from "axios";

const FotoState = (props) => {
  const [refreshPage, SetRefreshPage] = useState(false);
  return (
    <SignUpContext.Provider value={{ refreshPage, SetRefreshPage }}>
      {props.children}
    </SignUpContext.Provider>
  );
};

export default FotoState;
