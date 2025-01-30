import React from 'react'

const styles = {
    container: {
        marginTop: '100px',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    },
    box: {
        border: '1px solid #ccc',
        borderRadius: '5px',
        padding: '20px',
        margin: '20px 0',
        marginLeft: '50px',
        marginRight: '50px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' 
    },
    heading: {
        color: '#2c3e50',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    subheading: {
        color: '#2980b9',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    link: {
        color: '#2980b9',
        textDecoration: 'none'
    },
    button: {
        display: 'inline-block',
        padding: '10px 20px',
        marginTop: '20px',
        fontSize: '16px',
        color: '#fff',
        backgroundColor: '#2980b9',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none'
    },
    buttonContainer: {
        display: 'flex'
    }
}

// Add media query styles
const mediaQueryStyles = `
    @media (max-width: 600px) {
        .box {
            margin-left: 10px !important;
            margin-right: 10px !important;
        }
        .buttonContainer {
            justify-content: center;
        }
    }
`

export default function Aboutus() {
    return (
        <div style={styles.container}>
            <style>{mediaQueryStyles}</style>
            <div style={styles.box} className="box">
                <h1 style={styles.heading}>About Us</h1>
                <p>Welcome to <i><b>JEE Pathfinder,</b></i> your trusted companion on the journey to conquering the <i><b>JEE Exam!</b></i> We are dedicated to guiding aspirants through every step of their preparation, providing expert insights, in-depth study materials, and strategic approaches to help you excel.</p>
                <p>At <i><b>JEE Pathfinder,</b></i> we believe that every student has the potential to achieve their dream engineering college. Our platform is designed to offer personalized guidance, last-year cutoffs, detailed college reviews, and essential resources tailored to boost your preparation.</p>
            </div>
            <div style={styles.box} className="box">
                <h2 style={styles.subheading}>Our Mission</h2>
                <p>At <i><b>JEE Pathfinder,</b></i> our mission is to empower <i><b>JEE aspirants</b></i> with personalized guidance, comprehensive study materials, and a wide range of essential resources to help them achieve their academic and career goals. We are committed to providing well-structured learning strategies, insightful exam preparation techniques, and reliable college counselling to ensure every student navigates their JEE journey with confidence and clarity.</p>
                <p>Our goal is to bridge the gap between ambition and achievement by offering tailored mentorship, last-year cutoffs, and detailed college insights. With <i><b>JEE Pathfinder,</b></i> you are not just preparing for an exam. You are building a path to success!</p>
            </div>
            <div style={styles.box} className="box">
                <h2 style={styles.subheading}>Features</h2>
                <ul>
                    <li><b>Personalized Guidance:</b> Tailored study plans and mentorship to suit your individual needs.</li>
                    <li><b>Study Materials:</b> Access to high-quality notes, practice questions, and mock tests.</li>
                    <li><b>Interactive Sessions:</b> Doubt-clearing sessions with experienced educators, IITians as well as NITians.</li>
                    <li><b>Performance Tracking:</b> Tools to monitor your progress and identify areas for improvement.</li>
                    <li><b>Community Support:</b> Connect with fellow aspirants and share your journey.</li>
                </ul>
                <i>And many more...</i>
            </div>
            <div style={styles.box} className="box">
                <h2 style={styles.subheading}>Contact Us</h2>
                <p>At <i><b>JEE Pathfinder,</b></i> we are always here to support you on your journey to success. Whether you have questions about JEE preparation strategies, need guidance on selecting the right college, or require assistance with our resources, our team is ready to help.</p>
                <p>If you need any further assistance or have specific queries, feel free to reach out to us at <a href="mailto:support@jeepathfinder.com" style={styles.link}>support@jeepathfinder.com</a>.</p>
                <p>We value your feedback and inquiries, as they help us improve and serve you better. Don’t hesitate to get in touch—we are just an email away! 🚀</p>
                <div style={styles.buttonContainer} className="buttonContainer">
                    <a href="/contact" style={styles.button}>Visit Contact Page</a>
                </div>
            </div>
        </div>
    )
}