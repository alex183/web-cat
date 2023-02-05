const { convertCatListGatewayResponseToCatList, convertCatListGatewayResponseToCat, convertCatGatewayResponseToCat, convertBreedListGatewayResponseToBreedList } = require("./converter/CatAPIGatewayConverter");

const catAPIHost = 'https://api.thecatapi.com'
const apiKeyHeader = {
  headers: {
    'x-api-key': 'live_n9k7FS1eylg4dr7akFrKj7jub6yajpndmDuQby0l7PDtNkoIMmK7rifi9x1eA1b5'
  }
};


async function getRandomCatsFromCatAPIWithLimitAndBreed(limit, breed) {
  const response = await fetch(catAPIHost+'/v1/images/search?limit=' + limit + '&has_breeds=' + (breed == true ? "1" : "0"), apiKeyHeader);
  const data = await response.json();
  cats = convertCatListGatewayResponseToCatList(data);
  return cats;
}

async function getCatsFromCatAPIByBreedIds(breedIds) {
  const response = await fetch(catAPIHost+'/v1/images/search?breed_ids='+breedIds.toString(), apiKeyHeader);
  const data = await response.json();
  cats = convertCatListGatewayResponseToCatList(data);
  return cats;
}

async function getCatFromCatAPIById(id) {
  const response = await fetch(catAPIHost+'/v1/images/'+id, apiKeyHeader);
  const data = await response.json();
  cat = convertCatGatewayResponseToCat(data);
  return cat;
}

async function getAllBreeds() {
  const response = await fetch(catAPIHost+'/v1/breeds', apiKeyHeader);
  const data = await response.json();
  breeds = convertBreedListGatewayResponseToBreedList(data);
  return breeds;
}

exports.getRandomCatsFromCatAPIWithLimitAndBreed = getRandomCatsFromCatAPIWithLimitAndBreed;
exports.getCatsFromCatAPIByBreedIds = getCatsFromCatAPIByBreedIds;
exports.getCatFromCatAPIById = getCatFromCatAPIById;
exports.getAllBreeds = getAllBreeds;