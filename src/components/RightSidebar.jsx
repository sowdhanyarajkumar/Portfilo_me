import React, { useState } from 'react';
import { FaHome, FaCode, FaBook, FaBriefcase, FaCommentDots } from 'react-icons/fa';

const NavIcon = ({ icon: Icon, isActive, onClick }) => (
    <div
        onClick={onClick}
        style={{
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            backgroundColor: isActive ? 'var(--accent-yellow)' : '#f0f0f6',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '2rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: isActive ? '0 4px 10px rgba(255, 180, 0, 0.3)' : 'none'
        }}
    >
        <Icon size={20} color={isActive ? '#333' : '#777'} />
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
            <NavIcon icon={FaHome} isActive={activeTab === 'home'} onClick={() => scrollToSection('home')} />
            <NavIcon icon={FaCode} isActive={activeTab === 'projects'} onClick={() => scrollToSection('projects')} />
            <NavIcon icon={FaBook} isActive={activeTab === 'education'} onClick={() => scrollToSection('education')} />
            <NavIcon icon={FaBriefcase} isActive={activeTab === 'work'} onClick={() => scrollToSection('work')} />
            <NavIcon icon={FaCommentDots} isActive={activeTab === 'contact'} onClick={() => scrollToSection('contact')} />
        </div>
    );
};

export default RightSidebar;
