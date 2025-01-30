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

  const containerStyle = {
    maxWidth: '800px',
    margin: '180px auto', // Increased top margin
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#f9f9f9'
  };

  const headingStyle = {
    textAlign: 'center',
    fontWeight: '900',
    fontStyle: 'italic',
    marginBottom: '20px'
  };

  const formGroupStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '15px',
    flexWrap: 'wrap'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    width: '80%' // Adjusted width for label
  };

  const inputStyle = {
    width: '80%', // Adjusted width for input
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  };

  const fullWidthStyle = {
    width: '80%',
    marginBottom: '15px',
    display: 'flex',
    alignItems: 'center' // Align items in the center
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center the submit button
    marginTop: '20px',
    flexWrap: 'wrap'
  };

  const buttonStyle = {
    width: '200px', // Adjusted width to fit the button in a row
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    marginBottom: '10px'
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3'
  };

  const mediaQueryStyle = `
    @media (max-width: 768px) {
      .full-width {
        flex-direction: column; // Stack label and input in column
        align-items: flex-start; // Align items to the start
      }
      .full-width label {
        width: 100%; // Full width for label
        margin-bottom: 5px; // Margin bottom for spacing
      }
      .full-width input {
        width: 100%; // Full width for input
      }
      .button {
        width: 100%;
      }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{mediaQueryStyle}</style>
      <h2 style={headingStyle}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={formGroupStyle}>
          <div className="full-width" style={fullWidthStyle}>
            <label style={labelStyle}>Email or Contact Number:</label>
            <input type="text" name="emailOrContact" placeholder='Registered Email or Contact' value={formData.emailOrContact} onChange={handleChange} required style={inputStyle} />
          </div>
        </div>
        <div className="form-group" style={formGroupStyle}>
          <div className="full-width" style={fullWidthStyle}>
            <label style={labelStyle}>Password:</label>
            <input type="password" name="password" placeholder='Enter your Password' value={formData.password} onChange={handleChange} required style={inputStyle} />
          </div>
        </div>
        <div className="button-container" style={buttonContainerStyle}>
          <button type="submit" className="button" style={buttonStyle} onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;