
let valueDisplays = document.querySelectorAll(".num");
let interval = 2000;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let startValue = 0;
      let endValue = parseInt(entry.target.getAttribute("data-value"));
      let duration = Math.floor(interval / endValue);

      let counter = setInterval(() => {
        startValue += 1;
        entry.target.textContent = startValue;

        if (startValue >= endValue) {
          clearInterval(counter);
        }
      }, duration);

      observer.unobserve(entry.target);
    }
  });
});

valueDisplays.forEach((valueDisplay) => {
  observer.observe(valueDisplay);
});
