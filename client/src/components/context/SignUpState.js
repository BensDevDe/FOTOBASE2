import React, { useState } from "react";
import SignUpContext from "./SignUpContext";

const SignUpState = (props) => {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowUpload, setIsShowUpload] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  const handleUploadClick = () => {
    setIsShowUpload((isShowUpload) => !isShowUpload);
  };
  return (
    <SignUpContext.Provider
      value={{
        isShowLogin,
        setIsShowLogin,
        handleLoginClick,
        handleUploadClick,
        isShowUpload,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {props.children}
    </SignUpContext.Provider>
  );
};

export default SignUpState;
