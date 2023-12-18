// -------------------------- Slider UI slides --------------------------

const sliders = document.querySelectorAll(".carouselbox");

sliders.forEach((slider) => {
  const switchLeft = slider.parentElement.querySelector(".switchLeft");
  const switchRight = slider.parentElement.querySelector(".switchRight");

  slider.addEventListener("scroll", function () {
    if (slider.scrollLeft === 0) {
      switchLeft.style.display = "none";
    } else {
      switchLeft.style.display = "block";
    }

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1) {
      switchRight.style.display = "none";
    } else {
      switchRight.style.display = "block";
    }
  });

  switchLeft.addEventListener("click", () => {
    const scrollAmount = window.innerWidth;
    slider.scrollTo({
      left: slider.scrollLeft - scrollAmount,
      behavior: "smooth",
    });
  });

  switchRight.addEventListener("click", () => {
    const scrollAmount = window.innerWidth;
    slider.scrollTo({
      left: slider.scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  });
});

// -------------------------- Header shrinking color --------------------------

window.addEventListener("scroll", () => {
  const mainNav = document.getElementById("mainNav");
  if (window.scrollY > 100) {
    mainNav.classList.add("activeBG");
  } else {
    mainNav.classList.remove("activeBG");
  }
});


// -------------------------- Calling API --------------------------

fetch("https://api.themoviedb.org/3/discover/movie?api_key=d7667b78097516f5e82e6955576dcf62")
.then((response) => response.json())
.then((data) => {
  console.log(data);

  data.forEach((suny) => {
    console.log(suny)
  })
})