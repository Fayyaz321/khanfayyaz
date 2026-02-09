// ================= Fixed Image Hover =================
const elemC = document.querySelector(".elem-container");
const fixed = document.querySelector(".fixed-image");

if (elemC && fixed) {
  elemC.addEventListener("mouseenter", () => {
    fixed.style.display = "block";
  });

  elemC.addEventListener("mouseleave", () => {
    fixed.style.display = "none";
  });

  document.querySelectorAll(".elem").forEach((e) => {
    e.addEventListener("mouseenter", () => {
      fixed.style.backgroundImage = `url(${e.dataset.image})`;
    });
  });
}

// ================= Loader =================
const loader = document.querySelector(".loader");
if (loader) {
  setTimeout(() => {
    loader.style.top = "-100%";
  }, 3000);
}

// ================= Animated Box =================
const animatedBox = document.querySelector(".animated-box");

if (animatedBox) {

  function resizeBox() {
    const width = window.innerWidth;

    if (width < 768) {
      animatedBox.style.width = "90%";
      animatedBox.style.height = "150px";
    } else if (width < 1200) {
      animatedBox.style.width = "70%";
      animatedBox.style.height = "200px";
    } else {
      animatedBox.style.width = "50%";
      animatedBox.style.height = "250px";
    }
  }

  resizeBox();
  window.addEventListener("resize", resizeBox);

  function animateBox() {
    const distance =
      window.innerWidth < 768 ? 80 :
      window.innerWidth < 1200 ? 120 : 160;

    animatedBox.animate(
      [
        { transform: "translateX(0px)" },
        { transform: `translateX(${distance}px)` }
      ],
      {
        duration: 800,
        direction: "alternate",
        iterations: Infinity,
        easing: "ease-in-out"
      }
    );
  }

  animateBox();
}
