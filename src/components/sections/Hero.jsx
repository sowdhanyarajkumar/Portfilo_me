import React from 'react';

const Hero = () => {
    return (
        <div id="hero" className="hero-section" style={{
            backgroundColor: 'var(--bg-dark)',
            padding: '3rem',
            borderRadius: '0',
            marginBottom: '0',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            color: 'white'
        }}>
            <div className="hero-content" style={{ maxWidth: '50%', zIndex: 2 }}>
                <h1 style={{
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem',
                    lineHeight: '1.2'
                }}>
                    I’m Sowdhanya
                </h1>
                <p style={{
                    fontSize: '1rem',
                    color: '#ccc',
                    lineHeight: '1.6',
                    maxWidth: '400px'
                }}>
                    Aspiring Full Stack Developer working with Agentic AI, semantic APIs, and AI agents to build intelligent, high-impact applications.
                </p>
            </div>

            <div className="hero-image" style={{
                position: 'absolute',
                right: '-50px',
                top: '0',
                height: '100%',
                width: '60%',
                zIndex: 1
            }}>
                {/* Using a placeholder that matches the laptop/desk vibe */}
                <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Workspace"
                    style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        maskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to left, black 60%, transparent 100%)'
                    }}
                />
            </div>
        </div >
    );
};

export default Hero;
