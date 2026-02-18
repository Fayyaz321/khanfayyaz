//  var elemC = document.querySelector(".elem-container")
// var fixed = document.querySelector(".fixed-image")
// var elems = document.querySelectorAll(".elem")

// elemC.addEventListener("mouseenter", function () {
//   fixed.style.display = "block"
// })

// elemC.addEventListener("mouseleave", function () {
//   fixed.style.display = "none"
// })

// elems.forEach(function (e) {
//   e.addEventListener("mouseenter", function () {
//     var image = e.getAttribute("data-image")
//     fixed.style.backgroundImage = `url("${image}")`
//   })
// })

// window.addEventListener("load", () => {
//   const loader = document.querySelector(".loader");

//   setTimeout(() => {
//     loader.style.top = "-100%"
//   },4500); // loader کا total time
// });

var elemC = document.querySelector(".elem-container");
var fixed = document.querySelector(".fixed-image");
var elems = document.querySelectorAll(".elem");

/* Disable hover preview on mobile */
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

/* Loader */
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.style.top = "-100%";
  }, 4500);
});
