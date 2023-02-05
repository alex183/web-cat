function convertCatListGatewayResponseToCatList(data) {
  return data.map(c => {
    return convertCatGatewayResponseToCat(c);
  });
}

function convertBreedListGatewayResponseToBreedList(data) {
  return data.map(breedGatewayResponse => {
    return convertBreedGatewayResponseToBreed(breedGatewayResponse);
  });
}

function convertCatGatewayResponseToCat(c) {
  const cat = {
    breed: {}
  };
  if(c.breeds){
    var breed = c.breeds[0]
    cat.breed = convertBreedGatewayResponseToBreed(breed);
  }
  cat.id = c.id;
  cat.imageUrl = c.url;
  return cat;
}



function convertBreedGatewayResponseToBreed(breedGatewayResponse) {
  const breed = {
    id: breedGatewayResponse.id,
    name: breedGatewayResponse.name,
    weight: breedGatewayResponse.weight.metric,
    origin: breedGatewayResponse.origin,
    temperament: breedGatewayResponse.temperament,
    description: breedGatewayResponse.description,
    lifeSpan: breedGatewayResponse.life_span,
    AltNames: breedGatewayResponse.alt_names,
    adaptabilityLevel: breedGatewayResponse.adaptability,
    affectionLevel: breedGatewayResponse.affection_level,
    childFriendlyLevel: breedGatewayResponse.child_friendly,
    dogFriendlyLevel: breedGatewayResponse.dog_friendly,
    energyLevel: breedGatewayResponse.energy_level,
    groomingLevel: breedGatewayResponse.grooming,
    healthIssuesLevel: breedGatewayResponse.health_issues,
    intelligenceLevel: breedGatewayResponse.intelligence,
    sheddingLevel: breedGatewayResponse.shedding_level,
    socialNeedsLevel: breedGatewayResponse.social_needs,
    strangerFriendlyLevel: breedGatewayResponse.stranger_friendly,
    vocalisationLevel: breedGatewayResponse.vocalisation,
    isHairless: breedGatewayResponse.hairless == 1 ? true : false,
    isHypoallergenic: breedGatewayResponse.hypoallergenic == 1 ? true : false,
    isRex: breedGatewayResponse.rex == 1 ? true : false,
    isSuppressedTail: breedGatewayResponse.suppressed_tail == 1 ? true : false,
    isShortLegs: breedGatewayResponse.short_legs == 1 ? true : false,
    isRare: breedGatewayResponse.rare == 1 ? true : false,
    wikipediaUrl: breedGatewayResponse.wikipedia_url,
    image:{
      id: breedGatewayResponse.image!=undefined?breedGatewayResponse.image.id:"",
      imageUrl: breedGatewayResponse.image!=undefined?breedGatewayResponse.image.url:"https://http.cat/404"
    }
  }
  return breed;  
}

function convertCatListGatewayResponseToCat(cats) {
  return convertCatGatewayResponseToCat(cats)
}

exports.convertCatListGatewayResponseToCatList = convertCatListGatewayResponseToCatList;
exports.convertCatListGatewayResponseToCat = convertCatListGatewayResponseToCat;
exports.convertCatGatewayResponseToCat = convertCatGatewayResponseToCat;
exports.convertBreedListGatewayResponseToBreedList = convertBreedListGatewayResponseToBreedList;