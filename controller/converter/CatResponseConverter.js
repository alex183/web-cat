function convertCatListToCatListResponse(cats) {
  return cats.map(cat => {
    return convertCatToCatResponse(cat)
  });
}

function convertCatToCatResponse(cat) {
  const catResponse = {};
  catResponse.id = cat.id;
  catResponse.name = cat.name;
  catResponse.imageUrl = cat.imageUrl;
  return catResponse;
}

exports.convertCatListToCatListResponse = convertCatListToCatListResponse;
exports.convertCatToCatResponse = convertCatToCatResponse;
