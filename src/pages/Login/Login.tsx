import React, { useState } from "react";
import signinImage from "../../assets/images/pablo-sign-in.svg";
import "./Login.scss";
import Logo from "../../assets/images/Group.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

type FormValues = {
  password: string;
  email: string;
};

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    let users = (
      await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`
      )
    ).data;

    if (users) {
      localStorage.setItem("allUsers", JSON.stringify(users));
      navigate("/");
      localStorage.setItem("user", JSON.stringify(data));
    }
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Welcome !</h3>
            <p>Enter details to login.</p>
            <div className="login__right__form">
              <div className="login__right__form__input__input-box">
                <input
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="login__right__form__input"
                  placeholder="Email"
                />
                {errors.email?.type === "required" && (
                  <p className="err">Email is required</p>
                )}
                {errors.email?.type === "pattern" && (
                  <p className="err">Invalid email format</p>
                )}
              </div>
              <div className="login__right__form__input__input-box">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: true })}
                  className="login__right__form__input"
                  placeholder="Password"
                />
                <button
                  style={{
                    position: "absolute",
                    top: "30%",
                    right: 0,
                    border: "none",
                    background: "transparent",
                    color: "#39cdcc",
                    padding: "0 10px",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
                {errors.password?.type === "required" && (
                  <p className="err">Password is required</p>
                )}
              </div>
            </div>
            <h6>
              <Link to="">FORGOT PASSWORD?</Link>
            </h6>

            <button className="btn btn__block" type="submit">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
