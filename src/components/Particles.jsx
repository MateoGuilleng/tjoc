"use client";
import React, { useEffect } from "react";
import { loadFull } from "tsparticles";
import { tsParticles } from "tsparticles-engine";

const ParticleBackground = () => {
  useEffect(() => {
    loadFull(tsParticles);
    tsParticles.load("tsparticles", {
      background: {
        color: "#000000",
      },
      particles: {
        number: {
          value: 100,
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: 3,
        },
        move: {
          enable: true,
          speed: 2,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          repulse: {
            distance: 100,
          },
          push: {
            particles_nb: 4,
          },
        },
      },
    });
  }, []);

  return (
    <div
      id="tsparticles"
      style={{ position: "absolute", width: "100%", height: "100%" }}
    />
  );
};

export default ParticleBackground;
