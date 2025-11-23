import React, { useState } from 'react';
import { FaHome, FaCode, FaBook, FaBriefcase, FaCommentDots } from 'react-icons/fa';

const NavIcon = ({ icon: Icon, isActive, onClick }) => (
    <div
        onClick={onClick}
        style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: isActive ? 'var(--accent-yellow)' : '#e8e6ea',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '1.5rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            transform: isActive ? 'scale(1.1)' : 'scale(1)'
        }}
    >
        <Icon size={20} color="#333" />
    </div>
);

const RightSidebar = () => {
    const [activeTab, setActiveTab] = useState('home');

    const scrollToSection = (id) => {
        setActiveTab(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="right-sidebar" style={{
            width: 'var(--sidebar-width-right)',
            height: '100%',
            backgroundColor: 'white',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '4rem',
            borderLeft: '1px solid #eee'
        }}>
            <div
                onClick={() => scrollToSection('hero')}
                style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: activeTab === 'hero' ? 'var(--accent-yellow)' : '#e8e6ea',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '2rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
            >
                <FaHome size={24} />
            </div>

            <NavIcon icon={FaCode} isActive={activeTab === 'projects'} onClick={() => scrollToSection('projects')} />
            <NavIcon icon={FaBook} isActive={activeTab === 'education'} onClick={() => scrollToSection('education')} />
            <NavIcon icon={FaBriefcase} isActive={activeTab === 'work'} onClick={() => scrollToSection('work')} />
            <NavIcon icon={FaCommentDots} isActive={activeTab === 'contact'} onClick={() => scrollToSection('contact')} />
        </div>
    );
};

export default RightSidebar;
