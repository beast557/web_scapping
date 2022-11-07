const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();
const PORT = 8080;

const url = "https://www.imdb.com/chart/top/";

axios(url).then((response) => {
  const html = response.data;
  const arr = [];
  const $ = cheerio.load(html);
  $("table tr", html).each(function () {
    const title = $(this).find(".titleColumn a").text().trim();
    const rating = $(this).find(".ratingColumn strong").text();
    arr.push({
      title,
      rating,
    });
  });
  console.log(arr);
});

app.listen(PORT, () => {
  console.log(`Working on ${PORT}`);
});
