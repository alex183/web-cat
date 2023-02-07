const express=require('express')
const router=express.Router()
const { convertCatListToCatListResponse, convertCatToCatResponse } = require("../controller/converter/CatResponseConverter");
const { getCatById } = require('../usecase/getCatById');
const { getCatsByBreedIds } = require('../usecase/getCatByBreedId');
const { getCatsByBreedName } = require('../usecase/getCatsByBreedName');
const { buildDefaultShowcase } = require('./HomeController');

router.get('', async (req, res) => {
  try {
      if (req.query.breed) {
        const breedId = req.query.breed;
        const catsByBreedIds = await getCatsByBreedIds(breedId.split(','));
        if(catsByBreedIds){
          const catResponse = convertCatToCatResponse(catsByBreedIds[0]);
          res.render('details', catResponse);
        }else{
          res.render('notFound');
        }        
      } else if (req.query.breedName) {
        const breedName = req.query.breedName;
        const catsByBreedName = await getCatsByBreedName(breedName);
        if(catsByBreedName.length>0){
          const searchResponse = {
            cats: convertCatListToCatListResponse(catsByBreedName)
          };
          res.render('searchResult', searchResponse);
        }else{
          res.render('notFound');
        }      
      } else {
        await buildDefaultShowcase(res);
      }
  } catch (err) {
      res.render('notFound');
  }
});

router.get('/:id', async (req, res) => {

  if (req.params.id) {
    const data = await getCatById(req.params.id);
    const catDetailsResponse = convertCatToCatResponse(data);
    res.render('details', catDetailsResponse);
  }
  else {
    await buildDefaultShowcase(res);
}

});

module.exports=router;