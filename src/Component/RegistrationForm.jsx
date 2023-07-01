import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import LoginFrom from "./LoginFrom";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [registeredIn, setRegisteredIn] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      return;
    }

    const existEmail = localStorage.getItem(formData.email);

    if (existEmail) {
      return;
    }

    setRegisteredIn(true);
    localStorage.setItem("formData", JSON.stringify(formData));
    setFormData({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="container">
      {registeredIn ? (
        <LoginFrom />
      ) : (
        <React.Fragment>
          <h1 className="text-primary dark-text">Registration Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                required
                className="form-control dark-input"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                required
                className="form-control dark-input"
                id="email"
                name="email"
                value={formData.email}
                onChange={inputChangeHandler}
              />
              {localStorage.getItem(formData.email) && (
                <h5 className="error-message">Email already exists</h5>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                required
                className="form-control dark-input"
                id="password"
                name="password"
                value={formData.password}
                onChange={inputChangeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                required
                className="form-control dark-input"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={inputChangeHandler}
              />
              {formData.password !== formData.confirmPassword && (
                <p className="error-message">Passwords do not match</p>
              )}
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input checkbox-input"
                id="agreeTerms"
                required
              />
              <label htmlFor="agreeTerms" className="checkbox-label">
                I agree to the terms and conditions
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-register">
              Register
            </button>
            <p className="login-link">
              Already Registered? <Link to="/login">Log In</Link>
            </p>
          </form>
        </React.Fragment>
      )}
    </div>
  );
};

export default RegistrationForm;
