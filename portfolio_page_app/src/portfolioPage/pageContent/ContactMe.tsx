import './projectCard.css'
import emailjs from '@emailjs/browser';

import React, { useState } from 'react';

type FormFields = 'name' | 'email' | 'message';

type FormData = Record<FormFields, string>;

type TouchedState = Record<FormFields, boolean>;

export const ContactMe = () => {
    emailjs.init({
        publicKey: "VTERXIoQp0wkJEydt",
    });

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: ''
    });

    const [touched, setTouched] = useState<TouchedState>({
        name: false,
        email: false,
        message: false
    });

    const [submitted, setSubmitted] = useState(false);

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const getFieldClassName = (field: FormFields) => {
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setTouched({
            name: true,
            email: true,
            message: true
        });

        const isNameValid = formData.name.trim() !== '';
        const isEmailValid = validateEmail(formData.email);
        const isMessageValid = formData.message.trim() !== '';

        if (!isNameValid || !isEmailValid || !isMessageValid) {
            return;
        }

        try {
            console.log('Sending email with:', formData);
            await emailjs.send("service_mslak6b", "template_3sudq7k", {
                from_name: formData.name,
                email: formData.email,
                message: formData.message,
            });
            setFormData({ name: '', email: '', message: '' });
            setTouched({ name: false, email: false, message: false });
            setSubmitted(true);
        } catch (error) {
            console.error('Failed to send message:', error);
            alert('Failed to send message. Please try again.');
        }
    };

    const renderContent = () => {
        if (!submitted) {
            return (
                <form onSubmit={handleSubmit} className="projectCard" id="contactMeProjectCard">
                    <h1 className="boldTitle" id="contactMeTitle">Contact Me</h1>
                    <div className="contactMeCol">
                        <p className="boldLabel">Name:</p>
                        <input
                            type="text"
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
                        <input
                            type="email"
                            className={getFieldClassName('email')}
                            id="email"
                            placeholder="Your Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="contactMeCol">
                        <p className="boldLabel">Message:</p>
                        <textarea
                            className={getFieldClassName('message')}
                            id="message"
                            rows={5}
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" id="submitButton" className="linkButton">
                        Send Message
                    </button>
                </form>
            );
        } else {
            return (
                <div className="projectCard" id="contactMeProjectCardSubmitted">
                    <div id="submittedEmail">
                        <img id="emailIcon" src="/images/Email_Icon.png" alt="did send" />
                        <p className="boldTitle">Thank you for reaching out!</p>
                    </div>
                </div>
            );
        }
    };

    return renderContent();
};