import React, { useContext, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import SignUpContext from "./context/SignUpContext";

const Navbar = () => {
  const { handleLoginClick, isShowLogin, setIsShowLogin } =
    useContext(SignUpContext);

  const drawerRef = useRef(null);

  useEffect(() => {
    const closeDrawer = (event) => {
      if (drawerRef.current && drawerRef.current.contains(event.target)) {
        return;
      }
      setIsShowLogin(false);
    };
    document.addEventListener("mousedown", closeDrawer);
    return () => document.removeEventListener("mousedown", closeDrawer);
  });

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
          <form className="p-3 mt-3">
            <div className="form-field d-flex align-items-center">
              {" "}
              <span className="far fa-user"></span>{" "}
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Username"
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
              />{" "}
            </div>{" "}
            <button className="btn mt-3">Login</button>
          </form>
          <div className="text-center fs-6">
            {" "}
            <a href="#">Forget password?</a> or <a href="#">Sign up</a>{" "}
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
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => handleLoginClick()}
                  >
                    Sign In
                  </a>
                </li>
                <li className="nav-item">
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
                      <NavLink className="dropdown-item" to="/fotos">
                        Foto Collections
                      </NavLink>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Upload Foto
                      </a>
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
