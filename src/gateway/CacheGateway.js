const redisClient = require('../configuration/RedisConfiguration')
const breedsKey = "BREEDS";

async function getAllBreedsFromCache(){
    const result = await redisClient.get(breedsKey);
    const parsedResult = JSON.parse(result);
    if(parsedResult){
        console.log("breeds returned from cache")
    }
    return parsedResult;
}

async function saveBreedsOnCache(breeds){
    const result = await redisClient.set(breedsKey,JSON.stringify(breeds));
    console.log("breeds saved on cache")
    return result;
}

exports.getAllBreedsFromCache = getAllBreedsFromCache
exports.saveBreedsOnCache = saveBreedsOnCache