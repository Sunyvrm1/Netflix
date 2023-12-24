const storedId = localStorage.getItem("clickedId");
const storedId1 = localStorage.getItem("clickedId1");
// console.log(storedId);
// console.log(storedId1);

function displayMovies(ApiURL, storedId) {
  fetch(ApiURL)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);

      const matchingId = data.results.find(
        (item) => item.id.toString() === storedId
      );
      if (matchingId) {
        const name = document.getElementById("name");
        const overview = document.getElementById("overview");
        const release = document.getElementById("release");
        const rating = document.getElementById("rating");
        const poster = document.getElementById("poster");
        const language = document.getElementById("language");
        const country = document.getElementById("country");

        name.innerHTML = matchingId.name || matchingId.title;
        overview.innerHTML = matchingId.overview;
        release.innerHTML =
          matchingId.first_air_date || matchingId.release_date;
        rating.innerHTML = matchingId.vote_average;
        country.innerHTML = matchingId.origin_country || "N/A";
        language.innerHTML = matchingId.original_language;
        poster.src =
          "https://image.tmdb.org/t/p/w500/" + matchingId.poster_path;
      } else {
        console.log("No match found");
      }
    });
}

displayMovies(storedId1, storedId);
