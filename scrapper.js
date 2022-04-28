const axios = require("axios");
const cheerio = require("cheerio");

module.exports = async function scrapper(
  url,
  newsCount,
  source,
  listEl,
  logoEl,
  imageEl,
  headerEl,
  titleEl,
  subheadEl,
  timeEl,
  tagEl
) {
  const news = [];
  var { data } = await axios.get(url);
  var $ = cheerio.load(data);
  var listItems = $(listEl);
  listItems.each((idx, el) => {
    if (newsCount && idx >= +newsCount) return;
    var newsItem = {
      logo: "",
      image: "",
      header: "",
      title: "",
      subhead: "",
      time: "",
      tag: "",
      source: "",
    };
    if (logoEl && logoEl !== "")
      newsItem.logo = $(el).find(logoEl).attr("data-src");
    if (imageEl && imageEl !== "")
      newsItem.image =
        $(el).find(imageEl).attr("data-src") ||
        $(el).find(imageEl).attr("data-lazy-src") ||
        $(el).find(imageEl).attr("src");
    if (headerEl && headerEl !== "")
      newsItem.header = $(el).find(headerEl).text();
    if (titleEl && titleEl !== "") newsItem.title = $(el).find(titleEl).text();
    if (subheadEl && subheadEl !== "")
      newsItem.subhead = $(el).find(subheadEl).text();
    if (timeEl && timeEl !== "")
      newsItem.time =
        $(el).find(timeEl).text() ||
        $(el).find(timeEl).attr("data-time-published");
    if (tagEl && tagEl !== "") newsItem.tag = $(el).find(headerEl).text();
    newsItem.source = source;
    news.push(newsItem);
  });
  return news;
};
