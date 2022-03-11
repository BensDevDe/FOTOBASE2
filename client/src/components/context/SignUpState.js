import React, { useState } from "react";
import SignUpContext from "./SignUpContext";
import axios from "axios";

const SignUpState = (props) => {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowUpload, setIsShowUpload] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [result, setResult] = useState(null);

  const logoutHandler = async () => {
    setIsAuthenticated(false);
    const resp = await axios.get("http://localhost:3001/users/logout", {
      withCredentials: true,
    });
    setResult(resp.data);
  };

  const handleLoginClick = () => {
    if (isAuthenticated) {
      logoutHandler();
    } else {
      setIsShowLogin((isShowLogin) => !isShowLogin);
    }
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
        result,
        setResult,
      }}
    >
      {props.children}
    </SignUpContext.Provider>
  );
};

export default SignUpState;
