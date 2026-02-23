import { useState, useEffect } from 'react';
import "./home.css";
import Social from './Social';
import Data from './Data';
import { motion } from 'framer-motion';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentProfile, setCurrentProfile] = useState(0);

  const profiles = [
    {
      id: 0,
      image: '/src/assets/homeImage2.jpg', 
      title: 'Full Stack Developer',
      name: 'Chamith Kavinda',
      description: 'Transforming lines of code into lifetime experiences . . . \n\nAssociate Software Engineer with a strong foundation in full-stack development, currently contributing to ERP systems and enterprise-level web solutions at Bio Foods Pvt Ltd. Proficient in Java, Spring Boot, React, Angular, MySQL, and MERN technologies, with a focus on efficient architecture, responsive UI/UX, and delivering impactful user experiences.'
    },
    {
      id: 1,
      image: '/src/assets/photographer.jpg',  
      title: 'Photographer',
      name: 'Chamith Kavinda',
      description: 'Capturing moments that tell stories . . . \n\nPassionate photographer specializing in portrait, landscape, and event photography. With an eye for detail and a commitment to creativity, I transform ordinary moments into extraordinary memories. Experienced in both digital and film photography, using professional equipment to deliver stunning visuals that resonate with emotion and artistry.'
    },
    {
      id: 2,
      image: '/src/assets/announcer2.jpg', 
      title: 'Announcer',
      name: 'Chamith Kavinda',
      description: 'Bringing events to life with words . . . \n\nDynamic and engaging announcer with experience in hosting events, ceremonies, and live programs. Known for clear articulation, stage presence, and the ability to connect with diverse audiences. Skilled at creating memorable experiences through professional commentary and interactive engagement.'
    },
    {
      id: 3,
      image: '/src/assets/contentCreator.jpg', 
      title: 'Content Creator',
      name: 'Chamith Kavinda',
      description: 'Crafting digital narratives that inspire and inform . . . \n\nCreative content strategist and storyteller dedicated to producing high-quality digital media. Leveraging a unique blend of technical expertise and visual artistry, I create engaging content across social platforms, blogs, and video. From tech tutorials and coding insights to cinematic visual stories, I focus on delivering value-driven content that connects with global audiences and builds meaningful digital communities.'
    },
    {
      id: 4,
      image: '/src/assets/umpire.jpg',
      title: 'Cricket Umpire',
      name: 'Chamith Kavinda',
      description: 'Maintaining the spirit and integrity of the game . . . \n\nFocused and disciplined cricket official with a deep understanding of the Laws of Cricket. Committed to ensuring fair play, accuracy in decision-making, and effective match management on the field. With sharp concentration and a calm presence, I strive to provide an impartial environment where the passion of the game can thrive.'
    }
  ];

  const handleNext = () => setCurrentProfile((prev) => (prev + 1) % profiles.length);
  const handlePrev = () => setCurrentProfile((prev) => (prev - 1 + profiles.length) % profiles.length);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfile((prev) => (prev + 1) % profiles.length);
    }, 20000); 

    return () => clearInterval(interval);
  }, [profiles.length]);

  const opacity = scrollY < 300 ? 1 - scrollY / 300 : 0; 
  const scale = scrollY < 100 ? 1 - scrollY / 1000 : 0.7; 

  const handleDotClick = (index) => {
    setCurrentProfile(index);
  };

  return (
    <section className="home section" id="home">
      <div className="home__container container">
        <Social />

      <div className="carousel__viewport"  style={{ opacity: opacity, transform: `scale(${scale})`, transition: 'transform 0.9s ease-out' }}> 
        <div className="carousel__track">
            {profiles.map((profile, index) => {
              const isCenter = index === currentProfile;
              const isLeft = index === (currentProfile - 1 + profiles.length) % profiles.length;
              const isRight = index === (currentProfile + 1) % profiles.length;

              const variants = {
                center: { x: 0, scale: 1, zIndex: 10, opacity: 1, filter: "blur(0px)" },
                left: { x: -220, scale: 0.7, zIndex: 5, opacity: 0.4, filter: "blur(4px)" },
                right: { x: 220, scale: 0.7, zIndex: 5, opacity: 0.4, filter: "blur(4px)" },
                hidden: { x: 0, scale: 0.2, zIndex: 0, opacity: 0, filter: "blur(10px)" }
              };

              let status = "hidden";
              if (isCenter) status = "center";
              else if (isLeft) status = "left";
              else if (isRight) status = "right";

              return (
                <motion.div
                  key={profile.id}
                  className="carousel__item"
                  animate={variants[status]}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                >
                  <div 
                    className="home__img" 
                    style={{ backgroundImage: `url(${profile.image})` }} 
                  />
                  
                  {isCenter && (
                    <motion.div 
                      className="carousel__data-box"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <Data 
                        title={profile.title}
                        name={profile.name}
                        description={profile.description}
                      />
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <button className="nav-btn left" onClick={handlePrev}><i className="uil uil-angle-left"></i></button>
          <button className="nav-btn right" onClick={handleNext}><i className="uil uil-angle-right"></i></button>
        </div>

          <div className="carousel__dots">
            {profiles.map((_, i) => (
              <motion.button
                key={i}
                className="dot"
                onClick={() => setCurrentProfile(i)}
                animate={{
                  width: i === currentProfile ? 36 : 12,
                  backgroundColor:
                    i === currentProfile ? "var(--title-color)" : "#d1d1d1",
                  scale: i === currentProfile ? 1.2 : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              />
            ))}
          </div>
      </div>
    </section>
  );
};

export default Home;