const { readFile } = require("fs");
const https = require("https");

async function yearOfMovies(year) {
  yourList = await getMovies(year);
  console.log(yourList);
}

function getMovies(year) {
   
    myPromise = new Promise((resolve, reject) => {

    const url = `https://jsonmock.hackerrank.com/api/movies?Year=${year}`;
    let movieData = https
      .get(url, (resp) => {
        let data = "";
        let movieList = [];

        resp.on("data", (chunk) => {
          data += chunk;
        });

        resp.on("end", () => {
          movieList = JSON.parse(data).data;
        //   console.log(movieList);  //debug log
          resolve( movieList);
        });
      })
      .on("error", (err) => {
        console.log("Error: " + err.message);
      });

      return movieData;
  });

  return myPromise;
}

yearOfMovies(2012);
yearOfMovies(2001);
