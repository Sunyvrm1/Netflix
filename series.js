const storedId = localStorage.getItem('clickedId');
console.log(storedId);

fetch(
    "https://api.themoviedb.org/3/trending/tv/day?api_key=d7667b78097516f5e82e6955576dcf62"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      const matchingId = data.results.find((item) => item.id.toString() === storedId);
      if(matchingId){
        console.log("suny")
        const name = document.getElementById("name");
        const genre = document.getElementById("genre");
        const overview = document.getElementById("overview");
        const release = document.getElementById("release");
        const rating = document.getElementById("rating");
        const poster = document.getElementById("poster");

        name.innerHTML = matchingId.name;
        genre.innerHTML = matchingId.genre_ids;
        overview.innerHTML = matchingId.overview;
        release.innerHTML = matchingId.first_air_date;
        rating.innerHTML = matchingId.vote_average;
        poster.src = 'https://image.tmdb.org/t/p/w500/' + matchingId.poster_path;
      } else{
        console.log('No match found');
      }
    });
