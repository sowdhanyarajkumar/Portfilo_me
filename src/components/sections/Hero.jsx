import React from 'react';
import heroBg from '../../assets/hero-bg.png';

const Hero = () => {
    return (
        <div className="hero-section" style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            padding: '4rem 2rem',
            borderRadius: '20px',
            marginBottom: '2rem',
            textAlign: 'center',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.1)', // Reduced overlay opacity since text is in image
                zIndex: 1
            }}></div>
        </div>
    );
};

export default Hero;
