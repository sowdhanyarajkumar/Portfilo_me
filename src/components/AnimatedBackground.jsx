import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    // Generate random particles
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 20 + 15,
        delay: Math.random() * 5
    }));

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            overflow: 'hidden',
            pointerEvents: 'none'
        }}>
            {/* Animated Gradient Background */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(135deg, #f5f5f5 0%, #fff9e6 50%, #f5f5f5 100%)',
                    backgroundSize: '200% 200%'
                }}
                animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Floating Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    style={{
                        position: 'absolute',
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(255, 215, 0, 0.3), rgba(255, 215, 0, 0.1))',
                        boxShadow: '0 0 10px rgba(255, 215, 0, 0.2)'
                    }}
                    animate={{
                        y: [0, -30, 0],
                        x: [0, Math.random() * 20 - 10, 0],
                        opacity: [0.3, 0.6, 0.3],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut"
                    }}
                />
            ))}

            {/* Subtle Yellow Accent Circles */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: '10%',
                    right: '15%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 215, 0, 0.05), transparent)',
                    filter: 'blur(40px)'
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.div
                style={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '10%',
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 215, 0, 0.05), transparent)',
                    filter: 'blur(40px)'
                }}
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
