var elemC = document.querySelector(".elem-container")
var fixed = document.querySelector(".fixed-image")

elemC.addEventListener("mouseenter",function () {
    fixed.style.display = "block"
})

elemC.addEventListener("mouseleave",function () {
    fixed.style.display = "none"
})

var elems = document.querySelectorAll(".elem")

elems.forEach(function (e) {
    e.addEventListener("mouseenter", function (){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url("${image}")`
    })
})
var loader = document.querySelector(".loader");
setTimeout(function(){
    loader.style.top = "-100%"
},3000)

// 1. Responsive animation speed
let screenWidth = window.innerWidth;
let animationSpeed;
if(screenWidth < 768) {
    animationSpeed = 1000; // mobile: slower
} else if(screenWidth < 1200) {
    animationSpeed = 700;  // tablet: medium
} else {
    animationSpeed = 500;  // desktop: faster
}

// 2. Responsive element size
let animatedBox = document.querySelector('.animated-box');

function resizeBox() {
    let width = window.innerWidth;
    if(width < 768) {
        animatedBox.style.width = '90%';
        animatedBox.style.height = '150px';
    } else if(width < 1200) {
        animatedBox.style.width = '70%';
        animatedBox.style.height = '200px';
    } else {
        animatedBox.style.width = '50%';
        animatedBox.style.height = '250px';
    }
}

resizeBox();
window.addEventListener('resize', resizeBox);

// 3. Responsive animation distance
function animateBox() {
    let width = window.innerWidth;
    let distance;

    if(width < 768) distance = 100;    // mobile
    else if(width < 1200) distance
}