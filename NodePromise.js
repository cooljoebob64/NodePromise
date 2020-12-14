const { readFile } = require("fs");
const https = require("https");

async function printYearOfMovies(year) {
  let yourList;
  await getMovies(year).then(
    (res) => {
      yourList = res;
    },
    (err) => {
      console.log(err);
    }
  );
  console.log(yourList);
}

function getMovies(year) {
  myPromise = new Promise((resolve, reject) => {
    const url = `https://jsonmock.hackerrank.com/api/movies?Year=${year}`;
    // const url = "https://notarealurl.oopsies.definitelynotawebpage"; // this will cause the GET call to fail! for testing purposes.
    let movieData = https
      .get(url, (resp) => {
        let data = "";
        let movieList = [];

        resp.on("data", (chunk) => {
          data += chunk; //add the chunks together to make one big data
        });

        resp.on("end", () => {
          movieList = JSON.parse(data).data;
          //   console.log(movieList);  //logs the movie list for debugging
          resolve(movieList);
        });
      })
      .on("error", (err) => {
        reject(err);
      });

    return movieData;
  });

  return myPromise;
}

printYearOfMovies(2012);
// printYearOfMovies(2001);
// printYearOfMovies(1805); //returns an empty array 
