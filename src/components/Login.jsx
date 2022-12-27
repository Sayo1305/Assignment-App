import React, { useState } from "react";
import BG from "../Assets/Images/Loginnotes.webp";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Login = () => {
  const URL = "http://localhost:3001/User/login";
  const navigate = useNavigate();
  const [Password, SetPassword] = useState("");
  const [Result, SetResult] = useState([]);
  const [Email, SetEmail] = useState("");
  const handle_change_password = (e) => {
    SetPassword(e.target.value);
  };
  const handle_change_email = (e) => {
    SetEmail(e.target.value);
  };
  const handle_submit = async (email, password) => {
    const result = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
    SetResult(result);
    console.log(result);
    (result["status"] === "error") ? 
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: result.length === 0
          ? "Please fill the form"
          : Result["error"],
    }) 
    :
    (
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Login Sucessfully",
      showConfirmButton: false,
      timer: 1500,
    })
    );
    if(result["status"] === "ok")
    {
      navigate('/Home');
    }
  };
  return (
    <div>
      <img className="LoginBackground" src={BG} alt="bg" />
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
          type={"email"}
          onChange={handle_change_email}
        ></input>
        <input
          className="InputSignup"
          placeholder="Password"
          type={"password"}
          onChange={handle_change_password}
        ></input>
        <button
          className="InputSignup button Login"
          onClick={() => {
            handle_submit(Email, Password);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
