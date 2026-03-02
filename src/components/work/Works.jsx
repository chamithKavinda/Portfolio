import { useEffect, useState } from 'react';
import {
  devProjectsData, devProjectsNav,
  photographerProjectsData, photographerProjectsNav,
  contentProjectsData, contentProjectsNav,
  announcerProjectsData, announcerProjectsNav,
  umpireProjectsData, umpireProjectsNav,
} from './Data';
import WorkItems from './WorkItems';

const roles = [
  {
    id: 0,
    title: 'As a Full Stack Developer',
    data: devProjectsData,
    nav: devProjectsNav,
    defaultCategory: 'web',
  },
  {
    id: 1,
    title: 'As a Photographer',
    data: photographerProjectsData,
    nav: photographerProjectsNav,
    defaultCategory: 'events',
  },
  {
    id: 2,
    title: 'As a Content Creator',
    data: contentProjectsData,
    nav: contentProjectsNav,
    defaultCategory: 'youtube',
  },
  {
    id: 3,
    title: 'As an Announcer',
    data: announcerProjectsData,
    nav: announcerProjectsNav,
    defaultCategory: 'sports',
  },
  {
    id: 4,
    title: 'As a Cricket Umpire',
    data: umpireProjectsData,
    nav: umpireProjectsNav,
    defaultCategory: 'matches',
  },
];

const RoleProjects = ({ role }) => {
  const [activeCategory, setActiveCategory] = useState(role.defaultCategory);
  const [activeIndex, setActiveIndex] = useState(0);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setActiveCategory(role.defaultCategory);
    setActiveIndex(0);
  }, [role]);

  useEffect(() => {
    setProjects(role.data.filter((p) => p.category === activeCategory));
  }, [activeCategory, role]);

  const handleClick = (e, index) => {
    setActiveCategory(e.target.textContent.toLowerCase());
    setActiveIndex(index);
  };

  return (
    <div>
      <div className="work__filters">
        {role.nav.map((item, index) => (
          <span
            key={index}
            onClick={(e) => handleClick(e, index)}
            className={`${activeIndex === index ? 'active-work' : ''} work__item`}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => (
          <WorkItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

function Works() {
  const [currentRole, setCurrentRole] = useState(0);

  const handleNext = () => setCurrentRole((prev) => (prev + 1) % roles.length);
  const handlePrev = () => setCurrentRole((prev) => (prev - 1 + roles.length) % roles.length);

  return (
    <div>
      {/* Role subtitle */}
      <p className="work__role-subtitle section__subtitle">
        {roles[currentRole].title}
      </p>

      {/* Carousel wrapper */}
      <div className="work__carousel">
        <button className="roles__nav left" onClick={handlePrev}>
          <i className="uil uil-angle-left"></i>
        </button>

        <div className="work__carousel-content">
          <RoleProjects key={currentRole} role={roles[currentRole]} />
        </div>

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
    </div>
  );
}

export default Works;