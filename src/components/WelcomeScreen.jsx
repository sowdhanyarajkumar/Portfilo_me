import React, { useState } from 'react';
import { motion } from 'framer-motion';

const WelcomeScreen = ({ onStart }) => {
    const [bulbOn, setBulbOn] = useState(false);

    const handleBulbClick = (e) => {
        e.stopPropagation();
        setBulbOn(true);
        setTimeout(() => {
            onStart();
        }, 800);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: '#eae127ff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                cursor: 'pointer'
            }}
            onClick={onStart}
        >
            <img
                src="/welcome-latest.png"
                alt="Welcome"
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center center'
                }}
            />

            {/* Hanging Light Bulb */}
            <div style={{
                position: 'absolute',
                top: '5%',
                right: '10%'
            }}>
                {/* Static Screw Base at top */}
                <svg width="80" height="30" viewBox="0 0 80 30" style={{ display: 'block', margin: '0 auto' }}>
                    <rect x="32" y="5" width="16" height="4" fill="#9e9e9e" rx="1" />
                    <rect x="32" y="10" width="16" height="4" fill="#9e9e9e" rx="1" />
                    <rect x="32" y="15" width="16" height="4" fill="#9e9e9e" rx="1" />
                </svg>

                {/* Swinging part: Rope + Bulb */}
                <motion.div
                    style={{
                        transformOrigin: 'top center',
                        marginTop: '-5px'
                    }}
                    animate={{
                        rotate: bulbOn ? 0 : [-8, 8, -8]
                    }}
                    transition={{
                        duration: 3,
                        repeat: bulbOn ? 0 : Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {/* Rope/Wire */}
                    <div style={{
                        width: '3px',
                        height: '120px',
                        backgroundColor: '#2c2c2c',
                        margin: '0 auto',
                        borderRadius: '2px'
                    }} />

                    {/* Light Bulb SVG */}
                    <motion.div
                        onClick={handleBulbClick}
                        style={{
                            cursor: 'pointer',
                            marginTop: '-5px'
                        }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <svg width="80" height="80" viewBox="0 0 80 80" style={{ display: 'block' }}>
                            {/* Bulb glow effect when on */}
                            {bulbOn && (
                                <circle
                                    cx="40"
                                    cy="40"
                                    r="35"
                                    fill="rgba(255, 255, 0, 0.3)"
                                    filter="blur(15px)"
                                />
                            )}

                            {/* Main bulb shape */}
                            <ellipse
                                cx="40"
                                cy="40"
                                rx="28"
                                ry="32"
                                fill={bulbOn ? '#FFD700' : '#f5f5dc'}
                                stroke="#d4d4d4"
                                strokeWidth="2"
                                style={{
                                    filter: bulbOn ? 'drop-shadow(0 0 20px rgba(255, 255, 0, 0.8))' : 'none',
                                    transition: 'all 0.3s ease'
                                }}
                            />

                            {/* Filament (visible when on) */}
                            {bulbOn && (
                                <path
                                    d="M 35 35 Q 40 30 45 35 Q 40 40 35 35"
                                    stroke="#ff6600"
                                    strokeWidth="2"
                                    fill="none"
                                    opacity="0.8"
                                />
                            )}

                            {/* Shine effect */}
                            <ellipse
                                cx="32"
                                cy="30"
                                rx="8"
                                ry="12"
                                fill="rgba(255, 255, 255, 0.4)"
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>

            {/* Switch on button */}
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    setBulbOn(true);
                    setTimeout(() => {
                        onStart();
                    }, 800);
                }}
                style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    color: '#333',
                    cursor: 'pointer',
                    backdropFilter: 'blur(5px)',
                    transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
                    e.target.style.transform = 'translateX(-50%) scale(1.05)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                    e.target.style.transform = 'translateX(-50%) scale(1)';
                }}
            >
                Switch on
            </div>
        </motion.div>
    );
};

export default WelcomeScreen;
