const { getCatFromCatAPIByBreedId } = require("../gateway/CatAPIGateway");


async function getCatByBreedId(breedId) {
  cats = await getCatFromCatAPIByBreedId(breedId);
  return cats;
}

exports.getCatByBreedId = getCatByBreedId;
