import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SignUpContext from "./context/SignUpContext";


const SignUp = () => {
  const { isAuthenticated,
    setIsAuthenticated } =
  useContext(SignUpContext);


  const [newUser, setNewUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    postcode: "",
    country: "",
    birthday: "",

    password: "",
  });

  const [result, setResult] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newUser);
    try {
      const response = await axios.post(
        "http://localhost:3001/user/register",
        newUser,
        { withCredentials: true }
      );
      setResult(response.data);
      setIsAuthenticated(true);
    } catch (err) {
      console.log(err.message);
      setResult(err.message);
    }
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/");
  }, [isAuthenticated]);

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Andorra",
    "Angola",
    "Anguilla",
    "Antarctica",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegowina",
    "Botswana",
    "Bouvet Island",
    "Brazil",
    "British Indian Ocean Territory",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Christmas Island",
    "Cocos (Keeling) Islands",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, the Democratic Republic of the",
    "Cook Islands",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia (Hrvatska)",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Falkland Islands (Malvinas)",
    "Faroe Islands",
    "Fiji",
    "Finland",
    "France",
    "France Metropolitan",
    "French Guiana",
    "French Polynesia",
    "French Southern Territories",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Greenland",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Heard and Mc Donald Islands",
    "Holy See (Vatican City State)",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran (Islamic Republic of)",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, Democratic People's Republic of",
    "Korea, Republic of",
    "Kuwait",
    "Kyrgyzstan",
    "Lao, People's Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libyan Arab Jamahiriya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia, The Former Yugoslav Republic of",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Micronesia, Federated States of",
    "Moldova, Republic of",
    "Monaco",
    "Mongolia",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "Netherlands Antilles",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "Norfolk Island",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Pitcairn",
    "Poland",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia (Slovak Republic)",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Georgia and the South Sandwich Islands",
    "Spain",
    "Sri Lanka",
    "St. Helena",
    "St. Pierre and Miquelon",
    "Sudan",
    "Suriname",
    "Svalbard and Jan Mayen Islands",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Taiwan, Province of China",
    "Tajikistan",
    "Tanzania, United Republic of",
    "Thailand",
    "Togo",
    "Tokelau",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos Islands",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "United States Minor Outlying Islands",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Virgin Islands (British)",
    "Virgin Islands (U.S.)",
    "Wallis and Futuna Islands",
    "Western Sahara",
    "Yemen",
    "Yugoslavia",
    "Zambia",
    "Zimbabwe",
  ];

  return (
    <div >
      <form className="col g-3" onSubmit={handleSubmit}>
        <div className="col-md-3">
          <label for="validationDefault01" className="form-label">
            First name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault01"
            value={newUser.firstName}
            required
            onChange={(e) =>
              setNewUser({ ...newUser, firstName: e.target.value })
            }
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
            value={newUser.lastName}
            required
            onChange={(e) =>
              setNewUser({ ...newUser, lastName: e.target.value })
            }
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
              // required
              value={newUser.email}
              onChange={(e) =>
                setNewUser({ ...newUser, email: e.target.value })
              }
            />
          </div>
        </div>
        <div className="col-md-3">
          <label for="validationDefault02" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault02"
            value={newUser.street}
            required
            onChange={(e) => setNewUser({ ...newUser, street: e.target.value })}
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
            value={newUser.city}
            onChange={(e) => setNewUser({ ...newUser, city: e.target.value })}
          />
        </div>
        <div className="col-md-3">
          <label for="validationDefault05" className="form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault05"
            required
            value={newUser.postcode}
            onChange={(e) =>
              setNewUser({ ...newUser, postcode: e.target.value })
            }
          />
        </div>
        <div className="col-md-3">
          <label for="validationDefault06" className="form-label">
            State
          </label>
          <select
            className="form-select"
            id="validationDefault06"
            required
            value={newUser.country}
            onChange={(e) =>
              setNewUser({ ...newUser, country: e.target.value })
            }
          >
            <option selected disabled value="">
              Choose...
            </option>
            {countries.map((option) => (
              <option>{option}</option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <label for="validationDefault07" className="form-label">
            Birthday
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault07"
            required
            value={newUser.birthday}
            onChange={(e) =>
              setNewUser({ ...newUser, birthday: e.target.value })
            }
          />
        </div>

        <div className="col-md-3">
          <label for="validationDefault08" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="validationDefault08"
            required
            value={newUser.password}
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
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
