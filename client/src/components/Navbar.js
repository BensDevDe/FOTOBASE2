import React, { useContext, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import axios from "axios";

import SignUpContext from "./context/SignUpContext";
import FotoContext from "./context/FotoContext";
const Navbar = () => {
  const {
    handleLoginClick,
    isShowLogin,
    isAuthenticated,
    setIsAuthenticated,
    setResult,
    setIsShowLogin,
    result,
    newUser,
    setNewUser,
    handleUploadClick,
    handleLogout,
    isRegistered, SetIsRegistered
  } = useContext(SignUpContext);

  const { handleFotoClick } = useContext(FotoContext);

  // const drawerRef = useRef(null);

  // useEffect(() => {
  //   const closeDrawer = (event) => {
  //     if (drawerRef.current && drawerRef.current.contains(event.target)) {
  //       return;
  //     }
  //     setIsShowLogin(false);
  //   };
  //   document.addEventListener("mousedown", closeDrawer);
  //   return () => document.removeEventListener("mousedown", closeDrawer);
  // });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/user/login",
        newUser,
        { withCredentials: true }
      );
      setResult(response.data);
      setIsShowLogin((isShowLogin) => !isShowLogin);
      if (response.data) {
        setIsAuthenticated(true);
        // localStorage.setItem("login", "true");
      }
    } catch (err) {
      console.log(err.msg);
      setResult(err.msg);
    }
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  console.log(isAuthenticated);
  console.log(result);

  const sessionResult = JSON.parse(sessionStorage.getItem("result"));

  // console.log(sessionResult.result.db_user.name.firstName);

  return (
    <div>
      <div className={`${isShowLogin ? "wrapper active" : "wrapper show"}`}>
        <div>
          <div className="logo">
            {" "}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyBaBeWUm0iqq5coqOVQDlRKVjJ8D9wEiNqDza-ukz1IrFQXSY8-aXHOtwVtmFvp_nYZQ&usqp=CAU"
              alt=""
            />{" "}
          </div>
          <div className="text-center mt-4 name"> FOTOBASE </div>
          <form className="p-3 mt-3" onSubmit={handleSubmit}>
            <div className="form-field d-flex align-items-center">
              {" "}
              <span className="far fa-user"></span>{" "}
              <input
                type="email"
                name="userName"
                id="userName"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) =>
                  setNewUser({ ...newUser, email: e.target.value })
                }
              />{" "}
            </div>
            <div className="form-field d-flex align-items-center">
              {" "}
              <span className="fas fa-key"></span>{" "}
              <input
                type="password"
                name="password"
                id="pwd"
                placeholder="Password"
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
              />{" "}
            </div>{" "}
            <button className="btn mt-3" type="submit" value="Sign In">
              {" "}
              Login{" "}
            </button>
          </form>
          <div className="text-center fs-6">
            {" "}
            <Link to="/signup">here</Link>{" "}
          </div>
        </div>
      </div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              FOTOBASE
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  {isAuthenticated ? <a
                    className="nav-link"
                    href="#"
                    onClick={() => handleLogout()}
                  > Logout
                   
                  </a> : <a
                    className="nav-link"
                    href="#"
                    onClick={() => handleLoginClick()}
                  > Sign In
                   
                  </a>

                  }
                  
                  
                </li>
                <li
                  className={`${
                 
                    isAuthenticated
                      ? "nav-item hide_sign_up"
                      : "nav-item show_sign_up"
                  }`}
                >
                  <NavLink className="nav-link" to="/signup">
                    Sign Up
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Menu
                  </a>

                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink className="dropdown-item" to="/upload">
                        Foto Collections
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="dropdown-item"
                        to="/upload"
                        onClick={() => handleUploadClick()}
                      >
                        Upload Foto
                      </NavLink>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Account
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    {isAuthenticated
                      ? `Welcome ${
                          sessionResult.result
                            ? sessionResult.result.db_user.name.firstName
                            : ""
                        }`
                      : ""}
                  </NavLink>
                </li>
                
                    {isRegistered
                      ? <li className="nav-item">
                      <span><a
                        className="nav-link"
                        href="#"
                        onClick={() => handleLoginClick()}
                      >  Registration successfull, please <span className="registration_text">Sign In</span>
                      
                       
                      </a> </span></li>
                      : "" }
                  
              

              </ul>

              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
