import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        
        particles: {
          number: {
            value: 50,
            density: { enable: true, area: 800 },
          },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: {
            value: 0.4,
            random: false,
          },
          size: {
            value: { min: 2, max: 4 },
            random: true,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            straight: false,
            outModes: { default: "out" },
          },
          links: {
            enable: true,
            distance: 120,
            color: "#ffffff",
            opacity: 0.3,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" }, // Instead of push, use repulse to avoid adding new particles
            onClick: { enable: false }, // Disable adding particles on click to prevent buildup
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
