const { convertCatListGatewayResponseToCatList, convertCatListGatewayResponseToCat, convertCatGatewayResponseToCat } = require("./converter/CatAPIGatewayConverter");

const apiKeyHeader = {
  headers: {
    'x-api-key': 'live_n9k7FS1eylg4dr7akFrKj7jub6yajpndmDuQby0l7PDtNkoIMmK7rifi9x1eA1b5'
  }
};


async function getRandomCatsFromCatAPIWithLimitAndBreed(limit, breed) {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=' + limit + '&has_breeds=' + (breed == true ? "1" : "0"), apiKeyHeader);
  const data = await response.json();
  cats = convertCatListGatewayResponseToCatList(data);
  return cats;
}

async function getCatFromCatAPIByBreedId(breedId) {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?breed_ids='+breedId, apiKeyHeader);
  const data = await response.json();
  cats = convertCatListGatewayResponseToCat(data);
  return cats;
}

async function getCatFromCatAPIById(id) {
  const response = await fetch('https://api.thecatapi.com/v1/images/'+id, apiKeyHeader);
  const data = await response.json();
  cat = convertCatGatewayResponseToCat(data);
  return cat;
}


exports.getRandomCatsFromCatAPIWithLimitAndBreed = getRandomCatsFromCatAPIWithLimitAndBreed;
exports.getCatFromCatAPIByBreedId = getCatFromCatAPIByBreedId;
exports.getCatFromCatAPIById = getCatFromCatAPIById;