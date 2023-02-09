const { getCatsFromCatAPIByBreedIds } = require("../gateway/CatAPIGateway");


async function getCatsByBreedIds(breedId) {
  const cats = await getCatsFromCatAPIByBreedIds(breedId);
  return cats;
}

exports.getCatsByBreedIds = getCatsByBreedIds;
