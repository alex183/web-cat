const { getCatFromCatAPIByBreedId } = require("../gateway/CatAPIGateway");


async function getCatsByBreedId(breedId) {
  cats = await getCatFromCatAPIByBreedId(breedId);
  return cats;
}

exports.getCatsByBreedId = getCatsByBreedId;
