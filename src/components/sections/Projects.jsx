import React from 'react';

const ProjectCard = ({ title, description }) => (
    <div className="project-card" style={{
        backgroundColor: 'white',
        padding: '1.5rem',
        borderRadius: '15px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.3s ease'
    }}>
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
    </div>
);

const Projects = () => {
    return (
        <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <h2 style={{ textAlign: 'center' }}>My Projects</h2>
                <span style={{ fontSize: '1.5rem' }}>&lt;&gt;</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                <ProjectCard
                    title="Fashionista"
                    description="connects Boutiques and customer to customize their Own design"
                />
                <ProjectCard
                    title="Skill connect"
                    description="connects job seeker and bussiness community for Blue collar Workers"
                />
                <ProjectCard
                    title="Documind"
                    description="AI-Powered Smart Document Organizer using N8n to Automate Documents"
                />
            </div>
        </div>
    );
};

export default Projects;
