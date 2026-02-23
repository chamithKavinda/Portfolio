import { motion } from 'framer-motion';
import { useState } from 'react';
import './skills.css';

import Frontend from './Frontend';
import Backend from './Backend';
import PhotographerSkills from './PhotographerSkills';
import ContentCreatorSkills from './ContentCreatorSkills';
import AnnouncerSkills from './AnnouncerSkills';
import UmpireSkills from './UmpireSkills';

const Skills = () => {

  const roles = [
    { id: 0, title: "As a Full Stack Developer" },
    { id: 1, title: "As a Photographer" },
    { id: 2, title: "As a Content Creator" },
    { id: 3, title: "As a Announcer" },
    { id: 4, title: "As a Cricket Umpire" },
  ];

  const [currentRole, setCurrentRole] = useState(0);

  const handleNext = () =>
    setCurrentRole((prev) => (prev + 1) % roles.length);

  const handlePrev = () =>
    setCurrentRole((prev) => (prev - 1 + roles.length) % roles.length);

  const renderRoleContent = () => {
    switch (currentRole) {
      case 0:
        return (
          <div className="skills__grid">
            <Frontend />
            <Backend />
          </div>
        );
      case 1:
        return <PhotographerSkills />;
      case 2:
        return <ContentCreatorSkills />;
      case 3:
        return <AnnouncerSkills />;
      case 4:
        return <UmpireSkills />;
      default:
        return null;
    }
  };

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">My Roles</h2>
      <span className="section__subtitle">
        {roles[currentRole].title}
      </span>

      <div className="roles__carousel">

        <motion.div
          key={currentRole}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="roles__content"
        >
          {renderRoleContent()}
        </motion.div>

        {/* Arrows */}
        <button className="roles__nav left" onClick={handlePrev}>
          <i className="uil uil-angle-left"></i>
        </button>

        <button className="roles__nav right" onClick={handleNext}>
          <i className="uil uil-angle-right"></i>
        </button>
      </div>

      {/* Dots */}
      <div className="roles__dots">
        {roles.map((_, i) => (
          <button
            key={i}
            className={`roles__dot ${i === currentRole ? 'active' : ''}`}
            onClick={() => setCurrentRole(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
