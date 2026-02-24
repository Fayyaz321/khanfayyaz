var elemC = document.querySelector(".elem-container");
var fixed = document.querySelector(".fixed-image");
var elems = document.querySelectorAll(".elem");

if (window.innerWidth > 768) {

  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });

  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      fixed.style.backgroundImage = `url("${e.dataset.image}")`;
    });
  });
}

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.style.top = "-100%";
  }, 4500);
});
