import React, { useState, useEffect } from "react";
import SignUpContext from "./SignUpContext";
import axios from "axios";

const SignUpState = (props) => {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowUpload, setIsShowUpload] = useState(false);
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [result, setResult] = useState(null);
  const [isRegistered, SetIsRegistered] = useState(false);

  // function App() {
  //   const loginSession = JSON.parse(sessionStorage.getItem("login")) || {
  //   username: "",
  //   loggedIn: false,
  //   };

  //   const [username, setUsername] = useState(loginSession["username"]);
  //   const [loggedIn, setLoggedIn] = useState(loginSession["loggedIn"]);

  //   const handleLogin = (_username) => {
  //   if (_username) {
  //   setUsername(_username);
  //   setLoggedIn(true);
  //   } else {
  //   setUsername("");
  //   setLoggedIn(false);
  //   }
  //   };

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
  // const logoutHandler = async () => {
  //   setIsAuthenticated(false);
  //   const response = await axios.get("http://localhost:3001/user/logout", {
  //     withCredentials: true,
  //   });
  //   setResult(response.data);
  // };
  // const login = sessionStorage.getItem("login");
  // console.log("test:", login);
  console.log(result);
  const handleLoginClick = async () => {
    if (isAuthenticated) {
      setIsAuthenticated(false);

      // sessionStorage.setItem("login", "false");
      const response = await axios.get("http://localhost:3001/user/logout", {
        withCredentials: true,
      });
      // setResult(response.data);
      // sessionStorage.removeItem(result);
    } else {
      setIsShowLogin((isShowLogin) => !isShowLogin);
    }

    // if (!isAuthenticated) {
    //   setResult(null);
    // }
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

    // if (!isAuthenticated) {
    //   setResult(null);
    // }
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
        // logoutHandler,
        newUser,
        setNewUser,
        isRegistered,
        SetIsRegistered,
        handleLogout,
        // loggedIn,
        // setLoggedIn,
        // login
      }}
    >
      {props.children}
    </SignUpContext.Provider>
  );
};

export default SignUpState;
