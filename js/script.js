$(document).ready(function () {
  $(".down-side").slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplayspeed: 20,
    speed: 2000,
  });

  $(".my-slick").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplayspeed: 20,
    speed: 1000,
  });

  let menu = document.querySelector(".menu");
  let menuLogo1 = document.getElementById("menuLogo1");
  let menuLogo2 = document.getElementById("menuLogo2");
  let menuLists = document.querySelectorAll("nav-list-menu");
  let imgButtons = document.querySelectorAll(".right-side .slick-dots li");
  // let newDesc;

  menuLogo2.addEventListener("click", (e) => {
    menu.style.display = "block";
  });
  menuLogo1.addEventListener("click", (e) => {
    menu.style.display = "none";
  });

  // const descImgButton = ['Camera House', 'Rocket Launcher', 'Person with The Dog', 'Medical Checkup'];
  // console.log(imgButtons);
  // for(let i=0; i < descImgButton.length; i++){
  //     newDesc = document.createElement('p');
  //     newDesc.innerText = descImgButton[i];
  //     imgButtons[i].appendChild(newDesc);
  // }

  // imgButtons.forEach(imgbutton => {
  //     imgbutton.addEventListener('')
  // })
});

// FAUZAN SECTION

// --------------------------------------------head of departement-------------------------------------------
const sliderContainer = document.querySelector(".slider-container");

const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");

const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");

const slideslength = slideLeft.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slideslength - 1) * 100}vh`;

// Add EventListener to the button
upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;

  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slideslength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideslength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
