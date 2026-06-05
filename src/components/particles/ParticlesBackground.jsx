import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        background: {
          color: "transparent",
        },
        particles: {
          number: { value: 80 },
          color: { value: "#888888" },   
          links: {
            enable: true,
            distance: 150,
            color: "#888888",
          },
          move: {
            enable: true,
            speed: 2,
          },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
        },
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    />
  );
};

export default ParticlesBackground;