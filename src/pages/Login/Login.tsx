import React from "react";
import signinImage from "../../assets/images/pablo-sign-in.svg";
import "./Login.scss";
import Logo from "../../assets/images/Group.svg";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <div className="login__left">
        <div>
          <img className="login__logo" src={Logo} alt="" />
        </div>
        <div className="login__left__center">
          <div className="login__left__center__image">
            <img src={signinImage} alt="" />
          </div>
        </div>
      </div>
      <div className="login__right">
        <div>
          <h3>Welcome !</h3>
          <p>Enter details to login.</p>
          <div className="login__right__form">
            <div className="login__right__form__input__input-box">
              <input
                type="email"
                className="login__right__form__input"
                placeholder="Email"
              />
            </div>
            <div className="login__right__form__input__input-box">
              <input
                type="password"
                className="login__right__form__input"
                placeholder="Password"
              />
              <button
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  height: "100%",
                  border: "none",
                  background: "transparent",
                  color: "#39cdcc",
                  padding: "10px",
                }}
              >
                Show
              </button>
            </div>
          </div>
          <h6>
            <Link to="/">FORGOT PASSWORD?</Link>
          </h6>

          <button className="btn btn__block">LOG IN</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
