const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const topBar = document.querySelector(".bar.top");
const middleBar = document.querySelector(".bar.middle");
const bottomBar = document.querySelector(".bar.bottom");

let menuOpen = false;

hamburger.addEventListener("click", () => {
  if (!menuOpen) {
    // Open menu
    gsap.to(sideMenu, { x: 0, duration: 0.5, ease: "power2.out" });

    // Morph hamburger into X
    gsap.to(topBar, { rotation: 45, y: 10, color:"#FA812F", duration: 0.3 });
    gsap.to(bottomBar, { rotation: -45, y: -8,  color:"#FA812F", duration: 0.3 });
    gsap.to(middleBar, { opacity: 0, duration: 0.2 });
  } else {
    // Close menu
    gsap.to(sideMenu, { x: "100%", duration: 0.5, ease: "power2.in" });

    // Morph X back into hamburger
    gsap.to(topBar, { rotation: 0, y: 0,  color:"#FA812F", duration: 0.3 });
    gsap.to(bottomBar, { rotation: 0, y: 0, color:"#FA812F", duration: 0.3 });
    gsap.to(middleBar, { opacity: 1, duration: 0.2 });
  }
  menuOpen = !menuOpen;
});
