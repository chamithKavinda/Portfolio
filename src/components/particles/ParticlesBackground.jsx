import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "transparent"
        },
        particles: {
          number: {
            value: 80
          },
          color: {
            value: "#ffffff"
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff"
          },
          move: {
            enable: true,
            speed: 2
          },
          opacity: {
            value: 0.5
          },
          size: {
            value: { min: 1, max: 3 }
          }
        }
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1
      }}
    />
  );
};

export default ParticlesBackground;
