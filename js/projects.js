let arrow1 = document.querySelector(".arrow-1");
let over1 = document.querySelector(".over-1");

arrow.addEventListener("mouseover", function overDisplay() {
  console.log("hello from over");
  over1.style.display = "block";
});

arrow.addEventListener("mouseout", function overDisplay() {
  console.log("hello from over");
  over.forEach((item) => {
    item.style.display = "none";
  });
});
