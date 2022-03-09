import React, { useContext } from "react";
import SignUpContext from "./context/SignUpContext";



const SignUp = () => {
  const { signUpShow } = useContext(SignUpContext);

  return (
    <div className={`${!signUpShow ? "d-flex  p-2 active" : "show"}`}>
      <form className="col g-3">
        <div className="col-md-3">
          <label for="validationDefault01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            value="Mark"
            required
          />
        </div>
        <div className="col-md-3">
          <label for="validationDefault02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault02"
            value="Otto"
            required
          />
        </div>
        <div className="col-md-3">
          <label for="validationDefaultUsername" className="form-label">
            Email
          </label>
          <div className="input-group">
            <span className="input-group-text" id="inputGroupPrepend2">
              @
            </span>
            <input
              type="text"
              className="form-control"
              id="validationDefaultUsername"
              aria-describedby="inputGroupPrepend2"
              required
            />
          </div>
        </div>
        <div className="col-md-3">
          <label for="validationDefault03" className="form-label">
            Adress
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault03"
            required
          />
        </div>
        <div className="col-md-3">
          <label for="validationDefault04" className="form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault04"
            required
          />
        </div>
        <div className="col-md-3">
          <label for="validationDefault05" className="form-label">
            State
          </label>
          <select className="form-select" id="validationDefault05" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-3">
          <label for="validationDefault06" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault06"
            required
          />
        </div>
        <div className="col-md-3">
          <label for="validationDefault07" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault07"
            required
          />
        </div>
        <div className="col-2">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck2"
              required
            />
            <label className="form-check-label" for="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="col-2">
          <button class="btn btn-primary" type="submit">
            Register
          </button>
        </div>
      </form>
      {/* <div>
      <img src="/images/DSC_0737.jpg" className="img-fluid. max-width: 100%" alt="SignUp" />
      </div> */}
    </div>
  );
};

export default SignUp;
