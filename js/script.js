// * ARIS SECTION

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


  async function loadData() {
    const response = await fetch(
      "https://raw.githubusercontent.com/Mhmdaris15/SIJA-Website/main/data/alumnus.json"
    );
    const data = await response.json();
    for (let d of data.slice(0,3)) {
      let text = `
        <div class="alumnus-card-parent">
        <div class="top-card"><ul class="dots">
            <li class="dot"></li>
            <li class="dot"></li>
            <li class="dot"></li>
        </ul></div>
        <div class="alumnus-card">
          <div class="photo"><img src=${d.photo} alt="Photo Profile"></div>
          <div class="biodata">
              <div class="name">${d.name}</div>
              <div class="job">${d.job}</div>
              <div class="salary">${d.salary}</div>
              <div class="company"><i class="fa-solid fa-building"></i> ${d.company}</div>
          </div>
      </div>
      </div>            
        `;
      let alumnusCards = document.querySelector(".alumnus-cards");
      alumnusCards.insertAdjacentHTML("afterbegin", text);
      setTimeout(() => {
        $(".alumnus-cards").slick({
          dots: true,
          infinite: false,
          // arrows:false,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ],
        });
      }, 1000);
    }
  }
  loadData();
});

let btn = document.querySelector(".btn");
let clip = document.querySelector(".clip");
let close = document.querySelector(".close");
let video = document.querySelector("video");

btn.onclick = function () {
  btn.classList.add("active");
  clip.classList.add("active");
  video.play();
  video.currentTime = 0;
};
close.onclick = function () {
  btn.classList.remove("active");
  clip.classList.remove("active");
  video.pause();
};

// * FAUZAN SECTION --------------------------------------------------------------------------------------------

// -----------------------------------------------career path---------------------------------------------------
$(".career-cards").slick({
  dots: true,
  infinite: true,
  speed: 300,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    // {
    //   breakpoint: 600,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //   },
    // },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

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

$(document).ready(function () {
  $(".mobile-slider").slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
  });
});

setInterval(() => {
  document.querySelector(".up-button").click();
}, 10000);

// * ADAM SECTION
$(".ach-cards").slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
