const { getRandomCatsFromCatAPIWithLimitAndBreed } = require("../gateway/CatAPIGateway");

async function getRandomCats() {
  const fiveCats = 5;
  const hasBreed = true;
  cats = await getRandomCatsFromCatAPIWithLimitAndBreed(fiveCats, hasBreed);
  return cats;
}

exports.getRandomCats = getRandomCats;
