// import React from "react";
import * as React from "react";
import "./navbar.css";
import logo from "./logo.png";
import Login from "../Login/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Collapse } from "bootstrap";
import { useState } from "react";

function Navbar({ name }) {
  const [user, setUser] = useState(false);
  const [value, setValue] = React.useState("Security and help");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  // console.log(name);
  // const name = " ";
  // if(isUserLoggedIn){}

  // axios
  //   .get("http://localhost:5269/api/Auth/SignIn")
  //   .then(function (response) {
  //     console.log(response.nametag);
  //     // name = response.nametag;
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // console.log(isUserLoggedIn);
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid ">
          <a href="#" class="navbar-brand">
            <img src={logo} class="image" alt="E-consult" />
          </a>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav">
              <a href="#" class="nav-item nav-link active">
                FindDoctors
              </a>
              <a href="#" class="nav-item nav-link">
                VideoConsult
              </a>
              <a href="#" class="nav-item nav-link">
                Medicine
              </a>
            </div>

            <div class="navbar-nav ms-auto">
              <label style={{ marginRight: "20px" }}>
                {/* Security & Help */}
                <select value={value} onChange={handleChange}>
                  <option value="fruit">Data Security</option>

                  <option value="vegetable">Help</option>
                </select>
              </label>
              &nbsp; &nbsp; &nbsp;
              {/* {isUserLoggedIn && ( */}
              {name ? (
                <div onClick={() => setUser((prev) => !prev)}>
                  {name}
                  {user && (
                    <div className="collapsable">
                      <button
                        className="btn"
                        style={{ color: "white" }}
                        onClick={() => navigate("/")}
                      >
                        Logout
                      </button>
                      <button className="btn" style={{ color: "white" }}>
                        UserProfile
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  type="button"
                  class="Login-btn btn btn-primary"
                  onClick={() => navigate("/signin")}
                >
                  Login / SignUp
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
