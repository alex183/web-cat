function convertCatListToCatListResponse(cats) {
  return cats.map(cat => {
    return convertCatToCatResponse(cat)
  });
}

function convertCatToCatResponse(cat) {
  const catResponse = {};
  catResponse.id = cat.id;
  catResponse.imageUrl = cat.imageUrl;

  catResponse.view = {};
  catResponse.view.starRatingRange = [1,2,3,4,5]  

  catResponse.breed = {};
  catResponse.breed.name = cat.breed.name;
  catResponse.breed.weight = cat.breed.weight
  catResponse.breed.origin = cat.breed.origin
  catResponse.breed.temperament = cat.breed.temperament
  catResponse.breed.description = cat.breed.description
  catResponse.breed.lifeSpan = cat.breed.lifeSpan
  catResponse.breed.altNames = cat.breed.altNames
  catResponse.breed.adaptabilityLevel = cat.breed.adaptabilityLevel
  catResponse.breed.affectionLevel = cat.breed.affectionLevel
  catResponse.breed.childFriendlyLevel = cat.breed.childFriendlyLevel
  catResponse.breed.dogFriendlyLevel = cat.breed.dogFriendlyLevel
  catResponse.breed.energyLevel = cat.breed.energyLevel
  catResponse.breed.groomingLevel = cat.breed.groomingLevel
  catResponse.breed.healthIssuesLevel = cat.breed.healthIssuesLevel
  catResponse.breed.intelligenceLevel = cat.breed.intelligenceLevel
  catResponse.breed.sheddingLevel = cat.breed.sheddingLevel
  catResponse.breed.socialNeedsLevel = cat.breed.socialNeedsLevel
  catResponse.breed.strangerFriendlyLevel = cat.breed.strangerFriendlyLevel
  catResponse.breed.vocalisationLevel = cat.breed.vocalisationLevel
  catResponse.breed.isHairless = cat.breed.isHairless
  catResponse.breed.isHypoallergenic = cat.breed.isHypoallergenic
  catResponse.breed.isRex = cat.breed.isRex
  catResponse.breed.isSuppressedTail = cat.breed.isSuppressedTail
  catResponse.breed.isShortLegs = cat.breed.isShortLegs
  catResponse.breed.isRare = cat.breed.isRare
  catResponse.breed.wikipediaUrl = cat.breed.wikipediaUrl

  return catResponse;
}

exports.convertCatListToCatListResponse = convertCatListToCatListResponse;
exports.convertCatToCatResponse = convertCatToCatResponse;
