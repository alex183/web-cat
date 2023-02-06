const express=require('express');
const { getRandomCats } = require('../usecase/getRandomCats');
const { convertCatListToCatListResponse } = require('./converter/CatResponseConverter');
const router=express.Router();

router.get('/', async (req, res) => {
  await buildDefaultShowcase(res);
});
  
async function buildDefaultShowcase(res) {
	const data = await getRandomCats();
	const showcaseResponse = {
			cats: []
	};
	showcaseResponse.cats = convertCatListToCatListResponse(data);
	res.render('showcase', showcaseResponse);
}

exports.buildDefaultShowcase = buildDefaultShowcase;
module.exports=router;