import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import TodoApp from "./TodoApp";
import "./LoginForm.css"; // Import the custom CSS file

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setErrorMessage] = useState("");

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUserData = JSON.parse(localStorage.getItem("formData"));
    if (
      storedUserData &&
      formData.email === storedUserData.email &&
      formData.password === storedUserData.password
    ) {
      setErrorMessage("Login Successfully");
      setLoggedIn(true);
    } else {
      setErrorMessage("Invalid username or password");
      setLoggedIn(false);
    }
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container">
      {loggedIn ? (
        <TodoApp />
      ) : (
        <div className="login-form">
          <h2 className="text-center">Login Form</h2>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                required
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
              required
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={formData.password}
                onChange={inputChangeHandler}
              />
            </div>
            {error && <p className="error-message">{error}</p>}

            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary btn-block"
            >
              Login
            </button>

            <p className="register-link">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
