import "./login.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.id]: e.target.value
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      setError("Please enter email and password");
      return;
    }

    setError("");

    try {
      const response = await axios.post("https://gym-backend-production-d89b.up.railway.app/api/Member/login", {
        email: loginData.email,
        password: loginData.password
      });
      if(response.status==200){
        navigate("/home")
      }
      console.log(response);
      // later → navigate to dashboard
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back 💪</h1>
        <p className="login-subtitle">
          Login and continue your fitness journey
        </p>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="login-btn">
            Login
          </button>

          <div className="register-link">
            New here? <a href="/register">Create an account</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
