import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import SignUpContext from "./context/SignUpContext";
import FotoContext from "./context/FotoContext";
import { NavLink } from "react-router-dom";
import Fotos from "./Fotos";

//Foto Upload

const Upload = () => {
  const { handleUploadClick, isShowUpload, isAuthenticated } =
    useContext(SignUpContext);

  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [comment, setComment] = useState("");
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeDate = (e) => {
    setDate(e.target.value);
  };
  const changeKeywords = (e) => {
    setKeywords(e.target.value);
  };
  const changeComment = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("avatar", file);
    data.append("title", title);
    data.append("date", date);
    data.append("comment", comment);
    data.append("keywords", keywords);

    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    };

    axios
      .post("http://localhost:3001/user/upload", data, config)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  // get fotos

  const [fotos, setFotos] = useState([]);
  const [page, setPage] = useState(1);

  const getFotos = async (page = 1, limit = 300) => {
    const result = await axios.get(
      `http://localhost:3001/user/fotos?page=${page}&limit=${limit}`
    );
    console.log(result);

    if (result) {
      setFotos(result.data.fotoList);
    }
  };

  const sortFotosA = async (page = 1, limit = 300) => {
    const result = await axios.get(
      `http://localhost:3001/user/fotos/sortA?page=${page}&limit=${limit}`
    );
    if (result) {
      setFotos(result.data.fotoList);
    }
  };

  const sortFotosD = async (page = 1, limit = 300) => {
    const result = await axios.get(
      `http://localhost:3001/user/fotos/sortD?page=${page}&limit=${limit}`
    );
    if (result) {
      setFotos(result.data.fotoList);
    }
  };

  useEffect(() => {
    getFotos();
  }, []);

  useEffect(() => {
    getFotos(page);
  }, [page]);

  const next = () => {
    const nextPage = page + 1;
    setPage(nextPage);
  };

  const previous = () => {
    const previousPage = page - 1;
    if (previousPage < 1) {
      setPage(1);
    } else {
      setPage(previousPage);
    }
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Foto Collection
                  </a>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-secondary"
                    onClick={() => handleUploadClick()}
                  >
                    Upload Foto
                  </button>
                </li>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle ml-8"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Filter
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Sort
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <button className="dropdown-item" onClick={sortFotosA}>
                        Ascending Title
                      </button>
                    </li>
                    <li>
                      <button
                        className="dropdown-item"
                        href="#"
                        onClick={sortFotosD}
                      >
                        Descending Title
                      </button>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        By Date
                      </a>
                    </li>
                  </ul>
                </div>
              </ul>
            </div>
          </div>
        </nav>

        <div
          className={`${isShowUpload ? "wrapper1 active" : "wrapper1 show"}`}
        >
          <form onSubmit={handleSubmit}>
            <div className="wrapper1">
              <div className="container1">
                <h1 className="upload-head">Upload a foto</h1>
                <div className="upload-container1">
                  <div className="border-container1">
                    <div className="icons fa-4x">
                      <i
                        className="fas fa-file-image"
                        data-fa-transform="shrink-3 down-2 left-6 rotate--45"
                      ></i>
                      <i
                        className="fas fa-file-alt"
                        data-fa-transform="shrink-2 up-4"
                      ></i>
                      <i
                        className="fas fa-file-pdf"
                        data-fa-transform="shrink-3 down-2 right-6 rotate-45"
                      ></i>
                    </div>
                    <div>
                      <label htmlFor="title">Title</label>
                      <input type="text" name="title" onChange={changeTitle} />
                    </div>
                    <div>
                      <label htmlFor="date">Date</label>
                      <input type="date" name="date" onChange={changeDate} />
                    </div>
                    <div>
                      <label htmlFor="keywords">Keywords</label>
                      <input
                        type="text"
                        name="keywords"
                        onChange={changeKeywords}
                      />
                    </div>
                    <div>
                      <label htmlFor="comment">Comment</label>
                      <input
                        type="text"
                        name="comment"
                        onChange={changeComment}
                      />
                    </div>
                    <input
                      type="file"
                      id="file"
                      name="avatar"
                      onChange={(e) => {
                        const file = e.target.files[0];
                        setFile(file);
                        console.log(file);
                      }}
                    />
                    <input type="submit" className="warning" value="Upload" />
                    <p>Drag and drop foto here your computer.</p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <div>
          <h1>Your Foto Collection</h1>
        </div>

        <div className="d-flex md5 flex-wrap justify-content-start">
          {fotos.length > 0 &&
            fotos.map((item, index) => {
              return (
                <div>
                  <div key={index}>
                    {isAuthenticated ? <Fotos fotos={item} /> : "Please login!"}
                  </div>
                </div>
              );
            })}
        </div>

        <div className="row container fixed-bottom">
          <div className="col">
            <p>
              {" "}
              <b> page : {page} </b>
            </p>
            <button onClick={previous} className="btn btn-primary">
              Previous
            </button>{" "}
            &nbsp;&nbsp;
            <button
              onClick={next}
              className="btn btn-primary"
              disabled={fotos.length < 1}
            >
              Next
            </button>
            <p>{fotos.length} fotos found</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
