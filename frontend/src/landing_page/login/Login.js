import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";
const DASHBOARD_URL =
  process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3004";

const Login = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data } = await axios.post(`${API_URL}/login`, inputValue, {
        withCredentials: true,
      });

      if (data.success) {
        toast.success(data.message || "Login successful", {
          position: "bottom-right",
        });
        setTimeout(() => {
          window.location.href = DASHBOARD_URL;
        }, 1000);
      } else {
        toast.error(data.message || "Login failed", {
          position: "bottom-left",
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed", {
        position: "bottom-left",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <section className="auth-panel">
        <div className="auth-copy">
          <p className="auth-eyebrow">Welcome back</p>
          <h1>Login to Kite</h1>
          <p>
            Access your dashboard to review holdings, positions, and recent
            orders.
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            required
          />

          <label htmlFor="login-password">Password</label>
          <input
            id="login-password"
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            required
          />

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
          <span>
            New to Zerodha? <Link to="/signup">Create account</Link>
          </span>
        </form>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Login;
