import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const projects = [
    {
        title: "Fashionista",
        description: "connects Boutiques and customer to customize their Own design"
    },
    {
        title: "Skill connect",
        description: "connects job seeker and bussiness community for Blue collar Workers"
    },
    {
        title: "Documind",
        description: "AI-Powered Smart Document Organizer using N8n to Automate Documents"
    },
    {
        title: "Heal on",
        description: "bridges as the gap rural healthcare with AI-driven supports for health monitorization"
    }
];

const ProjectCard = ({ title, description, isCenter }) => (
    <motion.div
        className="project-card"
        style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '15px',
            boxShadow: isCenter ? '0 10px 30px rgba(0,0,0,0.15)' : '0 4px 6px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '200px',
            width: isCenter ? '300px' : '250px',
            flexShrink: 0
        }}
        animate={{
            opacity: isCenter ? 1 : 0.6,
            scale: isCenter ? [0.9, 1.05, 1] : 0.9
        }}
        transition={{
            duration: 0.5,
            ease: "easeInOut"
        }}
    >
        <div>
            <h3 style={{ marginBottom: '0.5rem', fontSize: '1.2rem' }}>{title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>{description}</p>
        </div>
        <button style={{
            backgroundColor: 'var(--accent-yellow)',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer',
            alignSelf: 'flex-start'
        }}>
            Download
        </button>
    </motion.div>
);

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    // Auto-play carousel when scrolled into view
    useEffect(() => {
        if (isInView && !hasAutoPlayed) {
            let count = 0;
            const interval = setInterval(() => {
                setCurrentIndex((prev) => (prev + 1) % projects.length);
                count++;
                if (count >= projects.length) {
                    clearInterval(interval);
                    setHasAutoPlayed(true);
                }
            }, 1500); // Change card every 1.5 seconds

            return () => clearInterval(interval);
        }

        // Reset auto-play when scrolled out of view
        if (!isInView && hasAutoPlayed) {
            setHasAutoPlayed(false);
            setCurrentIndex(0);
        }
    }, [isInView, hasAutoPlayed]);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    // Get the indices for the 3 visible cards
    const getPrevIndex = () => (currentIndex - 1 + projects.length) % projects.length;
    const getNextIndex = () => (currentIndex + 1) % projects.length;

    return (
        <div id="projects" ref={ref} style={{ marginBottom: '2rem', marginTop: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <h2 style={{ textAlign: 'center' }}>My Projects</h2>
                <span style={{ fontSize: '1.5rem' }}>&lt;&gt;</span>
            </div>

            {/* Carousel Container */}
            <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                padding: '2rem 0',
                overflow: 'hidden'
            }}>
                {/* Previous Button */}
                <button
                    onClick={handlePrev}
                    style={{
                        position: 'absolute',
                        left: '10%',
                        zIndex: 10,
                        backgroundColor: 'white',
                        border: 'none',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        color: '#333',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.2s, box-shadow 0.2s'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                    }}
                >
                    &lt;
                </button>

                {/* Cards Container */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1.5rem',
                    padding: '0 100px'
                }}>
                    {/* Previous Card (Partial) */}
                    <ProjectCard
                        key={`prev-${currentIndex}`}
                        title={projects[getPrevIndex()].title}
                        description={projects[getPrevIndex()].description}
                        isCenter={false}
                    />

                    {/* Center Card (Full) */}
                    <ProjectCard
                        key={`center-${currentIndex}`}
                        title={projects[currentIndex].title}
                        description={projects[currentIndex].description}
                        isCenter={true}
                    />

                    {/* Next Card (Partial) */}
                    <ProjectCard
                        key={`next-${currentIndex}`}
                        title={projects[getNextIndex()].title}
                        description={projects[getNextIndex()].description}
                        isCenter={false}
                    />
                </div>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    style={{
                        position: 'absolute',
                        right: '10%',
                        zIndex: 10,
                        backgroundColor: 'white',
                        border: 'none',
                        width: '50px',
                        height: '50px',
                        borderRadius: '50%',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        color: '#333',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'transform 0.2s, box-shadow 0.2s'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'scale(1.1)';
                        e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'scale(1)';
                        e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                    }}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Projects;
