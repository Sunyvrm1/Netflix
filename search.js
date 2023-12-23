//nav

const navIcon = document.querySelector(".navIcon");
const navCont = document.querySelector(".header");

navIcon.addEventListener("click", () => {
  navCont.classList.toggle("active");
});

// localStorage

const storedSearch = localStorage.getItem("movieInputValue");
console.log(storedSearch);

const searchPara = document.getElementById("searchPara");
searchPara.innerHTML = `Showing results related to "${storedSearch}"`;

const apiKey = `https://api.themoviedb.org/3/search/movie?query=${storedSearch}&api_key=d7667b78097516f5e82e6955576dcf62`;

fetch(apiKey)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    const searchCont = document.querySelector(".seachCont");
    const searchImg = document.querySelector(".seachCont img");
    data.results.map((apiImage) => {
      if (apiImage.poster_path == null) {
        // searchImg.style.display = "none";
      } else {
        const html = `<img src="https://image.tmdb.org/t/p/w500/${apiImage.poster_path}" alt="${apiImage.id}" data-author="${apiKey}" />`;
        searchCont.insertAdjacentHTML("beforeend", html);
      }
    });
    // click event on images
    const images = document.querySelector(".seachCont");
    images.addEventListener("click", (event) => {
      const clickedId = event.target.getAttribute("alt");
      const clickedId1 = event.target.getAttribute("data-author");
      console.log("Clicked ID:", clickedId);
      console.log("Clicked API:", clickedId1);
      localStorage.setItem("clickedId", clickedId);
      localStorage.setItem("clickedId1", clickedId1);
      window.location.href = "series.html";
    });
  });
