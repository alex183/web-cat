const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const { getRandomCats } = require("./src/usecase/getRandomCats");
const { convertCatListToCatListResponse, convertCatToCatResponse } = require("./src/controller/converter/CatResponseConverter");
const { getCatById } = require('./src/usecase/getCatById');
const { getCatsByBreedIds } = require('./src/usecase/getCatByBreedId');
const { getCatsByBreedName } = require('./src/usecase/getCatsByBreedName');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set('views', './src/views')
app.use(express.static('./src/public'))
app.set('view engine', 'pug');

app.get('/', async (req, res) => {
  
  await buildDefaultShowcase(res);
});

app.get('/cats', async (req, res) => {
  
try{
  if(req.query.breed){
    const breedId = req.query.breed
    const data = await getCatsByBreedIds(breedId.split(','));
    const catResponse = convertCatToCatResponse(data[0]);
    res.render('details', catResponse)
  }else if (req.query.breedName){
    const breedName = req.query.breedName
    const catsByBreedName = await getCatsByBreedName(breedName);
    const searchResponse = {
      cats: convertCatListToCatListResponse(catsByBreedName)
    }
    res.render('searchResult',searchResponse);
  } else{
    await buildDefaultShowcase(res)
  }
}catch(err){
  res.render('notFound')
}

});

app.get('/cats/:id',  async (req, res) => {

  if(req.params.id){
    const data = await getCatById(req.params.id);
    const catDetailsResponse = convertCatToCatResponse(data);
    res.render('details', catDetailsResponse);
  }
  else{
    await buildDefaultShowcase(res)
  }

});

app.get('*', (req, res, next) => {
	res.status(404).send('Sorry, page not found');
	next();
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

async function buildDefaultShowcase(res) {
  const data = await getRandomCats();
  const showcaseResponse = {
    cats: []
  };
  showcaseResponse.cats = convertCatListToCatListResponse(data);
  res.render('showcase', showcaseResponse);
}

