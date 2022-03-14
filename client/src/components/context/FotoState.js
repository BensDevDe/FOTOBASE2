import React, { useState } from "react";
import SignUpContext from "./FotoContext";
import axios from "axios";

const FotoState = (props) => {
  return (
    <SignUpContext.Provider value={{}}>{props.children}</SignUpContext.Provider>
  );
};

export default FotoState;
