const scrapper = require("./scrapper");
const { ForbiddenError } = require("apollo-server");

const resolvers = {
  Query: {
    news: async (_, { category }) => {
      switch (category) {
        case "" || undefined:
          var allNews = [];
          var srcA = await scrapper(
            "https://www.bbc.com/news",
            "20",
            "bbc",
            ".gs-c-promo",
            "",
            ".gs-c-promo-image img",
            ".gs-c-promo-heading",
            ".gs-c-promo-heading__title",
            ".gs-c-promo-summary",
            ".gs-c-timestamp .qa-status-date-output"
          );
          allNews.push(...srcA);
          var srcB = await scrapper(
            "https://www.aljazeera.com/africa/",
            "10",
            "aljazeera",
            ".gc",
            "",
            ".gc__image-wrap img",
            ".gc__title",
            ".gc__title",
            ".gc__body-wrap",
            ".gc__date span[aria-hidden=true]"
          );
          allNews.push(...srcB);
          return allNews;

        case "sports":
          var allNews = [];
          var srcA = await scrapper(
            "https://africa.espn.com/",
            "15",
            "espn",
            ".contentItem--collection",
            ".contentItem__logo img",
            "",
            ".contentItem__header__headings",
            ".contentItem__title",
            ".contentItem__subhead",
            ".contentMeta__timestamp",
            ".contentMeta__author"
          );
          allNews.push(...srcA);
          var srcB = await scrapper(
            "https://www.aljazeera.com/sports/",
            "15",
            "aljazeera",
            ".gc",
            "",
            ".gc__image-wrap img",
            ".gc__title",
            ".gc__title",
            ".gc__body-wrap",
            ".gc__date span[aria-hidden=true]"
          );
          allNews.push(...srcB);
          return allNews;

        case "football":
          var allNews = [];
          var srcA = await scrapper(
            "https://www.espn.com/fantasy/football/",
            "30",
            "espn",
            ".contentItem--collection",
            ".contentItem__logo img",
            "",
            ".contentItem__header__headings",
            ".contentItem__title",
            ".contentItem__subhead",
            ".contentMeta__timestamp",
            ".contentMeta__author"
          );
          allNews.push(...srcA);
          return allNews;

        case "basketball":
          var allNews = [];
          var srcA = await scrapper(
            "https://www.espn.com/fantasy/basketball/",
            "30",
            "espn",
            ".contentItem--collection",
            ".contentItem__logo img",
            "",
            ".contentItem__header__headings",
            ".contentItem__title",
            ".contentItem__subhead",
            ".contentMeta__timestamp",
            ".contentMeta__author"
          );
          allNews.push(...srcA);
          return allNews;

        case "politics":
          var allNews = [];
          var srcA = await scrapper(
            "https://www.channelstv.com/category/politics/page/1/",
            "12",
            "channelstv",
            ".panel",
            "",
            ".img-container img",
            ".item-heading",
            ".item-heading"
          );
          allNews.push(...srcA);
          var srcB = await scrapper(
            "https://www.foxnews.com/politics",
            "18",
            "fox",
            ".article",
            "",
            ".m img",
            ".kicker-text",
            ".info-header .title",
            "",
            ".meta .time",
            ".eyebrow a"
          );
          allNews.push(...srcB);
          return allNews;

        case "entertainment":
          var allNews = [];
          var srcA = await scrapper(
            "https://www.foxnews.com/entertainment",
            "20",
            "fox",
            ".article",
            "",
            ".m img",
            ".kicker-text",
            ".info-header .title",
            "",
            ".meta .time",
            ".eyebrow a"
          );
          allNews.push(...srcA);
          var srcB = await scrapper(
            "https://www.bbc.com/news/entertainment_and_arts",
            "10",
            "bbc",
            ".gs-c-promo",
            "",
            ".gs-c-promo-image img",
            ".gs-c-promo-heading",
            ".gs-c-promo-heading__title",
            ".gs-c-promo-summary",
            ".gs-c-timestamp .qa-status-date-output"
          );
          allNews.push(...srcB);
          return allNews;

        default:
          throw new ForbiddenError("No data for this category");
      }
    },
  },
};

module.exports = {
  resolvers,
};
