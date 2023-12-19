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
             }" alt="${arr.id}" />
         </div>`;
      box.insertAdjacentHTML("beforeend", html);
    });

    //Image clicked event

    const images = document.querySelectorAll(".images img");
    images.forEach((img) => {
      img.addEventListener("click", (event) => {
        const clickedId = event.target.getAttribute("alt");
        storeClickedId(clickedId);
        console.log("Clicked ID:", clickedId);
      });
    });
  });

// -------------------------- Calling API 2 --------------------------

// fetch(
//   "https://api.themoviedb.org/3/tv/on_the_air?api_key=d7667b78097516f5e82e6955576dcf62"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     data.results.map((arr) => {
//       const box = document.querySelector(".carouselbox1");
//       const html = `
//          <div class="images1">
//          <img src="https://image.tmdb.org/t/p/w500/${arr.backdrop_path}" alt="${arr.id}" />
//           </div>
//          `;
//       box.insertAdjacentHTML("beforeend", html);
//     });
//   });

// // -------------------------- Calling API 3 --------------------------

// fetch(
//   "https://api.themoviedb.org/3/discover/tv?api_key=d7667b78097516f5e82e6955576dcf62"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     data.results.map((arr) => {
//       const box = document.querySelector(".carouselbox2");
//       const html = `
//            <div class="images1">
//            <img src="https://image.tmdb.org/t/p/w500/${arr.backdrop_path}" alt="${arr.id}" />
//             </div>
//            `;
//       box.insertAdjacentHTML("beforeend", html);
//     });
//   });

// // -------------------------- Calling API 4 --------------------------

// fetch(
//   "https://api.themoviedb.org/3/movie/upcoming?api_key=d7667b78097516f5e82e6955576dcf62"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     delete data.results[7];
//     data.results.map((arr) => {
//       const box = document.querySelector(".carouselbox3");
//       const html = `
//            <div class="images1">
//            <img src="https://image.tmdb.org/t/p/w500/${arr.backdrop_path}" alt="${arr.id}" />
//             </div>
//            `;
//       box.insertAdjacentHTML("beforeend", html);
//     });
//   });

// // -------------------------- Calling API 5 --------------------------

// fetch(
//   "https://api.themoviedb.org/3/trending/movie/day?api_key=d7667b78097516f5e82e6955576dcf62"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     data.results.map((arr) => {
//       const box = document.querySelector(".carouselbox4");
//       const html = `
//            <div class="images1">
//            <img src="https://image.tmdb.org/t/p/w500/${arr.backdrop_path}" alt="${arr.id}" />
//             </div>
//            `;
//       box.insertAdjacentHTML("beforeend", html);
//     });
//   });

// // -------------------------- Calling API 6  --------------------------

// const storeClickedId = (clickedId) => {
//   localStorage.setItem("clickedId", clickedId);
// };

// fetch(
//   "https://api.themoviedb.org/3/trending/tv/day?api_key=d7667b78097516f5e82e6955576dcf62"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);

//     data.results.map((arr, i) => {
//       const box = document.querySelector(".carouselbox5");
//       const html = `
//            <div class="images1">
//            <img src="https://image.tmdb.org/t/p/w500/${arr.backdrop_path}" alt="${arr.id}" />
//             </div>
//            `;
//       box.insertAdjacentHTML("beforeend", html);
//     });

//     //Image clicked event

//     const images = document.querySelectorAll(".images1 img");
//     images.forEach((img) => {
//       img.addEventListener("click", (event) => {
//         const clickedId = event.target.getAttribute("alt");
//         console.log("Clicked ID:", clickedId);
//         storeClickedId(clickedId);
//         window.location.href = "series.html";
//       });
//     });
//   });

// Fetch and display images

function fetchandDisplay(apiEndpoint, targetBox, clickHandler) {
  fetch(apiEndpoint)
    .then((response) => response.json())
    .then((data) => {
      data.results.map((item) => {
        const box = document.querySelector(targetBox);
        const html = `
        <div class="images1">
          <img src="https://image.tmdb.org/t/p/w500/${item.backdrop_path}" alt="${item.id}" />
        </div>`;
        // console.log(apiEndpoint);
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
  console.log("Clicked ID:", clickedId);
  localStorage.setItem("clickedId", clickedId);
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

const middleTextArray = apiEndpoints.map((url) => {
  const startIndex = url.indexOf("/3/") + 3; // Index after "/3/"
  const endIndex = url.indexOf("?"); // Index before the query string
  const middleText = url.substring(startIndex, endIndex);
  return middleText;

  function handleAPIClick(event) {
    const clickedAPI = event.target.getAttribute("alt");
    console.log("Clicked ID:", clickedAPI);
    localStorage.setItem("clickedAPI", clickedAPI);
  }
});

// console.log(middleTextArray);

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
