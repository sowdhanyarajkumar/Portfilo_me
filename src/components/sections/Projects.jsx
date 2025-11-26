import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, delay }) => (
    <motion.div
        className="project-card"
        style={{
            backgroundColor: 'white',
            padding: '1.5rem',
            borderRadius: '15px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'transform 0.3s ease'
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
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
    return (
        <div id="projects" style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <h2 style={{ textAlign: 'center' }}>My Projects</h2>
                <span style={{ fontSize: '1.5rem' }}>&lt;&gt;</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <ProjectCard
                    title="Fashionista"
                    description="connects Boutiques and customer to customize their Own design"
                    delay={0.1}
                />
                <ProjectCard
                    title="Skill connect"
                    description="connects job seeker and bussiness community for Blue collar Workers"
                    delay={0.2}
                />
                <ProjectCard
                    title="Documind"
                    description="AI-Powered Smart Document Organizer using N8n to Automate Documents"
                    delay={0.3}
                />
            </div>
        </div>
    );
};

export default Projects;
