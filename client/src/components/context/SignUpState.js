import React, { useState } from "react";
import SignUpContext from "./SignUpContext";

const SignUpState = (props) => {
  const [signUpShow, setSignUpShow] = useState(false);
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowUpload, setIsShowUpload] = useState(false)

  const handleLoginClick = () => {
      setIsShowLogin((isShowLogin)=> !isShowLogin)
  }

  const handleRegisterClick = () => {
      setSignUpShow((signUpShow)=> !signUpShow)
  }

  const handleUploadClick = () => {
    setIsShowUpload((isShowUpload)=> !isShowUpload)
}
  return (
    <SignUpContext.Provider value={{ signUpShow, setSignUpShow, isShowLogin, setIsShowLogin, handleLoginClick, handleRegisterClick, handleUploadClick, isShowUpload }}>
      {props.children}
    </SignUpContext.Provider>
  );
};

export default SignUpState;
