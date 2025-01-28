import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    selectedClass: '',
    password: '',
    confirmPassword: ''
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
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log(formData);
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '140px auto', // Increased top margin
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#f9f9f9'
  };

  const headingStyle = {
    textAlign: 'center',
    margin: '20px'
  };

  const formGroupStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '15px',
    flexWrap: 'wrap'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold'
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  };

  const halfWidthStyle = {
    width: '350px',
    marginBottom: '15px'
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
      .half-width {
        width: 100%;
      }
      .button {
        width: 100%;
      }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{mediaQueryStyle}</style>
      <h2 style={headingStyle}>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={formGroupStyle}>
          <div className="half-width" style={halfWidthStyle}>
            <label style={labelStyle}>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} />
          </div>
          <div className="half-width" style={halfWidthStyle}>
            <label style={labelStyle}>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
          </div>
        </div>
        <div className="form-group" style={formGroupStyle}>
          <div className="half-width" style={halfWidthStyle}>
            <label style={labelStyle}>Contact Number:</label>
            <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required style={inputStyle} />
          </div>
          <div className="half-width" style={halfWidthStyle}>
            <label style={labelStyle}>Class:</label>
            <select name="selectedClass" value={formData.selectedClass} onChange={handleChange} required style={inputStyle}>
              <option value="">Select Class</option>
              <option value="Class 11th">Class 11th</option>
              <option value="Class 12th">Class 12th</option>
              <option value="Dropper">Dropper</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>
        <div className="form-group" style={formGroupStyle}>
          <div className="half-width" style={halfWidthStyle}>
            <label style={labelStyle}>Password:</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required style={inputStyle} />
          </div>
          <div className="half-width" style={halfWidthStyle}>
            <label style={labelStyle}>Confirm Password:</label>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required style={inputStyle} />
          </div>
        </div>
        <div className="button-container" style={buttonContainerStyle}>
          <button type="submit" className="button" style={buttonStyle} onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;