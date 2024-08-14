// header
let lett1 = document.getElementById("l1");
let lett2 = document.getElementById("l2");
let lett3 = document.getElementById("l3");
let lett5 = document.getElementById("l5");
let lett6 = document.getElementById("l6");
let lett7 = document.getElementById("l7");
let lett8 = document.getElementById("l8");

window.addEventListener("load", function () {
  lett1.style.transform = "translate(-40px, -30px)";
  lett1.style.transition = "0.1s";
  lett2.style.transform = "translate(-35px, -15px)";
  lett2.style.transition = "0.4s";
  lett3.style.transform = "translate(-25px, -5px)";
  lett3.style.transition = "0.8s";
  lett5.style.transform = "translate(-10px, 2px)";
  lett5.style.transition = "1.2s";
  lett6.style.transform = "translate(3px, -3px)";
  lett6.style.transition = "1.6s";
  lett7.style.transform = "translate(18px, -12px)";
  lett7.style.transition = "2s";
  lett8.style.transform = "translate(25px, -30px)";
  lett8.style.transition = "2.4s";
});

// hero section
window.onload = function () {
  const text = document.getElementById("text");
  text.style.transform = "translateX(0%)";
};

// about section
let aboutLeftImg = document.getElementById("about-img-left");
let aboutRightImg = document.getElementById("about-img-right");
let aboutLowerCont = document.querySelector(".about-lower-cont");
window.addEventListener("scroll", function () {
  if (window.scrollY > 1150) {
    aboutLeftImg.style.transform = "translateX(0%)";
    aboutRightImg.style.transform = "translateX(0%)";
    aboutLeftImg.style.transition = "0.8s";
    aboutRightImg.style.transition = "0.8s";
  } else {
    aboutLeftImg.style.transform = "translateX(-100%)";
    aboutRightImg.style.transform = "translateX(100%)";
    aboutLeftImg.style.transition = "0.8s";
    aboutRightImg.style.transition = "0.8s";
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 1200) {
    aboutLowerCont.style.transform = "translateY(0%)";
    aboutLowerCont.style.transition = "0.8s";
  } else {
    aboutLowerCont.style.transform = "translateY(100%)";
    aboutLowerCont.style.transition = "0.8s";
  }
});

// service section
let servCardOne = document.querySelector(".cd-1");
let servCardTwo = document.querySelector(".cd-2");
let servCardThree = document.querySelector(".cd-3");

window.addEventListener("scroll", function () {
  if (window.scrollY > 1700) {
    servCardOne.style.transform = "translateX(0%)";
    servCardOne.style.transition = "0.8s";
    servCardThree.style.transform = "translateX(0%)";
    servCardThree.style.transition = "0.8s";
    servCardTwo.style.transform = "translateY(0%)";
    servCardTwo.style.transition = "0.8s";
  } else {
    servCardOne.style.transform = "translateX(-130%)";
    servCardOne.style.transition = "0.8s";
    servCardThree.style.transform = "translateX(130%)";
    servCardThree.style.transition = "0.8s";
    servCardTwo.style.transform = "translateY(130%)";
    servCardTwo.style.transition = "0.8s";
  }
});

// listing section
let listCardOne = document.querySelector(".list-one");
window.addEventListener("scroll", function () {
  if (window.scrollY > 2900) {
    listCardOne.style.transform = "translateX(0%)";
    listCardOne.style.transition = "0.8s";
  } else {
    listCardOne.style.transform = "translateX(130%)";
    listCardOne.style.transition = "0.8s";
  }
});

let listCardTwo = document.querySelector(".list-two");
window.addEventListener("scroll", function () {
  if (window.scrollY > 3600) {
    listCardTwo.style.transform = "translateX(0%)";
    listCardTwo.style.transition = "0.8s";
  } else {
    listCardTwo.style.transform = "translateX(-130%)";
    listCardTwo.style.transition = "0.8s";
  }
});

let listCardThree = document.querySelector(".list-three");
window.addEventListener("scroll", function () {
  if (window.scrollY > 4000) {
    listCardThree.style.transform = "translateX(0%)";
    listCardThree.style.transition = "0.8s";
  } else {
    listCardThree.style.transform = "translateX(130%)";
    listCardThree.style.transition = "0.8s";
  }
});


let listCardTFour = document.querySelector(".list-four");
window.addEventListener("scroll", function () {
  if (window.scrollY > 4500) {
    listCardTFour.style.transform = "translateX(0%)";
    listCardTFour.style.transition = "0.8s";
  } else {
    listCardTFour.style.transform = "translateX(-130%)";
    listCardTFour.style.transition = "0.8s";
  }
});

let listCardFive = document.querySelector(".list-five");
window.addEventListener("scroll", function () {
  if (window.scrollY > 5000) {
    listCardFive.style.transform = "translateX(0%)";
    listCardFive.style.transition = "0.8s";
  } else {
    listCardFive.style.transform = "translateX(130%)";
    listCardFive.style.transition = "0.8s";
  }
});

// start team 
let teamOne = document.querySelector(".team-one");
window.addEventListener("scroll", function () {
  if (window.scrollY > 5900) {
    teamOne.style.transform = "translateX(0%)";
    teamOne.style.transition = "0.8s";
  } else {
    teamOne.style.transform = "translateX(-130%)";
    teamOne.style.transition = "0.8s";
  }
});

let teamTwo = document.querySelector(".team-two");
window.addEventListener("scroll", function () {
  if (window.scrollY > 5900) {
    teamTwo.style.transform = "translateY(0%)";
    teamTwo.style.transition = "0.8s";
  } else {
    teamTwo.style.transform = "translateY(130%)";
    teamTwo.style.transition = "0.8s";
  }
});

let teamThree = document.querySelector(".team-three");
window.addEventListener("scroll", function () {
  if (window.scrollY > 5900) {
    teamThree.style.transform = "translateX(0%)";
    teamThree.style.transition = "0.8s";
  } else {
    teamThree.style.transform = "translateX(130%)";
    teamThree.style.transition = "0.8s";
  }
});



// start consulting 
let consLeft = document.querySelector(".cons-left");
window.addEventListener("scroll", function () {
  if (window.scrollY > 6400) {
    consLeft.style.transform = "translateX(0%)";
    consLeft.style.transition = "0.8s";
  } else {
    consLeft.style.transform = "translateX(-130%)";
    consLeft.style.transition = "0.8s";
  }
});

let consRight = document.querySelector(".cons-right");
window.addEventListener("scroll", function () {
  if (window.scrollY > 6400) {
    consRight.style.transform = "translateX(0%)";
    consRight.style.transition = "0.8s";
  } else {
    consRight.style.transform = "translateX(130%)";
    consRight.style.transition = "0.8s";
  }
});