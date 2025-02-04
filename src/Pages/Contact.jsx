import React, { useState } from 'react';

const styles = {
    headingStyle: {
        textAlign: 'center',
        fontWeight: '900',
        fontStyle: 'italic',
        marginBottom: '20px'
    },
    container: {
        maxWidth: '600px',
        margin: '140px auto 50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    formGroup: {
        marginBottom: '15px',
    },
    label: {
        display: 'block',
        marginBottom: '5px',
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    },
    textarea: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        minHeight: '100px',
    },
    buttonContainer: {
        textAlign: 'center',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
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
        console.log('Form submitted:', formData);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.headingStyle}>Contact Us</h1>
            <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Enter your name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="email" style={styles.label}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='Enter your email'
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={styles.input}
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="message" style={styles.label}>Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder='Write your message here for us...'
                        value={formData.message}
                        onChange={handleChange}
                        required
                        style={styles.textarea}
                    ></textarea>
                </div>
                <div style={styles.buttonContainer}>
                    <button type="submit" style={styles.button}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;