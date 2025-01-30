import React, { useState } from 'react';

export default function Slotbook() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    date: '',
    hours: '',
    timeSlotHour: '',
    timeSlotMinute: '',
    timeSlotPeriod: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleTimeSlotChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const timeSlot = `${formData.timeSlotHour}:${formData.timeSlotMinute} ${formData.timeSlotPeriod}`;
    const finalFormData = { ...formData, timeSlot };
    // Handle form submission logic here
    console.log(finalFormData);
  };

  const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const styles = {
    container: {
      maxWidth: '600px',
      margin: '150px auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
    },
    form: {
      display: 'flex',
      flexDirection: 'column'
    },
    formGroup: {
      marginBottom: '15px'
    },
    note: {
      marginBottom: '15px',
      color: 'red',
      fontStyle: 'italic'
    },
    heading: {
      fontWeight: 900,
      fontStyle: 'italic',
      textAlign: 'center'
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px'
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#007BFF',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Book Your Slot</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label>Name:</label>
          <input type="text" name="name" placeholder='Enter your name' value={formData.name} onChange={handleChange} style={styles.input} required />
        </div>
        <div style={styles.formGroup}>
          <label>Email:</label>
          <input type="email" name="email" placeholder='Enter your email' value={formData.email} onChange={handleChange} style={styles.input} required />
        </div>
        <div style={styles.formGroup}>
          <label>Contact:</label>
          <input type="text" name="contact" placeholder='Enter your contact no.' value={formData.contact} onChange={handleChange} style={styles.input} required />
        </div>
        <div style={styles.formGroup}>
          <label>Select Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} style={styles.input} required min={getTomorrowDate()} />
        </div>
        <div style={styles.formGroup}>
          <label>Select Hour:</label>
          <select name="hours" value={formData.hours} onChange={handleChange} style={styles.input} required>
            <option value="">Select hours</option>
            <option value="1">1 hour</option>
            <option value="2">2 hours</option>
          </select>
        </div>
        <div style={styles.note}>
          Note: You can only choose your time slot from 8:00 AM to 8:00 PM. Do not choose your time slot between 10:00 PM to 8:00 AM.
        </div>
        <div style={styles.formGroup}>
          <label>Select Time Slot:</label>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <select name="timeSlotHour" value={formData.timeSlotHour} onChange={handleTimeSlotChange} style={{ ...styles.input, width: '30%' }} required>
              {[...Array(12).keys()].map(hour => (
                <option key={hour + 1} value={String(hour + 1).padStart(2, '0')}>{String(hour + 1).padStart(2, '0')}</option>
              ))}
            </select>
            <select name="timeSlotMinute" value={formData.timeSlotMinute} onChange={handleTimeSlotChange} style={{ ...styles.input, width: '30%' }} required>
              <option value="00">00</option>
              <option value="30">30</option>
            </select>
            <select name="timeSlotPeriod" value={formData.timeSlotPeriod} onChange={handleTimeSlotChange} style={{ ...styles.input, width: '30%' }} required>
              <option value="AM">AM</option>
              <option value="PM">PM</option>
            </select>
          </div>
        </div>
        <button type="submit" style={styles.button}>Book Your Slot</button>
      </form>
    </div>
  );
}