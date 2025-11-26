import React from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import ProfileImage from '../assets/profile.png';

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
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                backgroundColor: '#ddd',
                marginBottom: '1.5rem',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0
            }}>
                <img
                    src={ProfileImage}
                    alt="Profile"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
            </div>

            <h2 style={{ marginBottom: '0.5rem', fontSize: '1.5rem', fontWeight: 'bold' }}>Sowdhanya</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '0.9rem' }}>Full Stack -developer</p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#28a745' }}></div>
                <span style={{ fontSize: '0.9rem', color: '#28a745', fontWeight: '500' }}>Available</span>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <FaInstagram size={18} style={{ color: '#E1306C', cursor: 'pointer' }} />
                <FaLinkedin size={18} style={{ color: '#0077B5', cursor: 'pointer' }} />
                <FaWhatsapp size={18} style={{ color: '#25D366', cursor: 'pointer' }} />
                <FaGithub size={18} style={{ color: '#333', cursor: 'pointer' }} />
            </div>

            <div style={{ width: '100%', marginBottom: '2rem', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                    <span style={{ fontWeight: '500' }}>Age:</span>
                    <span>18</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                    <span style={{ fontWeight: '500' }}>Residence:</span>
                    <span>23/A</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                    <span style={{ fontWeight: '500' }}>Freelancer:</span>
                    <span style={{ color: '#28a745', fontWeight: '500' }}>Available</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.8rem' }}>
                    <span style={{ fontWeight: '500' }}>Address:</span>
                    <span>Trichy</span>
                </div>
            </div>

            <div style={{ width: '100%', marginBottom: '2rem' }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '600' }}>Languages</h3>
                <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', fontSize: '0.9rem' }}>
                        <span>Tamil</span>
                        <span>100%</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', backgroundColor: '#eee', borderRadius: '3px' }}>
                        <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--accent-yellow)', borderRadius: '3px' }}></div>
                    </div>
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', fontSize: '0.9rem' }}>
                        <span>English</span>
                        <span>90%</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', backgroundColor: '#eee', borderRadius: '3px' }}>
                        <div style={{ width: '90%', height: '100%', backgroundColor: 'var(--accent-yellow)', borderRadius: '3px' }}></div>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.1rem', fontWeight: '600' }}>contact</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem', fontSize: '0.9rem' }}>
                    <FaPhone style={{ color: 'var(--accent-yellow)' }} />
                    <span>8072338878</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.9rem' }}>
                    <FaEnvelope style={{ color: 'var(--accent-yellow)' }} />
                    <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>sowdhanyarajkumar@gmail.com</span>
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;
