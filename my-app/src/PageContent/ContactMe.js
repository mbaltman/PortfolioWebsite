import './projectCard.css'
import emailjs from '@emailjs/browser';

import React, { useState } from 'react';

const ContactMe = () => {
    emailjs.init({
        publicKey: "VTERXIoQp0wkJEydt",
    });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [touched, setTouched] = useState({
        name: false,
        email: false,
        message: false
    });

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const getFieldClassName = (field) => {
        const baseClass = "contactMeField";
        if (!touched[field]) return baseClass;

        if (field === 'email') {
            if (formData[field] && !validateEmail(formData[field])) {
                return `${baseClass} invalid-input`;
            }
        } else {
            if (!formData[field]) {
                return `${baseClass} invalid-input`;
            }
        }
        return baseClass;
    };

    const handleBlur = (field) => {
        setTouched(prev => ({
            ...prev,
            [field]: true
        }));
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Mark all fields as touched on submit
        setTouched({
            name: true,
            email: true,
            message: true
        });

        // Validate all fields
        const isNameValid = formData.name.trim() !== '';
        const isEmailValid = validateEmail(formData.email);
        const isMessageValid = formData.message.trim() !== '';

        if (!isNameValid || !isEmailValid || !isMessageValid) {
            return; // Stop if validation fails
        }

        // Here you would typically send the email
        try {
            // Replace this with your actual email sending logic
            console.log('Sending email with:', formData);
            emailjs.send("service_mslak6b","template_3sudq7k",{
                from_name: formData.name,
                email: formData.email,
                message:formData. message,
            });
            // Reset form after successful submission
            setFormData({ name: '', email: '', message: '' });
            setTouched({ name: false, email: false, message: false });
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Failed to send message:', error);
            alert('Failed to send message. Please try again.');
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="projectCard" id="contactMeProjectCard">
            <h1 className="boldTitle" id="contactMeTitle"> Contact Me</h1>
            <div className="contactMeCol">
                <p className="boldLabel">Name:</p>
                <input type="text"
                       className={getFieldClassName('name')}
                       id="name" 
                       placeholder="Your Name" 
                       required
                       value={formData.name}
                       onChange={handleChange}
                />
            </div>
            <div className="contactMeCol">
                <p className="boldLabel">Email:</p>
                <input type="email"
                       className={getFieldClassName('email')}
                       id="email"
                       placeholder="Your Email" 
                       required
                       value={formData.email}
                       onChange={handleChange}/>
            </div>
            <div className="contactMeCol">
                <p className="boldLabel"> Message:</p>
                <textarea className={getFieldClassName('message')}
                          id="message" 
                          rows="5"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                ></textarea>
            </div>
            <button type="submit" id="submitButton"
            >Send Message</button>
        </form>
    );
};

export default ContactMe