const { getCatFromCatAPIById } = require("../gateway/CatAPIGateway");

async function getCatById(breedId) {
  cat = await getCatFromCatAPIById(breedId);
  return cat;
}

exports.getCatById = getCatById;
