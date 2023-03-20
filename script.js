window.addEventListener("load", function () {
  // howmany slides;
  const slideCount = document.querySelectorAll("#slider-wrapper ul li").length;
  //each slide width
  const slideWidth = document.querySelector("#slider-wrapper").offsetWidth;
  //total Slider width
  const totalWidth = slideCount * slideWidth + "px";

  // Slider DOM Elements
  const slider = document.querySelector("#slider-wrapper ul");

  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");

  let leftPosition = 0;
  let counter = 0;
  slider.style.width = totalWidth;

  nextBtn.addEventListener("click", function (event) {
    event.preventDefault();
    counter++;
    if (counter === slideCount) {
      counter = 0;
    }
    leftPosition = `-${counter * slideWidth}px`;
    slider.style.left = leftPosition;
  });

  prevBtn.addEventListener("click", function (event) {
    event.preventDefault();
    counter--;
    if (counter < 0) {
      counter = slideCount - 1;
    }
    leftPosition = `-${counter * slideWidth}px`;
    slider.style.left = leftPosition;
  });
});
