gsap.registerPlugin(ScrollTrigger);

// Enhanced responsive detection with specific mobile breakpoints
let deviceType = getDeviceType();

function getDeviceType() {
  const width = window.innerWidth;
  
  if (width <= 375) return 'mobile-s'; // iPhone SE, small phones
  if (width <= 414) return 'mobile-m'; // iPhone 6/7/8 Plus, standard phones
  if (width <= 768) return 'mobile-l'; // iPad mini, large phones/small tablets
  return 'desktop';
}

function initAnimations() {
  // Clear existing ScrollTriggers to prevent conflicts
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  
  // Reset any existing transforms
  gsap.set([".circle-image", ".circle-container", ".content", ".parallax img"], {
    clearProps: "all"
  });

  if (deviceType.includes('mobile')) {
    setupMobileAnimations();
  } else {
    setupDesktopAnimations();
  }
}

function getResponsiveValues() {
  const config = {
    'mobile-s': {
      // Small phones (≤375px)
      circleScale: { initial: 0.4, final: 0.8 },
      circleBottom: "-45%",
      duration: { short: 0.8, medium: 1.2, long: 2 },
      delay: { short: 0.3, medium: 0.6, long: 1 },
      translateY: { small: "60%", medium: "80%", large: "100%" },
      translateX: { small: "40%", medium: "50%", large: "60%" },
      scrubSensitivity: 1.5,
      scrollTimeout: 1400
    },
    'mobile-m': {
      // Medium phones (≤414px)
      circleScale: { initial: 0.5, final: 0.9 },
      circleBottom: "-50%",
      duration: { short: 1, medium: 1.5, long: 2.5 },
      delay: { short: 0.5, medium: 0.8, long: 1.2 },
      translateY: { small: "70%", medium: "90%", large: "110%" },
      translateX: { small: "45%", medium: "55%", large: "65%" },
      scrubSensitivity: 1.2,
      scrollTimeout: 1300
    },
    'mobile-l': {
      // Large phones/small tablets (≤768px)
      circleScale: { initial: 0.6, final: 1 },
      circleBottom: "-55%",
      duration: { short: 1.2, medium: 1.8, long: 3 },
      delay: { short: 0.8, medium: 1, long: 1.5 },
      translateY: { small: "80%", medium: "100%", large: "120%" },
      translateX: { small: "50%", medium: "60%", large: "70%" },
      scrubSensitivity: 1,
      scrollTimeout: 1200
    }
  };
  
  return config[deviceType] || config['mobile-l'];
}

function setupMobileAnimations() {
  const config = getResponsiveValues();
  
  // Initial circle animation with responsive scaling
  gsap.to(".circle-image", {
    duration: config.duration.medium,
    scale: config.circleScale.initial,
    ease: "power3.out",
    onComplete: () => {
      gsap.to(".circle-image", { 
        duration: config.duration.short, 
        scale: config.circleScale.final 
      });
      gsap.to(".circle-container", { 
        duration: config.duration.short, 
        bottom: config.circleBottom 
      });
    },
  });

  // Circle rotation with device-specific scrub sensitivity
  gsap.fromTo(
    ".circle-image",
    { rotation: 0 },
    {
      rotation: deviceType === 'mobile-s' ? 216 : 288,
      ease: "none",
      scrollTrigger: {
        trigger: ".producao .container",
        start: "top top",
        end: "100% bottom",
        scrub: config.scrubSensitivity,
        smooth: 1,
        invalidateOnRefresh: true
      },
    }
  );

  // FIRST SECTION ANIMATIONS
  gsap.fromTo(
    ".content.first",
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: config.duration.short,
      delay: config.delay.long,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-first",
        start: deviceType === 'mobile-s' ? "top 30%" : "top 40%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );

  gsap.fromTo(
    ".section-first .parallax .clouds-image",
    { y: config.translateY.large },
    {
      y: deviceType === 'mobile-s' ? "-10%" : "-20%",
      duration: config.duration.long,
      delay: config.delay.long,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-first",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );

  gsap.fromTo(
    ".section-first .parallax .grass-image-front",
    { y: config.translateY.small },
    {
      y: deviceType === 'mobile-s' ? "5%" : "0%",
      duration: config.duration.medium,
      delay: config.delay.short,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-first",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );

  gsap.fromTo(
    ".section-first .parallax .grass-image-back",
    { y: config.translateY.medium },
    {
      y: deviceType === 'mobile-s' ? "5%" : "0%",
      duration: config.duration.medium,
      delay: config.delay.medium,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-first",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );

  gsap.fromTo(
    ".section-first .parallax .grass-image-foliage",
    { y: config.translateY.large },
    {
      y: deviceType === 'mobile-s' ? "5%" : "0%",
      duration: config.duration.medium,
      delay: config.delay.long,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-first",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );

  gsap.fromTo(
    ".section-first .parallax .grass-image-extra",
    { y: config.translateY.large },
    {
      y: deviceType === 'mobile-s' ? "5%" : "0%",
      duration: config.duration.medium,
      delay: config.delay.long,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-first",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );

  // SECOND SECTION ANIMATIONS
  gsap.fromTo(
    ".content.second",
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: config.duration.short,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-second",
        start: deviceType === 'mobile-s' ? "top 30%" : "top 40%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );

  gsap.fromTo(
    ".section-second .parallax .clouds-image",
    { y: config.translateY.large },
    {
      y: "10%",
      duration: config.duration.long,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-second",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );

  gsap.fromTo(
    ".section-second .parallax .grass-image-front",
    { y: config.translateY.small },
    {
      y: "0%",
      duration: config.duration.medium,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-second",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );

  gsap.fromTo(
    ".section-second .parallax .grass-image-back",
    { y: config.translateY.medium },
    {
      y: "0%",
      duration: config.duration.long,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-second",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );

  gsap.fromTo(
    ".section-second .parallax .grass-image-foliage",
    { y: config.translateY.large },
    {
      y: "0%",
      duration: config.duration.long,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-second",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );

  gsap.fromTo(
    ".section-second .parallax .grass-image-extra",
    { y: config.translateY.large },
    {
      y: "0%",
      duration: config.duration.long,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-second",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );

  // THIRD SECTION ANIMATIONS
  gsap.fromTo(
    ".content.third",
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: config.duration.short,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-third",
        start: deviceType === 'mobile-s' ? "top 30%" : "top 40%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );

  gsap.fromTo(
    ".section-third .parallax .floor-image",
    { y: config.translateY.small },
    {
      y: "0%",
      duration: config.duration.medium,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-third",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );

  // Simplified furniture animations for mobile
  const furnitureX = deviceType === 'mobile-s' ? config.translateX.small : config.translateX.medium;

  gsap.fromTo(
    ".section-third .parallax .floor-image-furniture-1",
    { x: `-${furnitureX}` },
    {
      x: "0%",
      duration: config.duration.medium,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-third",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );

  gsap.fromTo(
    ".section-third .parallax .floor-image-furniture-2",
    { x: furnitureX },
    {
      x: "0%",
      duration: config.duration.medium,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-third",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );

  // FOURTH SECTION ANIMATIONS
  gsap.fromTo(
    ".content.fourth",
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: config.duration.short,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-fourth",
        start: deviceType === 'mobile-s' ? "top 30%" : "top 40%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );

  gsap.fromTo(
    ".section-fourth .parallax .floor-image",
    { y: config.translateY.small },
    {
      y: "0%",
      duration: config.duration.medium,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-fourth",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );

  gsap.fromTo(
    ".section-fourth .parallax .floor-image-furniture-1",
    { x: `-${furnitureX}` },
    {
      x: "0%",
      duration: config.duration.medium,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-fourth",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );

  gsap.fromTo(
    ".section-fourth .parallax .floor-image-furniture-2",
    { x: furnitureX },
    {
      x: "0%",
      duration: config.duration.medium,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-fourth",
        start: "top 20%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );

  // FIFTH SECTION ANIMATIONS
  gsap.fromTo(
    ".content.fifth",
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: config.duration.short,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".section-fifth",
        start: deviceType === 'mobile-s' ? "top 30%" : "top 40%",
        end: "bottom 60%",
        scrub: false,
        toggleActions: "play reverse play reverse",
        invalidateOnRefresh: true
      },
    }
  );
}

function setupDesktopAnimations() {
  // Original desktop animations
  gsap.to(".circle-image", {
    duration: 1.5,
    scale: 0.6,
    ease: "power3.out",
    onComplete: () => {
      gsap.to(".circle-image", { duration: 1, scale: 1 });
      gsap.to(".circle-container", { duration: 1, bottom: "-1200px" });
    },
  });

  gsap.fromTo(
    ".circle-image",
    { rotation: 0 },
    {
      rotation: 288,
      ease: "none",
      scrollTrigger: {
        trigger: ".producao .container",
        start: "top top",
        end: "100% bottom",
        scrub: 0.2,
        smooth: 1,
        invalidateOnRefresh: true
      },
    }
  );

  // All section content animations
  const sections = ['first', 'second', 'third', 'fourth', 'fifth'];
  
  sections.forEach(sectionName => {
    gsap.fromTo(
      `.content.${sectionName}`,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        delay: sectionName === 'first' ? 3 : 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.section-${sectionName}`,
          start: "top 40%",
          end: "bottom 60%",
          scrub: false,
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true
        },
      }
    );
  });

  // Grass sections parallax (1, 2, 5)
  ['first', 'second', 'fifth'].forEach(section => {
    gsap.fromTo(
      `.section-${section} .parallax .clouds-image`,
      { y: "100%" },
      {
        y: "20%",
        duration: 3,
        delay: section === 'first' ? 3 : 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.section-${section}`,
          start: "top 20%",
          end: "bottom 60%",
          scrub: false,
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true
        },
      }
    );

    gsap.fromTo(
      `.section-${section} .parallax .grass-image-front`,
      { y: "100%" },
      {
        y: "0%",
        duration: 2,
        delay: section === 'first' ? 1 : 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.section-${section}`,
          start: "top 20%",
          end: "bottom 60%",
          scrub: false,
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true
        },
      }
    );

    gsap.fromTo(
      `.section-${section} .parallax .grass-image-back`,
      { y: "100%" },
      {
        y: "0%",
        duration: section === 'first' ? 2.5 : 4,
        delay: section === 'first' ? 2 : 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.section-${section}`,
          start: "top 20%",
          end: "bottom 60%",
          scrub: false,
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true
        },
      }
    );

    gsap.fromTo(
      `.section-${section} .parallax .grass-image-foliage`,
      { y: "100%" },
      {
        y: "0%",
        duration: section === 'first' ? 3 : 4,
        delay: section === 'first' ? 4 : 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.section-${section}`,
          start: "top 20%",
          end: "bottom 60%",
          scrub: false,
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true
        },
      }
    );

    gsap.fromTo(
      `.section-${section} .parallax .grass-image-extra`,
      { y: "100%" },
      {
        y: "0%",
        duration: section === 'first' ? 3 : 4,
        delay: section === 'first' ? 4 : 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.section-${section}`,
          start: "top 20%",
          end: "bottom 60%",
          scrub: false,
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true
        },
      }
    );
  });

  // Floor sections (3, 4)
  ['third', 'fourth'].forEach(section => {
    gsap.fromTo(
      `.section-${section} .parallax .floor-image`,
      { y: "100%" },
      {
        y: "0%",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.section-${section}`,
          start: "top 20%",
          end: "bottom 60%",
          scrub: false,
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true
        },
      }
    );

    gsap.fromTo(
      `.section-${section} .parallax .floor-image-furniture-1`,
      { x: "-100%" },
      {
        x: "0%",
        duration: 4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.section-${section}`,
          start: "top 20%",
          end: "bottom 60%",
          scrub: false,
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true
        },
      }
    );

    gsap.fromTo(
      `.section-${section} .parallax .floor-image-furniture-2`,
      { x: "100%" },
      {
        x: "0%",
        duration: 4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.section-${section}`,
          start: "top 20%",
          end: "bottom 60%",
          scrub: false,
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true
        },
      }
    );
  });
}

// Enhanced smooth scrolling
function initSmoothScrolling() {
  const config = deviceType.includes('mobile') ? getResponsiveValues() : { scrollTimeout: 900 };
  const sectionSelectors = [
    ".section-first",
    ".section-second", 
    ".section-third",
    ".section-fourth",
    ".section-fifth",
  ];
  
  const sections = sectionSelectors
    .map((sel) => document.querySelector(sel))
    .filter(Boolean);

  let isScrolling = false;
  let touchStartY = 0;
  let touchEndY = 0;
  
  const touchSensitivity = deviceType === 'mobile-s' ? 20 : 30;

  function getCurrentSectionIndex() {
    const scrollY = window.scrollY || window.pageYOffset;
    let idx = 0;
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop - 50 <= scrollY) {
        idx = i;
      }
    }
    return idx;
  }

  function scrollToSection(idx) {
    if (idx < 0 || idx >= sections.length || isScrolling) return;
    
    isScrolling = true;
    sections[idx].scrollIntoView({ 
      behavior: "smooth",
      block: "start"
    });
    
    setTimeout(() => {
      isScrolling = false;
    }, config.scrollTimeout);
  }

  function scrollToBottom() {
    if (isScrolling) return;
    
    isScrolling = true;
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    
    setTimeout(() => {
      isScrolling = false;
    }, config.scrollTimeout);
  }

  function handleScroll(e, direction) {
    if (isScrolling) return;
    
    const currentIdx = getCurrentSectionIndex();
    let targetIdx = currentIdx + direction;

    if (direction > 0 && currentIdx < sections.length - 1) {
      e && e.preventDefault();
      scrollToSection(targetIdx);
      return;
    }
    
    if (direction < 0 && currentIdx > 0) {
      e && e.preventDefault();
      scrollToSection(targetIdx);
      return;
    }
    
    if (direction > 0 && currentIdx === sections.length - 1) {
      e && e.preventDefault();
      scrollToBottom();
      return;
    }
  }

  document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    if (isScrolling) return;
    
    touchEndY = e.changedTouches[0].clientY;
    const touchDiff = touchStartY - touchEndY;
    
    if (Math.abs(touchDiff) > touchSensitivity) {
      const direction = touchDiff > 0 ? 1 : -1;
      handleScroll(null, direction);
    }
  }, { passive: true });

  window.addEventListener("wheel", function (e) {
    if (e.ctrlKey) return;
    
    const minDelta = deviceType === 'mobile-s' ? 3 : 5;
    if (Math.abs(e.deltaY) < minDelta) return;
    
    const direction = e.deltaY > 0 ? 1 : -1;
    handleScroll(e, direction);
  }, { passive: false });

  window.addEventListener("keydown", function (e) {
    if (isScrolling) return;
    
    if (["ArrowDown", "PageDown"].includes(e.key)) {
      handleScroll(e, 1);
    } else if (["ArrowUp", "PageUp"].includes(e.key)) {
      handleScroll(e, -1);
    }
  });
}

// Enhanced resize handler
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    const newDeviceType = getDeviceType();
    
    if (newDeviceType !== deviceType) {
      deviceType = newDeviceType;
      ScrollTrigger.refresh();
      initAnimations();
      setupFifthSectionParallax();
    }
  }, 250);
});

// COMMON ANIMATIONS FOR FIFTH SECTION
function setupFifthSectionParallax() {
  const config = deviceType.includes('mobile') ? getResponsiveValues() : {
    duration: { medium: 3, long: 4 },
    translateY: { large: "100%" }
  };

  const parallaxElements = [
    { class: '.clouds-image', y: '20%', duration: config.duration.medium || 3 },
    { class: '.grass-image-front', y: '0%', duration: 2 },
    { class: '.grass-image-back', y: '0%', duration: config.duration.long || 4 },
    { class: '.grass-image-foliage', y: '0%', duration: config.duration.long || 4 },
    { class: '.grass-image-extra', y: '0%', duration: config.duration.long || 4 }
  ];

  parallaxElements.forEach(element => {
    gsap.fromTo(
      `.section-fifth .parallax ${element.class}`,
      { y: config.translateY?.large || "100%" },
      {
        y: element.y,
        duration: element.duration,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section-fifth",
          start: "top 20%",
          end: "bottom 60%",
          scrub: false,
          toggleActions: "play reverse play reverse",
          invalidateOnRefresh: true
        },
      }
    );
  });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  console.log(`Initializing animations for: ${deviceType}`);
  initAnimations();
  setupFifthSectionParallax();
  initSmoothScrolling();
});

window.addEventListener('load', () => {
  ScrollTrigger.refresh();
});