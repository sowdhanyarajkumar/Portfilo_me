import React from 'react';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Work from './sections/Work';

const CenterContent = () => {
    return (
        <div className="center-content" style={{
            flex: 1,
            overflowY: 'auto',
            padding: '2rem',
            height: '100%',
            scrollBehavior: 'smooth'
        }}>
            <div id="hero"><Hero /></div>
            <div id="skills"><Skills /></div>
            <div id="projects"><Projects /></div>
            <div id="education"><Education /></div>
            <div id="work"><Work /></div>
        </div>
    );
};

export default CenterContent;
