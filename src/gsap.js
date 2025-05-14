gsap.registerPlugin(ScrollTrigger);

function isMobile() {
  return window.innerWidth <= 768;
}

if (isMobile()) {
  // Show mobile view
  //gsap.to('.circle-image', {duration: 1.5, scale: 1, ease: "power3.out"})

  gsap.to(".circle-image", {
      duration: 1.5,
      scale: 0.6,
      ease: "power3.out",
      onComplete: () => {
        gsap.to(".circle-image", { duration: 1, scale: 1 })
        gsap.to(".circle-container", { duration: 1, bottom: "-50%" })
      }
  });

  // Move the GIF from the bottom of the container to the top as you scroll
  gsap.fromTo(
    ".circle-image",
    {
      rotation: "0", 
    },
    {
      rotation: "360", 
      ease: "none",
      scrollTrigger: {
        trigger: ".producao .container",
        start: "top top",
        end: "120% bottom",
        scrub: true,
        smooth: 1,
        //markers: true,
      },
    }
  );

  /* First content block */

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

  gsap.fromTo(
    ".section-first .parallax .grass-image",
    {
      y: '100%',
    },
    {
      y: '0%',
      duration: 2,
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

  gsap.fromTo(
    ".section-first .parallax .clouds-image",
    {
      y: '100%',
    },
    {
      y: '20%',
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

  /* Second content block */

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

  gsap.fromTo(
    ".section-second .parallax .grass-image",
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

  /* Third content block */

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

  /* Fourth content block */

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

  /* Fifth content block */

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
  // Show desktop view
  //gsap.to('.circle-image', {duration: 1.5, scale: 1, ease: "power3.out"})

  gsap.to(".circle-image", {
    duration: 1.5,
    scale: 0.6,
    ease: "power3.out",
    onComplete: () => {
      gsap.to(".circle-image", { duration: 1, scale: 1 })
      gsap.to(".circle-container", { duration: 1, bottom: "-1200px" })
    }
  });

  // Move the GIF from the bottom of the container to the top as you scroll
  gsap.fromTo(
    ".circle-image",
    {
      rotation: "0", 
    },
    {
      rotation: "360", 
      ease: "none",
      scrollTrigger: {
        trigger: ".producao .container",
        start: "top top",
        end: "130% bottom",
        scrub: true,
        smooth: 1,
        //markers: true,
      },
    }
  );

  /* First content block */

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

  gsap.fromTo(
    ".section-first .parallax .grass-image",
    {
      y: '100%',
    },
    {
      y: '0%',
      duration: 2,
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

  gsap.fromTo(
    ".section-first .parallax .clouds-image",
    {
      y: '100%',
    },
    {
      y: '20%',
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

  /* Second content block */

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

  gsap.fromTo(
    ".section-second .parallax .grass-image",
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

  /* Third content block */

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

  /* Fourth content block */

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

  /* Fifth content block */

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