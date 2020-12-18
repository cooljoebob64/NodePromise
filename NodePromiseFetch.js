async function cleanPrintMovies(year) {
  let yourList;
  const url = `https://jsonmock.hackerrank.com/api/movies?Year=${year}`;
  yourList = await fetch(url);

  console.log(yourList);
}

cleanPrintMovies(2012);
