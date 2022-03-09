import React, { useContext } from "react";
import SignUpContext from "./context/SignUpContext";
import { NavLink } from "react-router-dom";

const Fotos = () => {
  const { handleUploadClick, isShowUpload } = useContext(SignUpContext);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Foto Collection
                </a>
              </li>
              <li class="nav-item">
                <button class="nav-link" onClick={() => handleUploadClick()}>
                  Upload Foto
                </button>
              </li>
              <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Filter
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Sort 
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
            </ul>
          </div>
        </div>
      </nav>

      <div className={`${isShowUpload ? "wrapper1 active" : "wrapper1 show"}`}>
        <div class="wrapper1">
          <div class="container1">
            <h1 className="upload-head">Upload a file</h1>
            <div class="upload-container1">
              <div class="border-container1">
                <div class="icons fa-4x">
                  <i
                    class="fas fa-file-image"
                    data-fa-transform="shrink-3 down-2 left-6 rotate--45"
                  ></i>
                  <i
                    class="fas fa-file-alt"
                    data-fa-transform="shrink-2 up-4"
                  ></i>
                  <i
                    class="fas fa-file-pdf"
                    data-fa-transform="shrink-3 down-2 right-6 rotate-45"
                  ></i>
                </div>
                <input type="file" id="file-upload" />
                <p>
                  Drag and drop files here, or
                  <a href="#" id="file-browser">
                    browse
                  </a>{" "}
                  your computer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotos;
