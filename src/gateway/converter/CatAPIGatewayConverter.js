function convertCatListGatewayResponseToCatList(data) {
  return data.map(c => {
    return convertCatGatewayResponseToCat(c);
  });
}

function convertCatGatewayResponseToCat(c) {
  const cat = {
    breed: {}
  };
  if(c.breeds[0]!=undefined){
    var breed = c.breeds[0]
    cat.breed.name = breed.name
    cat.breed.weight = breed.weight.metric
    cat.breed.origin = breed.origin
    cat.breed.temperament = breed.temperament
    cat.breed.description = breed.description
    cat.breed.lifeSpan = breed.life_span
    cat.breed.AltNames = breed.alt_names
    cat.breed.adaptabilityLevel = breed.adaptability
    cat.breed.affectionLevel = breed.affection_level
    cat.breed.childFriendlyLevel = breed.child_friendly
    cat.breed.dogFriendlyLevel = breed.dog_friendly
    cat.breed.energyLevel = breed.energy_level
    cat.breed.groomingLevel = breed.grooming
    cat.breed.healthIssuesLevel = breed.health_issues
    cat.breed.intelligenceLevel = breed.intelligence
    cat.breed.sheddingLevel = breed.shedding_level
    cat.breed.socialNeedsLevel = breed.social_needs
    cat.breed.strangerFriendlyLevel = breed.stranger_friendly
    cat.breed.vocalisationLevel = breed.vocalisation
    cat.breed.isHairless = breed.hairless==1?true:false
    cat.breed.isHypoallergenic = breed.hypoallergenic==1?true:false
    cat.breed.isRex = breed.rex==1?true:false
    cat.breed.isSuppressedTail = breed.suppressed_tail==1?true:false
    cat.breed.isShortLegs = breed.short_legs==1?true:false
    cat.breed.isRare = breed.rare==1?true:false
    cat.breed.wikipediaUrl = breed.wikipedia_url
  }
  cat.id = c.id;
  cat.imageUrl = c.url;
  return cat;
}

function convertCatListGatewayResponseToCat(cats) {
  const catGatewayResponse = cats.find(cat=>cat!==undefined)
  return convertCatGatewayResponseToCat(catGatewayResponse)
}

exports.convertCatListGatewayResponseToCatList = convertCatListGatewayResponseToCatList;
exports.convertCatListGatewayResponseToCat = convertCatListGatewayResponseToCat;
exports.convertCatGatewayResponseToCat = convertCatGatewayResponseToCat;