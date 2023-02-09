const redis = require('redis');
const dotenv = require('dotenv');
dotenv.config();


const url = process.env.REDIS_URL;

const client = redis.createClient({
	url: url
});
client.connect();

client.on("error", (error) => {
		console.error(error);
});

client.on("connect", () => {
	console.log('Redis connection success!')
});

module.exports = client;