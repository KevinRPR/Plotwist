import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../css/LoginForm.css"; 
import { Navigation } from "./navigation";
import Foot from "./Footer";
import sillyCat from "../assets/img/sillycat.jpg";



const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    Swal.fire({
        title: "Stop right there buddy",
        text: "This form is currently under construction by tiny space aliens. Please come back when they're done eating all the wires.",
        imageUrl: sillyCat, 
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
        <h2 className="subscribe-title">Login</h2>
        <form className="subscribe-form" onSubmit={handleSubmit}>
          <div className="subscribe-input-container">
            <i className="subscribe-icon">📧</i>
            <input
              type="email"
              className="subscribe-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="subscribe-input-container">
            <i className="subscribe-icon">🔒</i>
            <input
              type="password"
              className="subscribe-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="subscribe-button">
            Send
          </button>
        </form>
      </div>
      <Foot /> 
    </>
  );
};

export default LoginForm;
