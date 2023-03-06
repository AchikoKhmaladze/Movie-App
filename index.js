"use strict";

const api = "17be5c9e7798bcbda9f3bae494c563c7";
const search = document.querySelector(".search-bar");
const container = document.querySelector(".container");
const secondSection = document.querySelector(".second-section");
const button = document.querySelector(".search-button");
const message = document.querySelector(".message");

button.addEventListener("click", function () {
  const getMovie = async () => {
    if (search.value !== "") {
      try {
        const url3 = `https://www.omdbapi.com/?s=${search.value.replace(
          /\s+/g,
          " "
        )}&apikey=938f282c`;
        const resp = await fetch(`${url3}`);
        const data4 = await resp.json();

        // GET MOVIE ID AND MOVIE INFO

        const res = await fetch(
          `${apiUrl}//search/movie?api_key=${api}&query=${search.value.replace(
            /\s+/g,
            " "
          )}`
        );
        const data = await res.json();
        const id = data.results[0].id;

        const res2 = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${api}`
        );
        const data2 = await res2.json();
        const [year, month, day] = data2.release_date.split("-");
        console.log(data2);
        console.log(data2.vote_average.toFixed(1));

        // GET MOVIE PHOTO //

        const Or = data2.genres[1] ? data2.genres[1].name : "";
        const Or1 = data2.genres[2] ? data2.genres[2].name : "";

        const html = `
     <div class="movie">
                <img class="poster" src=${data4.Search[0].Poster}>
                <div class="movie-info">
                    <h1 class="movie-title">${data4.Search[0].Title}</h1>
                    <div class="popularity">
                        <i class="fa-solid fa-star"></i>
                        <p class="rate">${data2.vote_average.toFixed(1)}</p>
                    </div>
                    <div class="movie-stats">
                        <p class="year">${year}</p>
                        <p class="runtime">${data2.runtime + " min"}</p>
                    </div>
                    <div class="genres">
                        <div class="genre genre1">${data2.genres[0].name}</div>
                        <div class="genre genre2">${Or}</div>
                        <div class="genre genre3">${Or1}</div>
                    </div>
                        </div>
                        
              
            </div>
            <div class="last-section">
                  <h3>Plot:</h3>
                  <p class="description">${data2.overview}</p>
            </div>
              
     `;

        // CEHCK IF GENRE2 AND GENRE3 EXISTS //
        setTimeout(() => {
          const genre2 = document.querySelector(".genre2");
          if (genre2.textContent === "") {
            genre2.style.display = "none";
          }
        }, 3);

        setTimeout(() => {
          const genre3 = document.querySelector(".genre3");
          if (genre3.textContent === "") {
            genre3.style.display = "none";
          }
        }, 3);

        secondSection.innerHTML = html;
        message.textContent = "";
        search.value = "";

        // IF MOVIE NOT FOUND //
      } catch (error) {
        message.textContent = "Movie Not Found";
        secondSection.innerHTML = "";
        console.log("error");
        search.value = "";
      }

      // IF USER DOESNT ENTER NAME //
    } else {
      secondSection.innerHTML = "";
      message.textContent = "Enter A Movie Name";
    }
  };

  getMovie();
});

const apiUrl = "https://api.themoviedb.org/3";

// SEARCH ON ENTER CLICK //

container.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const getMovie = async () => {
      if (search.value !== "") {
        try {
          const url3 = `https://www.omdbapi.com/?s=${search.value.replace(
            /\s+/g,
            " "
          )}&apikey=938f282c`;

          const resp = await fetch(`${url3}`);
          const data4 = await resp.json();

          // GET MOVIE ID AND MOVIE INFO

          const res = await fetch(
            `${apiUrl}//search/movie?api_key=${api}&query=${search.value.replace(
              /\s+/g,
              " "
            )}`
          );
          const data = await res.json();
          const id = data.results[0].id;

          const res2 = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${api}`
          );
          const data2 = await res2.json();
          const [year, month, day] = data2.release_date.split("-");
          console.log(data2);
          console.log(data2.vote_average.toFixed(1));

          // GET MOVIE PHOTO //

          const Or = data2.genres[1] ? data2.genres[1].name : "";
          const Or1 = data2.genres[2] ? data2.genres[2].name : "";

          const html = `
       <div class="movie">
                  <img class="poster" src=${data4.Search[0].Poster}>
                  <div class="movie-info">
                      <h1 class="movie-title">${data4.Search[0].Title}</h1>
                      <div class="popularity">
                          <i class="fa-solid fa-star"></i>
                          <p class="rate">${data2.vote_average.toFixed(1)}</p>
                      </div>
                      <div class="movie-stats">
                          <p class="year">${year}</p>
                          <p class="runtime">${data2.runtime + " min"}</p>
                      </div>
                      <div class="genres">
                          <div class="genre genre1">${
                            data2.genres[0].name
                          }</div>
                          <div class="genre genre2">${Or}</div>
                          <div class="genre genre3">${Or1}</div>
                      </div>
                          </div>
                          
                
              </div>
              <div class="last-section">
                    <h3>Plot:</h3>
                    <p class="description">${data2.overview}</p>
              </div>
                
       `;

          // CEHCK IF GENRE2 AND GENRE3 EXISTS //
          setTimeout(() => {
            const genre2 = document.querySelector(".genre2");
            if (genre2.textContent === "") {
              genre2.style.display = "none";
            }
          }, 3);

          setTimeout(() => {
            const genre3 = document.querySelector(".genre3");
            if (genre3.textContent === "") {
              genre3.style.display = "none";
            }
          }, 3);

          secondSection.innerHTML = html;
          message.textContent = "";
          search.value = "";

          // IF MOVIE NOT FOUND //
        } catch (error) {
          message.textContent = "Movie Not Found";
          secondSection.innerHTML = "";
          console.log("error");
          search.value = "";
        }

        // IF USER DOESNT ENTER NAME //
      } else {
        secondSection.innerHTML = "";
        message.textContent = "Enter A Movie Name";
      }
    };

    getMovie();
  }
});
