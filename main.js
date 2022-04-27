


//ეს სლაიდერი
const autoSlider = document.querySelector("#auto-slide");
const slideItems = document.querySelectorAll(".slider-item");

const prevBtn = document.querySelector("#prev-slide-btn");
const nextBtn = document.querySelector("#next-slide-btn");
const stopautoSlider = document.querySelector("#stop-auto-slide");
let activeIndex = 0;

initSlider();
function initSlider() {
  prevBtn.addEventListener("click", showPrevSlide);
  nextBtn.addEventListener("click", showNextSlide);






//სისტემაში ვერ ვხეავ კარგად :(





  document.addEventListener("keyUp", (e) => {
    if (e.code === "Right") {
      showNextSlide();
    }
  });
  document.addEventListener("keyUp", (e) => {
    if (e.code === "Left") {
      showPrevSlide();
    }
  });
}

function renderSliders() {
  slideItems.forEach((item, i) => {
    if (activeIndex === i) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

function showPrevSlide() {
  activeIndex = activeIndex - 1;
  if (activeIndex < 0) {
    activeIndex = slideItems.length - 1;
  }
  renderSliders();
}

function showNextSlide() {
  activeIndex = activeIndex + 1;
  if (activeIndex > slideItems.length - 1) {
    activeIndex = 0;
  }
  renderSliders();
}
const firstCapture = document.querySelector("#firstcap");
const secondCapture = document.querySelector("#secondcap");
const thirdCapture = document.querySelector("#thirdcap");

firstCapture.addEventListener("click", () => {
  return slideItems[0];
});
secondCapture.addEventListener("click", slideItems[1]);
thirdCapture.addEventListener("click", slideItems[2]);
