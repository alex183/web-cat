const { getAllBreeds } = require("../gateway/CatAPIGateway");


async function getCatsByBreedSearchName(searchName) {
  const breeds = await getAllBreeds();
  const filteredBreedsByName = breeds.filter(breed => {
    return doesBreedNameIncludeSearchName(breed.name,searchName) || doesAltNamesIncludeSearchName(breed.altNames,searchName)
  })

  const cats = filteredBreedsByName.map(breed =>{
    return {
      id: breed.image.id,
      breed: {
        id: breed.id,
        name: breed.name
      },
      imageUrl: breed.image.imageUrl
    }
  })

  return cats;
}

function doesBreedNameIncludeSearchName(breedName, searchName) {
  if(breedName){
    return normalizeString(breedName).includes(normalizeString(searchName));
  }
}

function doesAltNamesIncludeSearchName(altNames, searchName) {
  if(altNames){
    return normalizeString(altNames).includes(normalizeString(searchName));
  }
}

function normalizeString(string){
  if(string){
    return string.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }
}

exports.getCatsByBreedName = getCatsByBreedSearchName;
