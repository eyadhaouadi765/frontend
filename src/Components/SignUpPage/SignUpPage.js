import React, { useState } from "react";
import "./SignUpPage.css";

const SignUpPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    // Form validation and signup logic
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    // Here you can add signup logic, such as calling an API
    console.log("Signup form submitted successfully.");
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="form-group">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="form-control"
          placeholder="First Name"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="form-control"
          placeholder="Last Name"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Email"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-control"
          placeholder="Phone Number"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Password"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="form-control"
          placeholder="Confirm Password"
          required
        />
      </div>
      <button onClick={handleSignup} className="btn-signup">
        Sign Up
      </button>
    </div>
  );
};

export default SignUpPage;
