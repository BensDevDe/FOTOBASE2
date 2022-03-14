import React, { useState, useEffect } from "react";
import SignUpContext from "./SignUpContext";
import axios from "axios";

const SignUpState = (props) => {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowUpload, setIsShowUpload] = useState(false);

  const [isRegistered, SetIsRegistered] = useState(false);

  const [newUser, setNewUser] = useState({
    firstName: "-",
    lastName: "",
    email: "",
    street: "",
    city: "",
    postcode: "",
    country: "",
    birthday: "",
    password: "",
  });
  const loginSession = JSON.parse(sessionStorage.getItem("login")) || {
    isAuthenticated: false,
  };

  const resultSession = JSON.parse(sessionStorage.getItem("result")) || {
    result: null,
  };

  const [isAuthenticated, setIsAuthenticated] = useState(
    loginSession["isAuthenticated"]
  );
  const [result, setResult] = useState(resultSession["result"]);

  console.log(result);
  const handleLoginClick = async () => {
    if (isAuthenticated) {
      setIsAuthenticated(false);

      const response = await axios.get("http://localhost:3001/user/logout", {
        withCredentials: true,
      });
    } else {
      setIsShowLogin((isShowLogin) => !isShowLogin);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.get("http://localhost:3001/user/logout", {
        withCredentials: true,
      });
      setIsAuthenticated(false);
      sessionStorage.removeItem(result);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUploadClick = () => {
    if (isAuthenticated) {
      setIsShowUpload((isShowUpload) => !isShowUpload);
    } else {
      return;
    }
  };

  useEffect(() => {
    sessionStorage.setItem(
      "login",
      JSON.stringify({ isAuthenticated: isAuthenticated })
    );
    sessionStorage.setItem("result", JSON.stringify({ result: result }));
  }, [isAuthenticated]);
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

        newUser,
        setNewUser,
        isRegistered,
        SetIsRegistered,
        handleLogout,
      }}
    >
      {props.children}
    </SignUpContext.Provider>
  );
};

export default SignUpState;
