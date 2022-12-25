import React from "react";
import { useState } from "react";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";
import "./login.css";

const Login = () => {
  //context username
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  function handleChange(event) {
    const { type, value } = event.target;
    type == "text" ? setUsername(value) : setPassword(value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.value);
    const res = await fetch("http://localhost:5000/userauth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await res.json();
    if (data.status === "422" || !data) {
      window.alert("invalid registration");
    }
    window.alert("Login Successful");
    history.push("/Build");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} action="" className="login">
        <label htmlFor="Username">Username</label>
        <input
          onChange={handleChange}
          value={username}
          placeholder="Username"
          type="text"
          id="email"
          name="username"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          value={password}
          placeholder="Password"
          type="password"
          id="password"
          name="password"
        />
        <button className="loginBtn" type="submit">
          LogIn{" "}
        </button>
        <br />
        <Button className="sign">New User? SignUp here</Button>
      </form>
    </div>
  );
};

export default Login;
