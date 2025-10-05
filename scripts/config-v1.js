window.particlesConfig = {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 900 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.6 },
    size: { value: 3, random: true },
    line_linked: { enable: true, distance: 140, color: "#9bb7ff", opacity: 0.25, width: 1 },
    move: { enable: true, speed: 2, direction: "none", out_mode: "out" }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" }
    },
    modes: { grab: { distance: 140, line_linked: { opacity: 0.6 } }, push: { particles_nb: 4 } }
  },
  retina_detect: true
};
