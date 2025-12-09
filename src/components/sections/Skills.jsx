import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, percentage, showToggle = true, delay = 0 }) => (
    <motion.div
        style={{ marginBottom: '1rem' }}
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: delay }}
        viewport={{ once: true }}
    >
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ fontWeight: '500', fontSize: '0.9rem' }}>{skill}</span>
        </div>
        <div style={{ width: '100%', height: '10px', backgroundColor: 'white', borderRadius: '5px', position: 'relative', display: 'flex', alignItems: 'center' }}>
            <motion.div
                style={{
                    height: '100%',
                    backgroundColor: 'var(--accent-yellow)',
                    borderRadius: '5px',
                    position: 'relative'
                }}
                initial={{ width: "0%" }}
                whileInView={{
                    width: ["0%", "100%", "0%", `${percentage}%`]
                }}
                transition={{
                    duration: 3,
                    delay: delay,
                    ease: "easeInOut",
                    times: [0, 0.4, 0.7, 1]
                }}
                viewport={{ once: false }}
            >
                {showToggle && (
                    <motion.div
                        style={{
                            width: '16px',
                            height: '16px',
                            backgroundColor: 'white',
                            borderRadius: '50%',
                            position: 'absolute',
                            right: '0',
                            top: '50%',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                        initial={{ x: 8, y: "-50%" }}
                        animate={{ x: [8, 13, 8] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    ></motion.div>
                )}
            </motion.div>
        </div>
    </motion.div>
);

const Skills = () => {
    return (
        <div id="skills" style={{
            backgroundColor: '#e8e6ea',
            padding: '2rem',
            borderRadius: '20px',
            marginTop: '2rem',
            overflow: 'hidden'
        }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontWeight: 'bold' }}>Skill</h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                    <SkillBar skill="HTML" percentage={85} delay={0.1} />
                    <SkillBar skill="CSS" percentage={80} delay={0.2} />
                    <SkillBar skill="JAVASCRIPT" percentage={70} delay={0.3} />
                    <SkillBar skill="REACT" percentage={60} delay={0.4} />
                    <SkillBar skill="MONGO DB" percentage={75} delay={0.5} />
                </div>
                <div>
                    <SkillBar skill="AI/ML" percentage={40} delay={0.6} />
                    <div style={{ marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span style={{ fontWeight: '500', fontSize: '0.9rem' }}>AGENTIC AI</span>
                        </div>
                        <div style={{ width: '100%', height: '10px', backgroundColor: 'transparent', borderRadius: '5px', position: 'relative' }}>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'var(--accent-yellow)',
                                borderRadius: '5px',
                                position: 'relative'
                            }}>
                                <div style={{
                                    width: '16px',
                                    height: '16px',
                                    backgroundColor: 'white',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    right: '0',
                                    top: '50%',
                                    transform: 'translate(50%, -50%)',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                                }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
