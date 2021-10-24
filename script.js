"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  loadPortraitSVG();
  addSplashParallax();
  loadAnimations();
});

async function loadPortraitSVG() {
  fetch("/svg/portrait.svg")
    .then((res) => res.text())
    .then((portraitSVG) => {
      document.querySelector(".about-portrait").innerHTML = portraitSVG;
      addPortraitAnimation();
    });
}

function addPortraitAnimation() {
  gsap.to("#portrait-svg path", {
    strokeDashoffset: "0",
    duration: 2,
    ease: "power1.in",
    scrollTrigger: {
      trigger: "#section-about",
      start: "top 70%",
    },
  });
}

function addSplashParallax() {
  gsap.to(".layer-moon", {
    y: "180%",
    ease: "none",
    scrollTrigger: {
      trigger: "none",
      scrub: true,
    },
  });

  gsap.to(".layer-mountain-far", {
    y: "160%",
    ease: "none",
    scrollTrigger: {
      trigger: "none",
      scrub: true,
    },
  });

  gsap.to(".layer-mountain-near", {
    y: "140%",
    ease: "none",
    scrollTrigger: {
      trigger: "none",
      scrub: true,
    },
  });

  gsap.to(".layer-trees", {
    y: "120%",
    ease: "none",
    scrollTrigger: {
      trigger: "none",
      scrub: true,
    },
  });

  gsap.to(".layer-mountain-near-reflection", {
    y: "120%",
    ease: "none",
    scrollTrigger: {
      trigger: "none",
      scrub: true,
    },
  });

  gsap.to(".layer-mountain-far-reflection", {
    y: "120%",
    ease: "none",
    scrollTrigger: {
      trigger: "none",
      scrub: true,
    },
  });

  gsap.to(".layer-reflection", {
    y: "120%",
    ease: "none",
    scrollTrigger: {
      trigger: "none",
      scrub: true,
    },
  });

  gsap.to(".layer-foreground", {
    y: "10%",
    scrollTrigger: {
      trigger: "none",
      scrub: true,
    },
  });
}

function loadAnimations() {
  gsap.to("#header-background", {
    y: "0%",
    scrollTrigger: {
      trigger: "#section-splash",
      start: "0%",
      end: "20%",
      scrub: true,
    },
  });

  gsap.to("#header-logo", {
    x: "0%",
    ease: "linear",
    scrollTrigger: {
      trigger: "#section-splash",
      start: "50% 50%",
      scrub: true,
    },
  });

  gsap.to("#splash-text-logo", {
    x: "150%",
    ease: "linear",
    scrollTrigger: {
      trigger: "#section-splash",
      start: "50% 50%",
      scrub: true,
    },
  });

  gsap.to(".about-bio-text-slide", {
    x: "0%",
    duration: 1,
    ease: "back.out(1.2)",
    scrollTrigger: {
      trigger: "#section-about",
      start: "top 70%",
    },
  });

  gsap.to(".letter", {
    duration: 0.5,
    yPercent: "10",
    ease: "linear",
    stagger: {
      each: 0.1,
      repeat: Infinity,
      yoyo: true,
    },
  });

  gsap.to(".project-hogwarts .left", {
    x: "0%",
    duration: 1,
    ease: "back.out(1.2)",
    scrollTrigger: {
      trigger: ".project-hogwarts",
      start: "top 70%",
    },
  });

  gsap.to(".project-hogwarts .right", {
    x: "0%",
    duration: 1,
    ease: "back.out(1.2)",
    scrollTrigger: {
      trigger: ".project-hogwarts",
      start: "top 70%",
    },
  });

  gsap.to(".project-pablos .left", {
    x: "0%",
    duration: 1,
    ease: "back.out(1.2)",
    scrollTrigger: {
      trigger: ".project-pablos",
      start: "top 70%",
    },
  });

  gsap.to(".project-pablos .right", {
    x: "0%",
    duration: 1,
    ease: "back.out(1.2)",
    scrollTrigger: {
      trigger: ".project-pablos",
      start: "top 70%",
    },
  });

  gsap.to(".project-kaysen .left", {
    x: "0%",
    duration: 1,
    ease: "back.out(1.2)",
    scrollTrigger: {
      trigger: ".project-kaysen",
      start: "top 70%",
    },
  });

  gsap.to(".project-kaysen .right", {
    x: "0%",
    duration: 1,
    ease: "back.out(1.2)",
    scrollTrigger: {
      trigger: ".project-kaysen",
      start: "top 70%",
    },
  });
}
