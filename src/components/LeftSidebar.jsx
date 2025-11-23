import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const LeftSidebar = () => {
    return (
        <div className="left-sidebar" style={{
            width: 'var(--sidebar-width-left)',
            height: '100%',
            backgroundColor: 'white',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRight: '1px solid #eee',
            overflowY: 'auto'
        }}>
            <div style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                backgroundColor: '#ddd',
                marginBottom: '1.5rem'
            }}>
                {/* Placeholder for profile image */}
            </div>

            <h2 style={{ marginBottom: '0.5rem' }}>Sowdhanya</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Full Stack -developer</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', color: 'green' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'green' }}></div>
                <span>Available</span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <FaInstagram size={20} style={{ color: '#E1306C' }} />
                <FaLinkedin size={20} style={{ color: '#0077B5' }} />
                <FaWhatsapp size={20} style={{ color: '#25D366' }} />
                <FaGithub size={20} style={{ color: '#333' }} />
            </div>

            <div style={{ width: '100%', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Age:</span>
                    <span>18</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Residence:</span>
                    <span>23/A</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Freelancer:</span>
                    <span style={{ color: 'green' }}>Available</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span>Address:</span>
                    <span>Trichy</span>
                </div>
            </div>

            <div style={{ width: '100%', marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem' }}>Languages</h3>
                <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                        <span>Tamil</span>
                        <span>100%</span>
                    </div>
                    <div style={{ width: '100%', height: '5px', backgroundColor: '#eee' }}>
                        <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--accent-yellow)' }}></div>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                        <span>English</span>
                        <span>90%</span>
                    </div>
                    <div style={{ width: '100%', height: '5px', backgroundColor: '#eee' }}>
                        <div style={{ width: '90%', height: '100%', backgroundColor: 'var(--accent-yellow)' }}></div>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%' }}>
                <h3 style={{ marginBottom: '1rem' }}>contact</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <FaPhone />
                    <span>8072338878</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FaEnvelope />
                    <span style={{ fontSize: '0.8rem' }}>sowdhanyarajkumar@gmail.com</span>
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;
