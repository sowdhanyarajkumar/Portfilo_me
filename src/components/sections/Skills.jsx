import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ name, level, index }) => (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        style={{ marginBottom: '1rem' }}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span>{name}</span>
        </div>
        <motion.div
            style={{ width: '100%', height: '10px', backgroundColor: '#e0e0e0', borderRadius: '5px' }}
            whileHover={{ scale: 1.02 }}
        >
            <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${level}%` }}
                transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                style={{
                    height: '100%',
                    backgroundColor: 'var(--accent-yellow)',
                    borderRadius: '5px',
                    position: 'relative'
                }}
            >
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                    }}
                    style={{
                        position: 'absolute',
                        right: '-5px',
                        top: '-3px',
                        width: '16px',
                        height: '16px',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                ></motion.div>
            </motion.div>
        </motion.div>
    </motion.div>
);

const Skills = () => {
    return (
        <div style={{
            backgroundColor: '#e8e6ea',
            padding: '2rem',
            borderRadius: '20px',
            marginBottom: '2rem'
        }}>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ textAlign: 'center', marginBottom: '2rem' }}
            >
                Skill
            </motion.h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                    <SkillBar name="HTML" level={90} index={0} />
                    <SkillBar name="CSS" level={85} index={1} />
                    <SkillBar name="JAVASCRIPT" level={80} index={2} />
                    <SkillBar name="REACT" level={75} index={3} />
                    <SkillBar name="MONGO DB" level={70} index={4} />
                </div>
                <div>
                    <SkillBar name="AI/ML" level={60} index={5} />
                    <SkillBar name="AGENTIC AI" level={85} index={6} />
                </div>
            </div>
        </div>
    );
};

export default Skills;
