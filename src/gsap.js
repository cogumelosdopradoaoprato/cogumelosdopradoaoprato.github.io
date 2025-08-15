gsap.registerPlugin(ScrollTrigger);       // Plugin for scroll animations

// Detext if the width is less or equal to 768px, to know if the viewport is Desktop or Mobile
function isMobile() {
  return window.innerWidth <= 768;
}

// Depending on the viewport size, load one animation or another
if (isMobile()) {

  // When page is loaded, show circle in the middle and then move it to the bottom
  gsap.to(".circle-image", {
      duration: 1.5,
      scale: 0.6,
      ease: "power3.out",
      onComplete: () => {
        gsap.to(".circle-image", { duration: 1, scale: 1 })
        gsap.to(".circle-container", { duration: 1, bottom: "-65%" })
      }
  });

  // Rotate the circle as the user scrolls
  gsap.fromTo(
    ".circle-image",
    {
      rotation: "0", // Start at 0% rotation
    },
    {
      rotation: "288", // Rotate a full circle
      ease: "none",
      scrollTrigger: {
        trigger: ".producao .container",
        start: "top top",
        end: "100% bottom",
        scrub: true,
        smooth: 1,
        //markers: true,
      },
    }
  );

  /*-----------------------------------------------
    The following animations are for each individual
    section of the scroll.
    -----------------------------------------------*/


  /* First content block:
     When reached, fade-in and scale-up the content */
  gsap.fromTo(
    ".content.first",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-first",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* When in viewport, move the clouds from bottom to top */
  gsap.fromTo(
    ".section-first .parallax .clouds-image",
    {
      y: '100%',
    },
    {
      y: '-40%',
      duration: 3,
      delay: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-first",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* When in viewport, move the front grass from bottom to top */
  gsap.fromTo(
    ".section-first .parallax .grass-image-front",
    {
      y: '100%',
    },
    {
      y: '0%',
      duration: 2,
      delay: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-first",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );
  

  /* When in viewport, move the back grass from bottom to top */
  gsap.fromTo(
    ".section-first .parallax .grass-image-back",
    {
      y: '100%',
    },
    {
      y: '0%',
      duration: 2.5,
      delay: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-first",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

    /* When in viewport, move the grass foliage from bottom to top */
  gsap.fromTo(
    ".section-first .parallax .grass-image-foliage",
    {
      y: '100%',
    },
    {
      y: '-25%',
      duration: 3,
      delay: 4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-first",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* When in viewport, move the grass extra from bottom to top */
  gsap.fromTo(
    ".section-first .parallax .grass-image-extra",
    {
      y: '100%',
    },
    {
      y: '-25%',
      duration: 3,
      delay: 4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-first",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* Second content block:
     When reached, fade-in and scale-up the content */
  gsap.fromTo(
    ".content.second",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-second",
        start: "top 40%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );


  /* When in viewport, move the clouds from bottom to top */
  gsap.fromTo(
    ".section-second .parallax .clouds-image",
    {
      y: '100%',
    },
    {
      y: '20%',
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-second",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* Third content block:
     When reached, fade-in and scale-up the content */
  gsap.fromTo(
    ".content.third",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-third",
        start: "top 40%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* Fourth content block:
     When reached, fade-in and scale-up the content */
  gsap.fromTo(
    ".content.fourth",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-fourth",
        start: "top 40%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* Fifth content block:
     When reached, fade-in and scale-up the content */
  gsap.fromTo(
    ".content.fifth",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-fifth",
        start: "top 40%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );
  
} else {

  // When page is loaded, show circle in the middle and then move it to the bottom
  gsap.to(".circle-image", {
    duration: 1.5,
    scale: 0.6,
    ease: "power3.out",
    onComplete: () => {
      gsap.to(".circle-image", { duration: 1, scale: 1 })
      gsap.to(".circle-container", { duration: 1, bottom: "-1200px" })
    }
  });

  // Rotate the circle as the user scrolls
  gsap.fromTo(
    ".circle-image",
    {
      rotation: "0", 
    },
    {
      rotation: "288", 
      ease: "none",
      scrollTrigger: {
        trigger: ".producao .container",
        start: "top top",
        end: "100% bottom",
        scrub: 0.2,
        smooth: 1,
        //markers: true,
      },
    }
  );

  /*-----------------------------------------------
    The following animations are for each individual
    section of the scroll.
    -----------------------------------------------*/


  /* First content block:
     When reached, fade-in and scale-up the content */
  gsap.fromTo(
    ".content.first",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      delay: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-first",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* When in viewport, move the clouds from bottom to top */
  gsap.fromTo(
    ".section-first .parallax .clouds-image",
    {
      y: '100%',
    },
    {
      y: '20%',
      duration: 3.5,
      delay: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-first",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* When in viewport, move the front grass from bottom to top */
  gsap.fromTo(
    ".section-first .parallax .grass-image-front",
    {
      y: '100%',
    },
    {
      y: '0%',
      duration: 2,
      delay: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-first",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );
  

  /* When in viewport, move the back grass from bottom to top */
  gsap.fromTo(
    ".section-first .parallax .grass-image-back",
    {
      y: '100%',
    },
    {
      y: '0%',
      duration: 2.5,
      delay: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-first",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );
  

  /* When in viewport, move the grass foliage from bottom to top */
  gsap.fromTo(
    ".section-first .parallax .grass-image-foliage",
    {
      y: '100%',
    },
    {
      y: '0%',
      duration: 3,
      delay: 4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-first",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* When in viewport, move the grass extra from bottom to top */
  gsap.fromTo(
    ".section-first .parallax .grass-image-extra",
    {
      y: '100%',
    },
    {
      y: '0%',
      duration: 3,
      delay: 4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-first",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );


  /* Second content block:
     When reached, fade-in and scale-up the content */
  gsap.fromTo(
    ".content.second",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-second",
        start: "top 40%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* When in viewport, move the clouds from bottom to top */
  gsap.fromTo(
    ".section-second .parallax .clouds-image",
    {
      y: '100%',
    },
    {
      y: '20%',
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-second",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* When in viewport, move the front grass from bottom to top */
  gsap.fromTo(
    ".section-second .parallax .grass-image-front",
    {
      y: '100%',
    },
    {
      y: '0%',
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-second",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* When in viewport, move the back grass from bottom to top */
  gsap.fromTo(
    ".section-second .parallax .grass-image-back",
    {
      y: '100%',
    },
    {
      y: '0%',
      duration: 4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-second",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* When in viewport, move the grass foliage from bottom to top */
  gsap.fromTo(
    ".section-second .parallax .grass-image-foliage",
    {
      y: '100%',
    },
    {
      y: '0%',
      duration: 4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-second",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* When in viewport, move the grass extra from bottom to top */
  gsap.fromTo(
    ".section-second .parallax .grass-image-extra",
    {
      y: '100%',
    },
    {
      y: '0%',
      duration: 4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-second",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );


  /* Third content block:
     When reached, fade-in and scale-up the content */
  gsap.fromTo(
    ".content.third",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-third",
        start: "top 40%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* When in viewport, move the floor from bottom to top */
  gsap.fromTo(
    ".section-third .parallax .floor-image",
    {
      y: '100%',
    },
    {
      y: '0%',
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-third",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* When in viewport, move the furniture 1 from bottom to top */
  gsap.fromTo(
    ".section-third .parallax .floor-image-furniture-1",
    {
      x: '-100%',
    },
    {
      x: '0%',
      duration: 4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-third",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* When in viewport, move the furniture 2 from bottom to top */
  gsap.fromTo(
    ".section-third .parallax .floor-image-furniture-2",
    {
      x: '100%',
    },
    {
      x: '0%',
      duration: 4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-third",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* Fourth content block:
     When reached, fade-in and scale-up the content */
  gsap.fromTo(
    ".content.fourth",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-fourth",
        start: "top 40%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

/* When in viewport, move the floor from bottom to top */
gsap.fromTo(
  ".section-fourth .parallax .floor-image",
  {
    y: '100%',
  },
  {
    y: '0%',
    duration: 2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section-fourth",
      start: "top 20%",
      end: "bottom 60%",
      scrub: false,
      toggleActions: "play reverse play reverse", // scales in and out on scroll
      //markers: true
    }
  }
);

/* When in viewport, move the furniture 1 from bottom to top */
gsap.fromTo(
  ".section-fourth .parallax .floor-image-furniture-1",
  {
    x: '-100%',
  },
  {
    x: '0%',
    duration: 4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section-fourth",
      start: "top 20%",
      end: "bottom 60%",
      scrub: false,
      toggleActions: "play reverse play reverse", // scales in and out on scroll
      //markers: true
    }
  }
);

/* When in viewport, move the furniture 2 from bottom to top */
gsap.fromTo(
  ".section-fourth .parallax .floor-image-furniture-2",
  {
    x: '100%',
  },
  {
    x: '0%',
    duration: 4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".section-fourth",
      start: "top 20%",
      end: "bottom 60%",
      scrub: false,
      toggleActions: "play reverse play reverse", // scales in and out on scroll
      //markers: true
    }
  }
);

  /* Fifth content block:
     When reached, fade-in and scale-up the content */
  gsap.fromTo(
    ".content.fifth",
    {
      scale: 0,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-fifth",
        start: "top 40%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );
}

  /* When in viewport, move the clouds from bottom to top */
  gsap.fromTo(
    ".section-fifth .parallax .clouds-image",
    {
      y: '100%',
    },
    {
      y: '20%',
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-fifth",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* When in viewport, move the front grass from bottom to top */
  gsap.fromTo(
    ".section-fifth .parallax .grass-image-front",
    {
      y: '100%',
    },
    {
      y: '0%',
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-fifth",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* When in viewport, move the back grass from bottom to top */
  gsap.fromTo(
    ".section-fifth .parallax .grass-image-back",
    {
      y: '100%',
    },
    {
      y: '0%',
      duration: 4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-fifth",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* When in viewport, move the grass foliage from bottom to top */
  gsap.fromTo(
    ".section-fifth .parallax .grass-image-foliage",
    {
      y: '100%',
    },
    {
      y: '0%',
      duration: 4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-fifth",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

  /* When in viewport, move the grass extra from bottom to top */
  gsap.fromTo(
    ".section-fifth .parallax .grass-image-extra",
    {
      y: '100%',
    },
    {
      y: '0%',
      duration: 4,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-fifth",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse", // scales in and out on scroll
        //markers: true
      }
    }
  );

// Listen for page resize to load the respective animation for Desktop or Mobile
window.addEventListener("resize", () => {
  location.reload(); // simplest approach if you don't want to reset all animations manually
});
