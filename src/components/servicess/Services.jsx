import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import "./services.css";

const fullStackServices = [
  {
    icon: "uil uil-arrow",
    title: "Web Designs",
    tabIndex: 1,
    description: "Creating visually appealing and user-friendly websites tailored to your needs.",
    items: [
      "Web Page development.",
      "I develop the user interfaces.",
      "I create UX element interactions.",
      "Portfolio & showcase Design",
      "Blog or Magazine Design.",
    ],
  },
  {
    icon: "uil uil-edit",
    title: "UI/UX Designs",
    tabIndex: 2,
    description: "Creating user-centered designs that are visually appealing and intuitive to interact with.",
    items: [
      "I create Wireframe and Prototypes",
      "I design User Interfaces.",
      "I create UX element interactions.",
      "Mobile App designs.",
      "Designs and Mockups of products for companies.",
    ],
  },
  {
    icon: "uil uil-web-grid",
    title: "Software Development",
    tabIndex: 3,
    description: "The process of designing, creating, deploying, and maintaining software solutions to address specific user needs or business challenges.",
    items: [
      "Create REST API.",
      "Full-Cycle Software Development.",
      "Enterprise Software Development.",
      "Security Software Development.",
      "Game Development.",
    ],
  },
];

const photographerServices = [
  {
    icon: "uil uil-camera",
    title: "Portrait Photography",
    tabIndex: 1,
    description: "Capturing expressive, high-quality portraits that tell a story.",
    items: [
      "Professional portrait sessions.",
      "Studio & outdoor settings.",
      "Corporate headshots.",
      "Family & individual portraits.",
      "Creative conceptual shoots.",
    ],
  },
  {
    icon: "uil uil-image",
    title: "Event Photography",
    tabIndex: 2,
    description: "Documenting your special moments with a creative eye and professional quality.",
    items: [
      "Corporate events & conferences.",
      "Sports & action photography.",
      "Birthday & private events.",
      "Live performance coverage.",
    ],
  },
  {
    icon: "uil uil-sliders-v",
    title: "Photo Editing",
    tabIndex: 3,
    description: "Transforming raw images into stunning, polished visuals using industry-leading tools.",
    items: [
      "Lightroom color grading.",
      "Retouching & skin correction.",
      "Background removal & compositing.",
      "Cinematic tone edits.",
      "Batch processing & delivery.",
    ],
  },
];

const contentCreatorServices = [
  {
    icon: "uil uil-video",
    title: "Video Content",
    tabIndex: 1,
    description: "Producing engaging video content that captivates your audience across platforms.",
    items: [
      "Short-form reels & TikToks.",
      "Video scripting & storyboarding.",
      "On-camera presentation.",
      "Voiceover & narration.",
    ],
  },
  {
    icon: "uil uil-calendar-alt",
    title: "Event Organizing",
    tabIndex: 2,
    description: "Planning and executing memorable events that engage audiences and deliver seamless experiences.",
    items: [
      "Corporate events & conferences.",
      "Weddings & private celebrations.",
      "Product launches & brand activations.",
      "Exhibitions & trade shows.",
      "End-to-end event planning & coordination.",
    ],
  },  
  {
    icon: "uil uil-instagram",
    title: "Social Media",
    tabIndex: 3,
    description: "Growing and engaging your social media presence with strategic, high-quality content.",
    items: [
      "Content calendar planning.",
      "Instagram & Facebook management.",
      "Audience engagement strategies.",
      "Analytics & performance review.",
      "Brand consistency across platforms.",
    ],
  },
];

const announcerServices = [
  {
    icon: "uil uil-microphone",
    title: "Live Announcing",
    tabIndex: 1,
    description: "Delivering energetic and professional live commentary for events of all scales.",
    items: [
      "Sports event announcing.",
      "Corporate event hosting.",
      "Live ceremony MC.",
      "Award show presenting.",
      "Crowd engagement & hype.",
    ],
  },
  {
    icon: "uil uil-volume",
    title: "Voiceover Services",
    tabIndex: 2,
    description: "Professional voiceover recordings for media, ads, and digital content.",
    items: [
      "Commercial & ad voiceovers.",
      "Documentary narration.",
      "Podcast intro & outros.",
      "E-learning & training audio.",
      "Promo & highlight reels.",
    ],
  },
  {
    icon: "uil uil-video",
    title: "Broadcasting",
    tabIndex: 3,
    description: "Broadcasting services for radio, online streams, and television productions.",
    items: [
      "Radio broadcasting.",
      "Online stream commentary.",
      "Match & game day coverage.",
      "Post-game analysis presenting.",
      "Live show hosting.",
    ],
  },
];

const umpireServices = [
  {
    icon: "uil uil-shield-check",
    title: "Match Officiating",
    tabIndex: 1,
    description: "Providing fair, confident, and professional umpiring for cricket matches at all levels.",
    items: [
      "On-field umpiring.",
      "Decision-making under pressure.",
      "LBW & dismissal judgments.",
      "Over & boundary management.",
      "Player conduct management.",
    ],
  },
  {
    icon: "uil uil-book-open",
    title: "Rules & Regulations",
    tabIndex: 2,
    description: "Deep knowledge of cricket laws to ensure fair and accurate match officiating.",
    items: [
      "ICC & local board regulations.",
      "No-ball & wide interpretations.",
      "DRS & review support.",
      "Law application in edge cases.",
      "Scorecard & record keeping.",
    ],
  },
  {
    icon: "uil uil-clipboard-notes",
    title: "Cricket Match Scorering",
    tabIndex: 3,
    description: "Delivering accurate, professional, and technology-driven cricket scoring services to ensure reliable match records and performance analysis.",
    items: [
      "Live ball-by-ball scoring & digital scorekeeping.",
      "Scorecard preparation & match summary reports.",
      "Statistics tracking & player performance analysis.",
      "Coordination with umpires & match officials.",
      "Scoring software training & DLS calculations.",
    ],
  },  
];

const roles = [
  { id: 0, title: "As a Full Stack Developer", services: fullStackServices },
  { id: 1, title: "As a Photographer", services: photographerServices },
  { id: 2, title: "As a Content Creator", services: contentCreatorServices },
  { id: 3, title: "As an Announcer", services: announcerServices },
  { id: 4, title: "As a Cricket Umpire", services: umpireServices },
];

// ─── ServiceCards Component ───────────────────────────────────────────────────

const ServiceCards = ({ services }) => {
  const [toggleState, setToggleState] = useState(0);

  return (
    <div className="services__container container grid">
      {services.map((service) => (
        <div className="services__content" key={service.tabIndex}>
          <div>
            <i className={`${service.icon} services__icon`}></i>
            <h3 className="services__title">
              {service.title.includes(" ") ? (
                <>
                  {service.title.split(" ").slice(0, Math.ceil(service.title.split(" ").length / 2)).join(" ")}
                  <br />
                  {service.title.split(" ").slice(Math.ceil(service.title.split(" ").length / 2)).join(" ")}
                </>
              ) : service.title}
            </h3>
          </div>
          <span className="services__button" onClick={() => setToggleState(service.tabIndex)}>
            View More <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className={toggleState === service.tabIndex ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => setToggleState(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">{service.title}</h3>
              <p className="services__modal-description">{service.description}</p>
              <ul className="services__modal-services grid">
                {service.items.map((item, idx) => (
                  <li className="services__modal-service" key={idx}>
                    <i className="uil uil-check-circle services__modal-icon"></i>
                    <p className="services__modal-info">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// ─── Main Services Component ──────────────────────────────────────────────────

const Services = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleNext = () => setCurrentRole((prev) => (prev + 1) % roles.length);
  const handlePrev = () => setCurrentRole((prev) => (prev - 1 + roles.length) % roles.length);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      className={`services section ${isVisible ? "active-section" : ""}`}
      id="services"
      ref={sectionRef}
    >
      <h2 className="section__title">Solutions</h2>
      <span className="section__subtitle">{roles[currentRole].title}</span>

      <div className="roles__carousel">
        <motion.div
          key={currentRole}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="roles__content"
        >
          <ServiceCards services={roles[currentRole].services} />
        </motion.div>

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
            className={`roles__dot ${i === currentRole ? "active" : ""}`}
            onClick={() => setCurrentRole(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;