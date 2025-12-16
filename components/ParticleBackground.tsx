'use client';
import { useEffect } from "react";

export default function ParticleBackground() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/particles.js";
    script.async = true;
    script.onload = () => {
      // @ts-ignore
      particlesJS("particles-js", {
        particles: {
          number: { value: 120, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle", stroke: { width: 0, color: "#ffffff" } },
          opacity: { value: 0.9, random: false },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.8, width: 1.2 },
          move: { enable: true, speed: 6, direction: "none", out_mode: "out" }
        },
        interactivity: {
          detect_on: "canvas",
          events: { onhover: { enable: false }, onclick: { enable: false }, resize: true },
          modes: {}
        },
        retina_detect: true
      });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="particles-js"
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: -1,
        background: "#000000",
      }}
    />
  );
}
