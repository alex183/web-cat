const { getCatFromCatAPIById } = require("../gateway/CatAPIGateway");

async function getCatById(breedId) {
  const cat = await getCatFromCatAPIById(breedId);
  return cat;
}

exports.getCatById = getCatById;
