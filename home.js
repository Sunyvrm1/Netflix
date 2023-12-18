// -------------------------- Slider UI slides 1 --------------------------

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

// -------------------------- Slider UI slides 1 --------------------------

const sliders1 = document.querySelectorAll(".carouselbox1");

sliders1.forEach((slider) => {
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

// -------------------------- Calling API 1 --------------------------

fetch(
  "https://api.themoviedb.org/3/discover/movie?api_key=d7667b78097516f5e82e6955576dcf62"
)
  .then((response) => response.json())
  .then((data) => {
    const newArray = data.results.splice(0, 10);

    newArray.forEach((arr, i) => {
      const box = document.querySelector(".carouselbox");
      const html = `<div class="images">
               <p class="imagesPara">${i + 1}</p>
             <img src="https://image.tmdb.org/t/p/w500/${
               arr.poster_path
             }" alt="" />
         </div>`;
      box.insertAdjacentHTML("beforeend", html);
    });
  });

// -------------------------- Calling API 2 --------------------------

fetch(
  "https://api.themoviedb.org/3/discover/movie?api_key=d7667b78097516f5e82e6955576dcf62"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.results.map((arr) => {
      const box = document.querySelector(".carouselbox1");
      const html = `
         <div class="images1">
         <img src="https://image.tmdb.org/t/p/w500/${arr.backdrop_path}" alt="" />
          </div>
         `;
      box.insertAdjacentHTML("beforeend", html);
    });
  });

// -------------------------- Calling API 3 --------------------------

fetch(
  "https://api.themoviedb.org/3/discover/tv?api_key=d7667b78097516f5e82e6955576dcf62"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.results.map((arr) => {
      const box = document.querySelector(".carouselbox2");
      const html = `
           <div class="images1">
           <img src="https://image.tmdb.org/t/p/w500/${arr.backdrop_path}" alt="" />
            </div>
           `;
      box.insertAdjacentHTML("beforeend", html);
    });
  });

// -------------------------- Calling API 4 --------------------------

fetch(
  "https://api.themoviedb.org/3/movie/upcoming?api_key=d7667b78097516f5e82e6955576dcf62"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const del = data.results[9];
    data.results.map((arr) => {
      const box = document.querySelector(".carouselbox3");
      const html = `
           <div class="images1">
           <img src="https://image.tmdb.org/t/p/w500/${arr.backdrop_path}" alt="" />
            </div>
           `;
      box.insertAdjacentHTML("beforeend", html);
    });
  });

// -------------------------- Calling API 5 --------------------------

fetch(
  "https://api.themoviedb.org/3/trending/movie/day?api_key=d7667b78097516f5e82e6955576dcf62"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const del = data.results[9];
    data.results.map((arr) => {
      const box = document.querySelector(".carouselbox4");
      const html = `
           <div class="images1">
           <img src="https://image.tmdb.org/t/p/w500/${arr.backdrop_path}" alt="" />
            </div>
           `;
      box.insertAdjacentHTML("beforeend", html);
    });
  });

// -------------------------- Calling API 6  --------------------------

fetch(
  "https://api.themoviedb.org/3/trending/tv/day?api_key=d7667b78097516f5e82e6955576dcf62"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const del = data.results[9];
    data.results.map((arr) => {
      const box = document.querySelector(".carouselbox5");
      const html = `
           <div class="images1">
           <img src="https://image.tmdb.org/t/p/w500/${arr.backdrop_path}" alt="" />
            </div>
           `;
      box.insertAdjacentHTML("beforeend", html);
    });
  });
