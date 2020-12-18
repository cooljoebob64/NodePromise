const https = require("https");

async function cleanPrintMovies(year) {
  let yourList;
  const url = `https://jsonmock.hackerrank.com/api/movies?Year=${year}`;
  // const url = "https://notarealurl.oopsies.definitelynotawebpage"; // this will cause the GET call to fail! for testing purposes.

  yourList = await new Promise((res, rej) => {
    // wrap everything in a promise, so that we can call asynchronously
    https //using only the default HTTPS module!
      .get(url, (resp) => {
        // get the data, handle the response
        let data = "";
        resp.on("data", (chunk) => {
          data += chunk; //add the chunks together to make one big data
        });
        resp.on("end", () => {
          let listData = JSON.parse(data); //parse the data into json
          res(listData); // resolve with the nice json data
        });
      })
      .on("error", (err) => {
        rej(new Error(err)); // reject with error data if the call fails
      });
  });

  console.log(yourList); // print the data
}

cleanPrintMovies(2012);
