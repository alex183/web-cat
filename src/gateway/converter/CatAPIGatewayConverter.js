function convertCatListGatewayResponseToCatList(data) {
  return data.map(c => {
    return convertCatGatewayResponseToCat(c);
  });
}

function convertCatGatewayResponseToCat(c) {
  const cat = {};
  cat.id = c.id;
  cat.name = c.breeds!=undefined?c.breeds[0].name:"Breed name not found";
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