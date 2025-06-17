const hamburger = document.getElementById("hamburger"); // Hamburger menu icon
const sideMenu = document.getElementById("sideMenu"); // Hambuger menu container
const topBar = document.querySelector(".bar.top"); // Top bar of the hamburger menu
const middleBar = document.querySelector(".bar.middle"); // Middle bar of the hamburger menu
const bottomBar = document.querySelector(".bar.bottom"); // Bottom bar of the hamburger menu

// Initially, the menu is closed
let menuOpen = false;

// Listens for click event on the menu icon
hamburger.addEventListener("click", () => {
  // If the menu was closed, open it
  if (!menuOpen) {
    // Open menu
    gsap.to(sideMenu, { x: 0, duration: 0.5, ease: "power2.out" });

    // Morph hamburger into X
    gsap.to(topBar, { rotation: 45, y: 10, color: "#FA812F", duration: 0.3 });
    gsap.to(bottomBar, {
      rotation: -45,
      y: -8,
      color: "#FA812F",
      duration: 0.3,
    });
    gsap.to(middleBar, { opacity: 0, duration: 0.2 });
  } else {
    // Otherwiuse, close menu
    gsap.to(sideMenu, { x: "100%", duration: 0.5, ease: "power2.in" });

    // Morph X back into hamburger
    gsap.to(topBar, { rotation: 0, y: 0, color: "#FA812F", duration: 0.3 });
    gsap.to(bottomBar, { rotation: 0, y: 0, color: "#FA812F", duration: 0.3 });
    gsap.to(middleBar, { opacity: 1, duration: 0.2 });
  }

  // Finally, toggle the current state of the menu (if it was open, it gets closed and vice-versa)
  menuOpen = !menuOpen;
});
