import React from 'react';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Work from './sections/Work';
import Contact from './sections/Contact';

const CenterContent = () => {
    return (
        <div className="center-content" style={{
            flex: 1,
            height: '100%',
            overflowY: 'auto',
            padding: '2rem',
            backgroundColor: 'var(--bg-primary)'
        }}>
            <Hero />
            <Skills />
            <Projects />
            <Education />
            <Work />
            <Contact />
        </div>
    );
};

export default CenterContent;
