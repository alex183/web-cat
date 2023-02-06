const express = require('express');
const dotenv = require('dotenv');
const catsController = require('./src/controller/CatsController')
const homeController = require('./src/controller/HomeController')

dotenv.config();

const app = express();
const port = process.env.PORT;

app.set('views', './src/views')
app.use(express.static('./src/public'))
app.set('view engine', 'pug');

app.use('/cats',catsController)
app.use('/', homeController)

app.get('*', (req, res, next) => {
	res.status(404).send('Sorry, page not found');
	next();
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});