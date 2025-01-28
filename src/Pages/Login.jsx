import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    emailOrContact: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const navigateToSignup = () => {
    // Logic to navigate to Signup.jsx page
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email or Contact Number:</label>
          <input type="text" name="emailOrContact" value={formData.emailOrContact} onChange={handleChange} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={navigateToSignup}>New user</button>
    </div>
  );
};

export default Login;