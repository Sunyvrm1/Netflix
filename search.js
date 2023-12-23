//nav

const navIcon = document.querySelector(".navIcon");
const navCont = document.querySelector(".header");

navIcon.addEventListener("click", () => {
  navCont.classList.toggle("active");
});

// localStorage

const storedSearch = localStorage.getItem("movieInputValue");
console.log(storedSearch);

fetch(
  `https://api.themoviedb.org/3/search/movie?query=${storedSearch}&api_key=d7667b78097516f5e82e6955576dcf62`
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);

    data.results.map((apiImage) => {
      const searchCont = document.querySelector(".seachCont");
      if (apiImage.poster_path == "null") {
        `<img src="https://image.tmdb.org/t/p/w500/" alt="" />`;
      }
      const html = `<img src="https://image.tmdb.org/t/p/w500/${apiImage.poster_path}" alt="${apiImage.id}" />`;
      searchCont.insertAdjacentHTML("beforeend", html);
    });
  });
