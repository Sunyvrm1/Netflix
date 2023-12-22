//nav

const navIcon = document.querySelector(".navIcon");
const navCont = document.querySelector(".header");

navIcon.addEventListener("click", () => {
  navCont.classList.toggle("active");
});

// localStorage

const storedSearch = localStorage.getItem("movieInputValue");
console.log(storedSearch);
