import React from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();

  // const state = { isLoggedIn: false };

  // const [state,setState] = useState({ isLoggedIn: false});

  const [Email, SetEmail] = useState("");
  const [Password, SetPassword] = useState("");

  const handleEmailChange = (value) => {
    // if(!value) alert("Please Enter an Email.")
    SetEmail(value);
  };
  const handlePasswordChange = (value) => {
    // if(!value) alert("Please Enter Password.")
    SetPassword(value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!Email || !Password) {
      swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Some fields are empty",
      });

      return;
    }

    const data = {
      email: Email,
      password: Password,
    };

    const url = "http://localhost:5269/api/Auth/SignIn";
    axios
      .post(url, data)
      .then((result) => {
        //alert(result.data.message);

        if (result.data.message == "Login Failed") {
          swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong! Login Failed",
          });
          navigate("/signin");
        } else {
          swal.fire("Good job!", "Login Successfull !", "success");
          console.log(result.data.nametag);
          // navigate("/", { state });
          navigate(`/?name=${result.data.nametag}`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <div className="card ">
              <div class="card- body p-5 text center">
                <form>
                  <div>
                    <div className="d-flex flex-row align-items-center justify-content-center ">
                      <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                    </div>
                    <br />

                    <button className="loginBtn loginBtn--facebook">
                      Login with Facebook
                    </button>

                    <button className="loginBtn loginBtn--google">
                      Login with Google
                    </button>
                  </div>

                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0">Or</p>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control form-control-lg"
                      required
                      placeholder="Enter a valid email"
                      onChange={(e) => handleEmailChange(e.target.value)}
                    />
                    <label className="form-label" for="form3Example3">
                      Email
                    </label>
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control form-control-lg"
                      required
                      placeholder="Enter password"
                      onChange={(e) => handlePasswordChange(e.target.value)}
                    />
                    <label className="form-label" for="form3Example4">
                      Password
                    </label>
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <div className="form-check mb-0">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3"
                      />
                      <label className="form-check-label" for="form2Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="#!" className="text-body">
                      Forgot password?
                    </a>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={(e) => handleSave(e)}
                    >
                      Login
                    </button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">
                      Don't have an account?{" "}
                      <a
                        href="#!"
                        className="link-danger"
                        onClick={() => navigate("/signup")}
                      >
                        Register
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
