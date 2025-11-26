import React from 'react';
import { motion } from 'framer-motion';

const EducationItem = ({ year, title, subtitle }) => (
    <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', position: 'relative' }}>
        <div style={{ minWidth: '100px' }}>
            <span style={{
                backgroundColor: 'var(--accent-yellow)',
                padding: '0.3rem 0.8rem',
                borderRadius: '5px',
                fontSize: '0.8rem',
                fontWeight: 'bold'
            }}>{year}</span>
        </div>
        <div style={{
            borderLeft: '2px solid #ddd',
            paddingLeft: '2rem',
            position: 'relative'
        }}>
            <h4 style={{ marginBottom: '0.5rem' }}>{title}</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{subtitle}</p>
        </div>
    </div>
);

const Education = () => {
    return (
        <motion.div
            id="education"
            style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '20px',
                marginBottom: '2rem'
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Education</h2>
            <EducationItem
                year="2021-2022"
                title="10std - Amala girls Hr sec School ,Trichy - 80%"
                subtitle=""
            />
            <EducationItem
                year="2024-2025"
                title="12 std - Amala girls Hr sec School ,Trichy - 90.2%"
                subtitle=""
            />
            <EducationItem
                year="2024 - 2028"
                title="B.E - computer Science and engineering"
                subtitle="K.S.R -college of Engineering ,Tiruchengode"
            />
        </motion.div>
    );
};

export default Education;
