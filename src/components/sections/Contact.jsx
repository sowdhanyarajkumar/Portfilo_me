import React from 'react';
import { FaCommentDots } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.div
            id="contact"
            style={{
                backgroundColor: '#f3f0f5',
                padding: '2rem',
                borderRadius: '20px',
                marginBottom: '2rem'
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <h2 style={{ textAlign: 'center' }}>connect with Me</h2>
                <FaCommentDots size={24} />
            </div>

            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                {/* Left Side: Resume Download */}
                <div style={{ flex: 1, minWidth: '250px' }}>
                    <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>Download My Resume</h3>
                    <button style={{
                        backgroundColor: '#ddd',
                        border: 'none',
                        padding: '0.8rem 2rem',
                        borderRadius: '10px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        Download
                    </button>
                </div>

                {/* Right Side: Contact Form */}
                <div style={{
                    flex: 1,
                    minWidth: '250px',
                    backgroundColor: 'var(--accent-yellow)',
                    padding: '2rem',
                    borderRadius: '15px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Fill this Form</h3>

                    <input
                        type="text"
                        placeholder="Type your Name"
                        style={{
                            width: '100%',
                            padding: '0.8rem',
                            marginBottom: '1rem',
                            borderRadius: '5px',
                            border: 'none',
                            outline: 'none',
                            fontSize: '0.9rem'
                        }}
                    />

                    <input
                        type="email"
                        placeholder="Type your email"
                        style={{
                            width: '100%',
                            padding: '0.8rem',
                            marginBottom: '1rem',
                            borderRadius: '5px',
                            border: 'none',
                            outline: 'none',
                            fontSize: '0.9rem'
                        }}
                    />

                    <input
                        type="tel"
                        placeholder="Type Your Ph no"
                        style={{
                            width: '100%',
                            padding: '0.8rem',
                            marginBottom: '1.5rem',
                            borderRadius: '5px',
                            border: 'none',
                            outline: 'none',
                            fontSize: '0.9rem'
                        }}
                    />

                    <button style={{
                        backgroundColor: 'white',
                        border: 'none',
                        padding: '0.5rem 2rem',
                        borderRadius: '20px',
                        fontWeight: 'bold',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}>
                        submit
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
