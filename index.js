const express = require('express');
const dotenv = require('dotenv');
const { getRandomCats } = require("./usecase/getRandomCats");
const { convertCatListToCatListResponse, convertCatToCatResponse } = require("./controller/converter/CatResponseConverter");
const { getCatsByBreedId } = require('./usecase/getCatByBreedId');
const { getCatById } = require('./usecase/getCatById');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set('views', './views')
app.set('view engine', 'pug');

app.get('/', async (req, res) => {
  
  const data = await getRandomCats();
  const showcaseResponse ={
    cats: []
  }
  showcaseResponse.cats = convertCatListToCatListResponse(data);
  res.render('showcase', showcaseResponse);
});

app.get('/cats', async (req, res) => {
  
  if(req.query.breed){
    const breed = req.query.breed
    const data = await getCatsByBreedId(breed);
    const catResponse = convertCatToCatResponse(data);
    res.render('details', catResponse)
  }else{
    res.render('showcase');
  } 

});

app.get('/cat/:id',  async (req, res) => {
  const data = await getCatById(req.params.id);
  const catDetailsResponse = convertCatToCatResponse(data);
  res.render('details', catDetailsResponse);

});

app.get('*', (req, res, next) => {
	res.status(404).send('Sorry, page not found');
	next();
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
