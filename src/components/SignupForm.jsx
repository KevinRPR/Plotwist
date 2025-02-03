import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../css/LoginForm.css"; 
import { Navigation } from "./navigation";
import Foot from "./Footer";
import sillyCat2 from "../assets/img/sillycat2.jpeg";
import sillyCat3 from "../assets/img/sillycat3.jpg";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      Swal.fire({
        title: "hmmm interesting...",
        text: "Seriously? Are you sure you're not just making this up for fun? You just have to type the same thing 2 times... come on bro",
        imageUrl: sillyCat3,
        imageWidth: 150,
        imageHeight: 150,
        imageAlt: "Gato divertido",
        confirmButtonText: "Go back home",
      });
      return;
    }

    Swal.fire({
      title: "Hold up little bro",
      text: "This form is currently experiencing an existential crisis. Please try again later when it has regained its composure.",
      imageUrl: sillyCat2,
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: "Gato divertido",
      confirmButtonText: "Go back home",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <Navigation />
      <div className="subscribe-container">
        <h2 className="subscribe-title">Sign up</h2>
        <form className="subscribe-form" onSubmit={handleSubmit}>
          <div className="subscribe-input-container">
            <i className="subscribe-icon">👤</i>
            <input
              type="text"
              className="subscribe-input"
              placeholder="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="subscribe-input-container">
            <i className="subscribe-icon">📧</i>
            <input
              type="email"
              className="subscribe-input"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="subscribe-input-container">
            <i className="subscribe-icon">🔒</i>
            <input
              type="password"
              className="subscribe-input"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="subscribe-input-container">
            <i className="subscribe-icon">🔒</i>
            <input
              type="password"
              className="subscribe-input"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="subscribe-button">
            Submit
          </button>
        </form>
      </div>
      <Foot />
    </>
  );
};

export default SignupForm;
