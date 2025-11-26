import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';

const WorkItem = ({ title, subtitle }) => (
    <div style={{
        backgroundColor: '#e8e6ea',
        padding: '1.5rem',
        borderRadius: '15px',
        marginBottom: '1rem'
    }}>
        <h4 style={{ marginBottom: '0.5rem' }}>{title}</h4>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{subtitle}</p>
    </div>
);

const Work = () => {
    return (
        <motion.div
            id="work"
            style={{
                backgroundColor: '#f3f0f5',
                padding: '2rem',
                borderRadius: '20px',
                marginBottom: '2rem',
                border: '2px solid #3b82f6' /* Blue border as seen in image */
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <h2 style={{ textAlign: 'center' }}>work</h2>
                <FaBriefcase size={24} />
            </div>

            <WorkItem
                title="worked as Full Stack Trainee - in nexgen"
                subtitle="Nexopia to build Frontend and sematic API"
            />
            <WorkItem
                title="worked As AI/ML Architect"
                subtitle="In - Tautology build a agentic Ai Agents"
            />
        </motion.div>
    );
};

export default Work;
