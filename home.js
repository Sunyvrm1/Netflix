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

function top10fetchandDisplay(apiKey, clickHandler) {
  fetch(apiKey)
    .then((response) => response.json())
    .then((data) => {
      const newArray = data.results.splice(0, 10);

      newArray.forEach((arr, i) => {
        const box = document.querySelector(".carouselbox");
        const html = `<div class="images">
                 <p class="imagesPara">${i + 1}</p>
               <img src="https://image.tmdb.org/t/p/w500/${
                 arr.poster_path
               }" alt="${arr.id}" data-author="${apiKey}"/>
           </div>`;
        box.insertAdjacentHTML("beforeend", html);
      });

      //Image clicked event

      const images = document.querySelectorAll(".images img");
      images.forEach((img) => {
        img.addEventListener("click", clickHandler);
      });
    });
}

const apiKey =
  "https://api.themoviedb.org/3/tv/on_the_air?api_key=d7667b78097516f5e82e6955576dcf62";

top10fetchandDisplay(apiKey, handleImageClick);

// -------------------------- Fetch and display images --------------------------

function fetchandDisplay(apiEndpoint, targetBox, clickHandler) {
  fetch(apiEndpoint)
    .then((response) => response.json())
    .then((data) => {
      data.results.map((item) => {
        const box = document.querySelector(targetBox);
        const html = `
        <div class="images1">
          <img src="https://image.tmdb.org/t/p/w500/${item.backdrop_path}" alt="${item.id}" data-author="${apiEndpoint}"/>
        </div>`;
        box.insertAdjacentHTML("beforeend", html);
      });

      //image clicked

      const images = document.querySelectorAll(`${targetBox} img`);
      images.forEach((img) => {
        img.addEventListener("click", clickHandler);
      });
    });
}

// Click event handler to store clicked ID and redirect

function handleImageClick(event) {
  const clickedId = event.target.getAttribute("alt");
  const clickedId1 = event.target.getAttribute("data-author");
  console.log("Clicked ID:", clickedId);
  console.log("Clicked API:", clickedId1);
  localStorage.setItem("clickedId", clickedId);
  localStorage.setItem("clickedId1", clickedId1);
  window.location.href = "series.html";
}

// Define API endpoints and target boxes

const apiEndpoints = [
  "https://api.themoviedb.org/3/tv/on_the_air?api_key=d7667b78097516f5e82e6955576dcf62",
  "https://api.themoviedb.org/3/discover/tv?api_key=d7667b78097516f5e82e6955576dcf62",
  "https://api.themoviedb.org/3/discover/movie?api_key=d7667b78097516f5e82e6955576dcf62",
  "https://api.themoviedb.org/3/trending/movie/day?api_key=d7667b78097516f5e82e6955576dcf62",
  "https://api.themoviedb.org/3/trending/tv/day?api_key=d7667b78097516f5e82e6955576dcf62",
];

const targetBoxes = [
  ".carouselbox1",
  ".carouselbox2",
  ".carouselbox3",
  ".carouselbox4",
  ".carouselbox5",
];

// Loop through APIs to fetch and display images
apiEndpoints.forEach((endpoint, index) => {
  fetchandDisplay(endpoint, targetBoxes[index], handleImageClick);
});

//nav

const navIcon = document.querySelector(".navIcon");
const navCont = document.querySelector(".header");

navIcon.addEventListener("click", () => {
  navCont.classList.toggle("active");
});

//Search Function

const movieInput = document.getElementById("movieInput");
movieInput.addEventListener("keypress", (event) => {
  const movieInputValue = movieInput.value;
  if (event.key === "Enter") {
    window.location.href = "search.html";
    localStorage.setItem("movieInputValue", movieInputValue);
  }
});
