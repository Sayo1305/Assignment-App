import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Bg from '../Assets/Images/bghome.jpg';
const Signup = () => {
  const URL = "http://localhost:3001/User/register";
  const [Name, setName] = useState("");
  const [Result, SetResult] = useState([]);
  const [Password, SetPassword] = useState("");
  const [Email, SetEmail] = useState("");
  const navigate = useNavigate();
  useState(() => {}, [Result]);
  const handle_submit = async (email, username, password) => {
    const result = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    SetResult(result);
    console.log(Result);
    result["Ok"] === "false" || result.length === 0
      ? Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            "Something went wrong!" + Result.length === 0
              ? "Please fill the form"
              : Result["status"],
        })
      : Swal.fire({
          position: "center",
          icon: "success",
          title: "Registered Sucessfully",
          showConfirmButton: false,
          timer: 1500,
        });
  };
  const handle_change_email = (e) => {
    SetEmail(e.target.value);
  };
  const handle_change_name = (e) => {
    setName(e.target.value);
  };
  const handle_change_password = (e) => {
    SetPassword(e.target.value);
  };
  return (
    <div>
      <img className="SignUpBG" src={Bg} alt="bg" />
      <button
        className="BackHomebutton"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
      <div className="SignUpBox">
        <input
          className="InputSignup"
          placeholder="Test@gmail.com"
          onChange={handle_change_email}
          type={"email"}
        ></input>
        <input
          className="InputSignup"
          placeholder="Username"
          onChange={handle_change_name}
          type={"text"}
        ></input>
        <input
          className="InputSignup"
          placeholder="Password"
          onChange={handle_change_password}
          type={"text"}
        ></input>
        <button
          className="InputSignup button"
          onClick={() => {
            handle_submit(Email, Name, Password);
          }}
        >
          Sign In
        </button>
      </div>
      {Result.length !== 0 && Result["Ok"] === "true" && (
        <div className="InputLoginContainer">
          <button
            className="InputLogin button"
            onClick={() => {
              navigate("/Login");
            }}
          >
            Please Login to Go home page
          </button>
        </div>
      )}
    </div>
  );
};

export default Signup;
