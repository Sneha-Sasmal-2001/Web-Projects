import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/login.png";

function Login({ setIsLoggedIn }) {
  return (
    <Template
      title="Welcome Back"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education to future-proof your career."
      image={loginImg}
      formType="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default Login;
